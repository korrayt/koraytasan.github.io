const STORAGE_KEY = "us-internal-chat-state-v1";
const CHANNEL_KEY = "us-internal-chat-broadcast-v1";
const APP_PATH = "/US/app/";
const DEFAULT_CHANNELS = [
  { id: "genel", name: "Genel", description: "Hızlı duyurular ve günlük akış" },
  { id: "operasyon", name: "Operasyon", description: "Plan, teslim ve takip" },
  { id: "duyurular", name: "Duyurular", description: "Tek yönlü resmi notlar" },
  { id: "destek", name: "Destek", description: "İç yardım ve sorular" }
];
const DEFAULT_MEMBERS = [
  { id: "m1", name: "Merve", role: "Proje", active: true },
  { id: "m2", name: "Atlas", role: "Tasarım", active: true },
  { id: "m3", name: "Deniz", role: "Operasyon", active: true },
  { id: "m4", name: "Koray", role: "Yönetim", active: true }
];
const DEFAULT_MESSAGES = {
  genel: [
    {
      id: "seed-1",
      author: "Merve",
      text: "Bugün saat 14:00'te hızlı durum toplantısı var.",
      createdAt: "2026-06-29T09:15:00.000Z",
      reactions: [{ emoji: "👍", count: 3 }]
    },
    {
      id: "seed-2",
      author: "Atlas",
      text: "Yeni revize edilen sunum kanalda.",
      createdAt: "2026-06-29T09:22:00.000Z",
      reactions: [{ emoji: "✨", count: 1 }]
    }
  ],
  operasyon: [
    {
      id: "seed-3",
      author: "Deniz",
      text: "Bugünün teslimleri için kontrol listesi eklendi.",
      createdAt: "2026-06-29T08:55:00.000Z",
      reactions: [{ emoji: "✅", count: 2 }]
    }
  ],
  duyurular: [
    {
      id: "seed-4",
      author: "Sistem",
      text: "Bu alan telefon ve e-posta toplamadan çalışır.",
      createdAt: "2026-06-29T08:30:00.000Z",
      system: true,
      reactions: []
    }
  ],
  destek: [
    {
      id: "seed-5",
      author: "Koray",
      text: "Yardıma ihtiyacın varsa buraya yaz.",
      createdAt: "2026-06-29T08:45:00.000Z",
      reactions: [{ emoji: "💬", count: 1 }]
    }
  ]
};

function makeId(prefix = "id") {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

const state = {
  username: "",
  clientId: makeId("client"),
  activeChannel: "genel",
  channels: clone(DEFAULT_CHANNELS),
  members: clone(DEFAULT_MEMBERS),
  messages: clone(DEFAULT_MESSAGES),
  broadcast: null
};

const el = (id) => document.getElementById(id);

function sanitizeName(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, 24);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    state.username = sanitizeName(parsed.username);
    state.activeChannel = parsed.activeChannel || state.activeChannel;
    if (Array.isArray(parsed.channels) && parsed.channels.length) {
      state.channels = parsed.channels;
    }
    if (parsed.messages && typeof parsed.messages === "object") {
      state.messages = mergeMessages(parsed.messages);
    }
  } catch {
    // Fall back to the seeded demo state.
  }
}

function mergeMessages(saved) {
  const merged = clone(DEFAULT_MESSAGES);
  for (const channel of Object.keys(saved || {})) {
    const items = Array.isArray(saved[channel]) ? saved[channel] : [];
    merged[channel] = items.map(normalizeMessage).filter(Boolean);
    if (!merged[channel].length && DEFAULT_MESSAGES[channel]) {
      merged[channel] = clone(DEFAULT_MESSAGES[channel]);
    }
  }
  return merged;
}

function normalizeMessage(message) {
  if (!message || typeof message !== "object") return null;
  return {
    id: message.id || makeId("message"),
    author: sanitizeName(message.author) || "Anonim",
    text: String(message.text || "").slice(0, 4000),
    createdAt: message.createdAt || new Date().toISOString(),
    mine: Boolean(message.mine),
    system: Boolean(message.system),
    reactions: Array.isArray(message.reactions)
      ? message.reactions.map((reaction) => ({
          emoji: String(reaction.emoji || "✨").slice(0, 4),
          count: Math.max(1, Number(reaction.count) || 1)
        }))
      : []
  };
}

