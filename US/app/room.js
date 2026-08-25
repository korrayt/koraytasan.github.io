const ICE_SERVERS = [
  { urls: "stun:stun.l.google.com:19302" },
  { urls: "stun:stun1.l.google.com:19302" }
];

function encodeBase64Url(text) {
  const bytes = new TextEncoder().encode(text);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeBase64Url(text) {
  const normalized = String(text || "").replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized + "=".repeat((4 - (normalized.length % 4 || 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

async function waitForIceGatheringComplete(pc) {
  if (pc.iceGatheringState === "complete") return;
  await new Promise((resolve) => {
    const finish = () => {
      if (pc.iceGatheringState === "complete") {
        pc.removeEventListener("icegatheringstatechange", finish);
        resolve();
      }
    };
    pc.addEventListener("icegatheringstatechange", finish);
    setTimeout(() => {
      pc.removeEventListener("icegatheringstatechange", finish);
      resolve();
    }, 2500);
  });
}

function createSignalCode(payload) {
  return `capy1.${encodeBase64Url(JSON.stringify(payload))}`;
}

function parseSignalCode(code) {
  const normalized = String(code || "").trim();
  if (!normalized.startsWith("capy1.")) {
    throw new Error("CAPY sinyal kodu degil.");
  }
  return JSON.parse(decodeBase64Url(normalized.slice(6)));
}

function createPeerConnection() {
  return new RTCPeerConnection({ iceServers: ICE_SERVERS });
}

export class RoomBridge {
  constructor({ onStatusChange, onMessage }) {
    this.onStatusChange = typeof onStatusChange === "function" ? onStatusChange : () => {};
    this.onMessage = typeof onMessage === "function" ? onMessage : () => {};
    this.role = "solo";
    this.roomId = "";
    this.sessionId = "";
    this.status = "Bagli degil";
    this.pendingHostSessions = new Map();
    this.hostChannel = null;
    this.hostPeer = null;
    this.guestPeer = null;
    this.guestChannel = null;
  }

  setStatus(status) {
    this.status = status;
    this.onStatusChange(status);
  }

  reset() {
    this.pendingHostSessions.forEach((session) => {
      try {
        session.pc.close();
      } catch {
        // ignore
      }
    });
    this.pendingHostSessions.clear();

    for (const peer of [this.hostPeer, this.guestPeer]) {
      if (!peer) continue;
      try {
        peer.close();
      } catch {
        // ignore
      }
    }

    this.hostPeer = null;
    this.hostChannel = null;
    this.guestPeer = null;
    this.guestChannel = null;
    this.role = "solo";
    this.roomId = "";
    this.sessionId = "";
    this.setStatus("Bagli degil");
  }

  isConnected() {
    if (this.role === "host") {
      return this.hostChannel?.readyState === "open";
    }
    if (this.role === "guest") {
      return this.guestChannel?.readyState === "open";
    }
    return false;
  }

  send(payload) {
    const channel = this.role === "host" ? this.hostChannel : this.guestChannel;
    if (!channel || channel.readyState !== "open") return false;
    channel.send(JSON.stringify(payload));
    return true;
  }

  async createHostInvite({ roomId, hostName }) {
    this.reset();
    this.role = "host";
    this.roomId = roomId;
    this.setStatus("Oda hazirlaniyor");

    const sessionId = `sess-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
    const pc = createPeerConnection();
    const channel = pc.createDataChannel("capy-room");
    this.hostPeer = pc;
    this.hostChannel = channel;
    this.sessionId = sessionId;

    this.attachChannelHandlers(channel, "host");
    this.attachPeerHandlers(pc, "host", sessionId);

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await waitForIceGatheringComplete(pc);

    const code = createSignalCode({
      kind: "host-offer",
      roomId,
      sessionId,
      hostName,
      description: pc.localDescription
    });

    this.setStatus("Davet kodu hazir");
    return code;
  }

  async acceptHostInvite(inviteCode, { guestName }) {
    const payload = parseSignalCode(inviteCode);
    if (payload.kind !== "host-offer") {
      throw new Error("Gecersiz host davet kodu.");
    }

    this.reset();
    this.role = "guest";
    this.roomId = payload.roomId;
    this.sessionId = payload.sessionId;
    this.setStatus("Baglaniyor");

    const pc = createPeerConnection();
    this.guestPeer = pc;

    pc.ondatachannel = (event) => {
      this.guestChannel = event.channel;
      this.attachChannelHandlers(event.channel, "guest");
      this.setStatus("Cevap hazirlaniyor");
    };

    this.attachPeerHandlers(pc, "guest", this.sessionId);

    await pc.setRemoteDescription(payload.description);
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    await waitForIceGatheringComplete(pc);

    const answerCode = createSignalCode({
      kind: "guest-answer",
      roomId: payload.roomId,
      sessionId: payload.sessionId,
      guestName,
      description: pc.localDescription
    });

    this.setStatus("Cevap kodu hazir");
    return answerCode;
  }

  async acceptGuestAnswer(answerCode) {
    const payload = parseSignalCode(answerCode);
    if (payload.kind !== "guest-answer") {
      throw new Error("Gecersiz cevap kodu.");
    }
    if (payload.sessionId !== this.sessionId) {
      throw new Error("Bu cevap aktif oda ile eslesmiyor.");
    }
    if (!this.hostPeer) {
      throw new Error("Host baglantisi bulunamadi.");
    }

    await this.hostPeer.setRemoteDescription(payload.description);
    this.setStatus("Baglanti bekleniyor");
    return true;
  }

  attachPeerHandlers(pc, role, sessionId) {
    pc.onconnectionstatechange = () => {
      const state = pc.connectionState;
      if (state === "connected") {
        this.setStatus(role === "host" ? "Oda baglandi" : "Odaya baglandi");
      } else if (state === "disconnected" || state === "failed" || state === "closed") {
        this.setStatus("Baglanti koptu");
      }
      if (role === "host" && state === "connected") {
        const session = this.pendingHostSessions.get(sessionId);
        if (session) {
          session.connected = true;
        }
      }
    };

    pc.oniceconnectionstatechange = () => {
      if (pc.iceConnectionState === "failed") {
        this.setStatus("ICE baglantisi basarisiz");
      }
    };
  }

  attachChannelHandlers(channel, role) {
    channel.onopen = () => {
      this.setStatus(role === "host" ? "Oda acik" : "Odaya baglandi");
      this.send({
        type: "hello",
        role,
        timestamp: new Date().toISOString()
      });
    };

    channel.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        this.onMessage(payload, { role, roomId: this.roomId });
      } catch {
        // Ignore malformed payloads.
      }
    };

    channel.onclose = () => {
      this.setStatus("Baglanti kapandi");
    };
  }

  createHostSession(roomId, hostName) {
    const sessionId = `sess-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
    const pc = createPeerConnection();
    const channel = pc.createDataChannel("capy-room");
    this.pendingHostSessions.set(sessionId, { pc, channel, connected: false });
    this.attachChannelHandlers(channel, "host");
    this.attachPeerHandlers(pc, "host", sessionId);
    return { sessionId, pc };
  }
}

export function decodeCapySignal(code) {
  return parseSignalCode(code);
}