function saveState() {
  const payload = {
    username: state.username,
    activeChannel: state.activeChannel,
    channels: state.channels,
    messages: state.messages
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function currentChannelMessages() {
  return state.messages[state.activeChannel] || [];
}

function initials(name) {
  return sanitizeName(name)
    .split(" ")
    .map((part) => part[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase() || "MP";
}

function formatTime(iso) {
  return new Intl.DateTimeFormat("tr-TR", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(iso));
}

function updateStats() {
  el("messageCount").textContent = String(currentChannelMessages().length);
  el("memberCount").textContent = String(state.members.filter((member) => member.active).length);
}

function renderChannels() {
  const list = el("channelList");
  list.innerHTML = "";

  state.channels.forEach((channel) => {
    const item = document.createElement("div");
    item.className = `channel-item${state.activeChannel === channel.id ? " active" : ""}`;
    item.innerHTML = `
      <button type="button" data-channel="${channel.id}">
        <strong># ${channel.name}</strong>
        <small>${channel.description}</small>
      </button>
      <span class="channel-pill">${(state.messages[channel.id] || []).length}</span>
    `;
    list.appendChild(item);
  });

  list.querySelectorAll("button[data-channel]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeChannel = button.dataset.channel;
      persistAndRender();
    });
  });
}

function renderMembers() {
  const list = el("memberList");
  list.innerHTML = "";
  state.members.forEach((member) => {
    const item = document.createElement("div");
    item.className = "member-item";
    item.innerHTML = `
      <div class="member-row">
        <span class="dot"></span>
        <div>
          <strong>${member.name}</strong>
          <small>${member.role}</small>
        </div>
      </div>
      <span class="mini-note">${member.active ? "Çevrimiçi" : "Çevrimdışı"}</span>
    `;
    list.appendChild(item);
  });
}

function renderMessages() {
  const list = el("messageList");
  const template = el("messageTemplate");
  list.innerHTML = "";

  currentChannelMessages().forEach((message) => {
    const clone = template.content.firstElementChild.cloneNode(true);
    clone.classList.toggle("mine", message.mine);
    clone.querySelector(".avatar").textContent = initials(message.author);
    clone.querySelector(".author").textContent = message.system ? "Sistem" : message.author;
    clone.querySelector(".time").textContent = formatTime(message.createdAt);
    clone.querySelector(".content").textContent = message.text;
    const reactions = clone.querySelector(".reactions");
    reactions.innerHTML = "";

    if (Array.isArray(message.reactions) && message.reactions.length) {
      message.reactions.forEach((reaction) => {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "reaction-chip";
        chip.dataset.id = message.id;
        chip.dataset.emoji = reaction.emoji;
        chip.innerHTML = `<strong>${reaction.emoji}</strong><span>${reaction.count}</span>`;
        chip.addEventListener("click", () => addReaction(message.id, reaction.emoji));
        reactions.appendChild(chip);
      });
    }

    list.appendChild(clone);
  });

  if (!currentChannelMessages().length) {
    const empty = document.createElement("div");
    empty.className = "message";
    empty.innerHTML = `
      <div class="avatar">mp</div>
      <div class="bubble">
        <div class="message-meta">
          <strong class="author">Sistem</strong>
          <span class="time">şimdi</span>
        </div>
        <p class="content">Bu kanalda henüz mesaj yok. İlk mesajı sen yaz.</p>
      </div>
    `;
    list.appendChild(empty);
  }

  list.scrollTop = list.scrollHeight;
}

function setChannelHeader() {
  const channel = state.channels.find((item) => item.id === state.activeChannel) || state.channels[0];
  el("channelTitle").textContent = channel ? channel.name : "Genel";
  el("conversationTitle").textContent = channel ? `# ${channel.name}` : "# Genel";
}

function setWelcomeCopy() {
  const username = state.username || "Misafir";
  el("welcomeTitle").textContent = `Hoş geldin, ${username}.`;
  el("welcomeCopy").textContent = "Kullanıcı adıyla giriş yaptın. Mesajlarını cihazda saklıyor, aynı sekmede anlık olarak güncelliyoruz.";
}

function persistAndRender() {
  renderAll();
}

function renderAll({ persist = true } = {}) {
  if (persist) {
    saveState();
  }
  renderChannels();
  renderMembers();
  renderMessages();
  setChannelHeader();
  setWelcomeCopy();
  updateStats();
  el("connectionPill").textContent = navigator.onLine ? "Senkron aktif" : "Çevrimdışı mod";
  el("signInOverlay").classList.toggle("hidden", Boolean(state.username));
}

function sendMessage(text) {
  const message = normalizeMessage({
    id: makeId("message"),
    author: state.username || "Anonim",
    text,
    createdAt: new Date().toISOString(),
    mine: true,
    reactions: []
  });

  if (!state.messages[state.activeChannel]) {
    state.messages[state.activeChannel] = [];
  }

  state.messages[state.activeChannel].push(message);
  publish({
    type: "message",
    channelId: state.activeChannel,
    message,
    clientId: state.clientId
  });
  persistAndRender();
}

function addReaction(messageId, emoji) {
  const messages = state.messages[state.activeChannel] || [];
  const message = messages.find((item) => item.id === messageId);
  if (!message) return;

  const reaction = (message.reactions || []).find((item) => item.emoji === emoji);
  if (reaction) {
    reaction.count += 1;
  } else {
    message.reactions = [...(message.reactions || []), { emoji, count: 1 }];
  }

  publish({
    type: "reaction",
    channelId: state.activeChannel,
    messageId,
    emoji,
    clientId: state.clientId
  });
  persistAndRender();
}

function clearActiveChannel() {
  state.messages[state.activeChannel] = [];
  publish({
    type: "clear",
    channelId: state.activeChannel,
    clientId: state.clientId
  });
  persistAndRender();
}

function createChannel() {
  const name = sanitizeName(window.prompt("Yeni kanal adı", "Yeni Kanal"));
  if (!name) return;
  const id = name
    .toLowerCase()
    .replace(/[^a-z0-9çğıöşü-]+/gi, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || `kanal-${Date.now()}`;

  if (state.channels.some((channel) => channel.id === id)) return;

  state.channels = [...state.channels, { id, name, description: "Yeni ekip alanı" }];
  state.messages[id] = [];
  state.activeChannel = id;
  persistAndRender();
}

function publish(payload) {
  if (state.broadcast) {
    state.broadcast.postMessage(payload);
  }
}

function applyExternalChange(payload) {
  if (!payload || payload.clientId === state.clientId) return;

  if (payload.type === "message" && payload.channelId && payload.message) {
    state.messages[payload.channelId] = state.messages[payload.channelId] || [];
    const exists = state.messages[payload.channelId].some((item) => item.id === payload.message.id);
    if (!exists) {
      state.messages[payload.channelId].push(normalizeMessage(payload.message));
    }
  }

  if (payload.type === "reaction" && payload.channelId && payload.messageId) {
    const channelMessages = state.messages[payload.channelId] || [];
    const message = channelMessages.find((item) => item.id === payload.messageId);
    if (message) {
      const reaction = (message.reactions || []).find((item) => item.emoji === payload.emoji);
      if (reaction) {
        reaction.count += 1;
      } else {
        message.reactions = [...(message.reactions || []), { emoji: payload.emoji, count: 1 }];
      }
    }
  }

  if (payload.type === "clear" && payload.channelId) {
    state.messages[payload.channelId] = [];
  }

  renderAll({ persist: false });
}

function hydrateBroadcast() {
  if ("BroadcastChannel" in window) {
    state.broadcast = new BroadcastChannel(CHANNEL_KEY);
    state.broadcast.onmessage = (event) => applyExternalChange(event.data);
  }

  window.addEventListener("storage", (event) => {
    if (event.key === STORAGE_KEY && event.newValue) {
      try {
        const parsed = JSON.parse(event.newValue);
        state.activeChannel = parsed.activeChannel || state.activeChannel;
        state.channels = parsed.channels || state.channels;
        state.messages = mergeMessages(parsed.messages || {});
        renderAll({ persist: false });
      } catch {
        // Ignore malformed storage payloads.
      }
    }
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {
      // Offline caching is best-effort.
    });
  }
}

function updateOverlayVisibility() {
  el("signInOverlay").classList.toggle("hidden", Boolean(state.username));
}

function setupEvents() {
  el("signInForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const name = sanitizeName(el("usernameInput").value);
    if (!name) return;
    state.username = name;
    persistAndRender();
    el("messageInput").focus();
  });

  el("messageForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const input = el("messageInput");
    const text = input.value.trim();
    if (!text || !state.username) return;
    sendMessage(text);
    input.value = "";
    input.style.height = "auto";
  });

  el("messageInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      el("messageForm").requestSubmit();
    }
  });

  el("messageInput").addEventListener("input", (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${Math.min(event.target.scrollHeight, 160)}px`;
  });

  el("clearChannelButton").addEventListener("click", clearActiveChannel);
  el("newChannelButton").addEventListener("click", createChannel);
  el("shareButton").addEventListener("click", async () => {
    const text = `${location.origin}${APP_PATH}`;
    try {
      await navigator.clipboard.writeText(text);
      el("shareButton").textContent = "Kopyalandı";
      setTimeout(() => {
        el("shareButton").textContent = "Bağlantıyı kopyala";
      }, 1400);
    } catch {
      window.prompt("Bu bağlantıyı paylaş:", text);
    }
  });

  window.addEventListener("online", persistAndRender);
  window.addEventListener("offline", persistAndRender);
}

function boot() {
  loadState();
  hydrateBroadcast();
  setupEvents();
  registerServiceWorker();
  renderAll();
  updateOverlayVisibility();

  if (!state.username) {
    el("usernameInput").focus();
  } else {
    el("messageInput").focus();
  }
}

boot();
