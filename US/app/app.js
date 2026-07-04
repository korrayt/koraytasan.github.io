const DEVICE_KEY = "capy-device-id-v2";
const SELECTED_CHANNEL_KEY = "capy-selected-channel-v1";
const SELECTED_DIRECT_KEY = "capy-selected-direct-v1";
const SEARCH_DEBOUNCE_MS = 250;
const AUTO_REFRESH_MS = 8000;

const state = {
  authMode: "login",
  user: null,
  channels: [],
  contacts: [],
  searchQuery: "",
  searchResults: [],
  selectedThread: { type: "channel", id: "genel" },
  peer: null,
  messages: [],
  threadNotice: "",
  threadAccess: {
    canSend: false,
    canRequest: false,
    requestStatus: "none",
    readOnly: false
  },
  hints: {
    auth: "Kullanici adi ve sifre yeterli.",
    profile: "Telefon ve e-posta opsiyonel.",
    pending: "Basvurun admin onayinda.",
    composer: "Bir kanal veya ozel sohbet sec."
  },
  deviceId: getDeviceId(),
  searchTimer: null,
  syncTimer: null
};

const el = (id) => document.getElementById(id);

function getDeviceId() {
  const existing = localStorage.getItem(DEVICE_KEY);
  if (existing) return existing;
  const generated = `device-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(16).slice(2)}`}`;
  localStorage.setItem(DEVICE_KEY, generated);
  return generated;
}

function shortDeviceId(deviceId) {
  return String(deviceId || "")
    .replace(/^device-/, "")
    .slice(0, 8)
    .toUpperCase();
}

function cleanText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function cleanHandle(value) {
  return cleanText(value).slice(0, 32);
}

function isApproved(user) {
  return Boolean(user && user.status === "approved");
}

function isPending(user) {
  return Boolean(user && user.status === "pending");
}

function isAdmin(user) {
  return Boolean(user && user.role === "admin" && user.status === "approved");
}

function initials(value) {
  const parts = cleanHandle(value)
    .split(" ")
    .filter(Boolean);
  if (!parts.length) return "MP";
  return parts
    .map((part) => part[0] || "")
    .join("")
    .slice(0, 2)
    .toUpperCase() || "MP";
}

function timeLabel(iso) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function dateLabel(iso) {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    }).format(new Date(iso));
  } catch {
    return "";
  }
}

function truncate(value, length = 40) {
  const text = cleanText(value);
  if (text.length <= length) return text;
  return `${text.slice(0, Math.max(0, length - 1))}...`;
}

function threadIsChannel(thread) {
  return thread?.type === "channel";
}

function threadIsDirect(thread) {
  return thread?.type === "direct";
}

function selectedChannel() {
  return state.channels.find((channel) => channel.id === state.selectedThread.id) || null;
}

function selectedContact() {
  return state.contacts.find((contact) => contact.id === state.selectedThread.id) || null;
}

function peerName() {
  if (threadIsChannel(state.selectedThread)) {
    return selectedChannel()?.name || "Kanal";
  }
  return state.peer?.username || selectedContact()?.username || "Ozel sohbet";
}

function peerDescription() {
  if (threadIsChannel(state.selectedThread)) {
    const channel = selectedChannel();
    if (!channel) return "Kanal yukleniyor";
    if (channel.id === "genel") return "Herkesin otomatik dahil oldugu ana kanal";
    if (channel.access === "pending") return "Erisim talebin bekliyor";
    if (channel.access === "available") return "Bu kanala erisim isteyebilirsin";
    return channel.description || "Kanal";
  }
  const peer = state.peer || selectedContact();
  if (!peer) return "Karsi taraf yukleniyor";
  return `${peer.role || "Uye"} - cihazlar arasi ozel sohbet`;
}

function channelAccessLabel(channel) {
  if (!channel) return "";
  if (channel.access === "member") return "Uye";
  if (channel.access === "pending") return "Bekliyor";
  return "Erisim";
}

function messageAuthorId(message) {
  return message?.userId || message?.senderUserId || "";
}

function setHint(slot, text) {
  if (slot in state.hints) {
    state.hints[slot] = text;
  }
}

function saveSelectedThread(thread) {
  if (threadIsChannel(thread)) {
    localStorage.setItem(SELECTED_CHANNEL_KEY, thread.id);
    localStorage.removeItem(SELECTED_DIRECT_KEY);
  } else if (threadIsDirect(thread)) {
    localStorage.setItem(SELECTED_DIRECT_KEY, thread.id);
    localStorage.removeItem(SELECTED_CHANNEL_KEY);
  }
}

function restoreSelectedThread() {
  const direct = localStorage.getItem(SELECTED_DIRECT_KEY);
  if (direct) {
    return { type: "direct", id: direct };
  }
  const channel = localStorage.getItem(SELECTED_CHANNEL_KEY);
  if (channel) {
    return { type: "channel", id: channel };
  }
  return { type: "channel", id: "genel" };
}

function resetWorkspaceState() {
  state.channels = [];
  state.contacts = [];
  state.searchResults = [];
  state.searchQuery = "";
  state.selectedThread = { type: "channel", id: "genel" };
  state.peer = null;
  state.messages = [];
  state.threadNotice = "";
  state.threadAccess = {
    canSend: false,
    canRequest: false,
    requestStatus: "none",
    readOnly: false
  };
  setHint("composer", "Bir kanal veya ozel sohbet sec.");

  if (el("messageInput")) {
    el("messageInput").value = "";
    el("messageInput").style.height = "auto";
  }
  if (el("searchInput")) {
    el("searchInput").value = "";
  }
  if (el("authPassword")) {
    el("authPassword").value = "";
  }
  if (el("authUsername")) {
    el("authUsername").value = "";
  }
  if (el("authPhone")) {
    el("authPhone").value = "";
  }
  if (el("authEmail")) {
    el("authEmail").value = "";
  }
  if (el("authNotes")) {
    el("authNotes").value = "";
  }
}

function applySessionUser(user) {
  state.user = user || null;
  if (!state.user) {
    setHint("auth", "Kullanici adi ve sifre ile giris yap.");
    return;
  }

  const profile = state.user.profile || {};
  setHint(
    "profile",
    state.user.status === "pending"
      ? "Telefon ve e-posta opsiyonel. Onay beklerken profili guncelleyebilirsin."
      : "Telefon ve e-posta opsiyonel. Gerekirse sonra guncelleyebilirsin."
  );
  setHint(
    "pending",
    state.user.status === "pending"
      ? "Basvurun admin onayinda. Profilini tamamlayip bekleyebilirsin."
      : "Basvuru durumu aktif."
  );

  el("profilePhone").value = profile.phone || "";
  el("profileEmail").value = profile.email || "";
  el("profileNotes").value = profile.notes || "";
}

function setAuthMode(mode) {
  state.authMode = mode === "register" ? "register" : "login";
  setHint(
    "auth",
    state.authMode === "register"
      ? "Kayit talebi admin onayina gider."
      : "Kullanici adi ve sifre yeterli."
  );
  render();
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    method: options.method || "GET",
    credentials: "same-origin",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers || {})
    },
    body: options.body ? JSON.stringify(options.body) : undefined
  });

  const contentType = response.headers.get("content-type") || "";
  const payload = contentType.includes("application/json")
    ? await response.json().catch(() => ({}))
    : await response.text();

  if (!response.ok) {
    const error = new Error(payload?.error || `http_${response.status}`);
    error.status = response.status;
    error.code = payload?.error || `http_${response.status}`;
    error.payload = payload;
    throw error;
  }

  return payload;
}

async function clearLegacyOfflineState() {
  try {
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }
  } catch {
    // Ignore old service worker cleanup failures.
  }

  try {
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }
  } catch {
    // Ignore cache cleanup failures.
  }
}

function renderAuthChrome() {
  const hasUser = Boolean(state.user);
  const isPending = state.user?.status === "pending";
  const approved = isApproved(state.user);
  const rejected = state.user?.status === "rejected";

  el("authView").classList.toggle("hidden", hasUser && !rejected);
  el("pendingView").classList.toggle("hidden", !isPending);
  el("chatView").classList.toggle("hidden", !approved);

  el("userCard").classList.toggle("hidden", !hasUser || rejected);
  el("profileCard").classList.toggle("hidden", !hasUser || rejected);
  el("channelsCard").classList.toggle("hidden", !approved);
  el("peopleCard").classList.toggle("hidden", !approved);

  el("adminLink").classList.toggle("hidden", !isAdmin(state.user));

  if (!hasUser || rejected) {
    el("pageTitle").textContent = "Giris yap";
    el("pageSubtitle").textContent = rejected
      ? "Hesabiniz reddedildi. Admin ile gorusun."
      : "Kullanici adi ve sifre ile gir. Onaydan sonra kanallar ve ozel sohbetler acilir.";
    el("sessionBadge").textContent = rejected ? "Reddedildi" : "Cikis";
    return;
  }

  if (isPending) {
    el("pageTitle").textContent = "Onay bekleniyor";
    el("pageSubtitle").textContent = "Basvurun admin onayinda. Profilini guncelleyebilir ve durumunu takip edebilirsin.";
    el("sessionBadge").textContent = "Beklemede";
    return;
  }

  el("pageTitle").textContent = threadTitle();
  el("pageSubtitle").textContent = "Kanal sohbetleri ve ozel mesajlar ayni merkezi sunucuda calisir.";
  el("sessionBadge").textContent = isAdmin(state.user) ? "Admin" : "Aktif";
}

function threadTitle() {
  if (!isApproved(state.user)) return "Giris yap";
  if (threadIsDirect(state.selectedThread)) {
    return `@${peerName()}`;
  }
  const channel = selectedChannel();
  return `#${channel?.name || "Genel"}`;
}

function renderIdentityCard() {
  if (!state.user) {
    el("userAvatar").textContent = "MP";
    el("userName").textContent = "Misafir";
    el("userStatus").textContent = "Giris bekleniyor";
    el("userMeta").textContent = `Cihaz: ${shortDeviceId(state.deviceId)}`;
    el("logoutButton").textContent = "Cikis yap";
    return;
  }

  el("userAvatar").textContent = initials(state.user.username);
  el("userName").textContent = state.user.username;
  el("userStatus").textContent =
    state.user.status === "pending"
      ? "Onay bekliyor"
      : state.user.role === "admin"
        ? "Yonetici"
        : "Onayli uye";

  const createdAt = state.user.createdAt ? dateLabel(state.user.createdAt) : "";
  const deviceTag = shortDeviceId(state.deviceId);
  const profile = state.user.profile || {};
  const extras = [profile.phone, profile.email].filter(Boolean).length;
  el("userMeta").textContent = `Cihaz: ${deviceTag} - ${createdAt || "Yeni hesap"} - ${extras ? `${extras} ek alan` : "Profil bos olabilir"}`;
  el("logoutButton").textContent = "Cikis yap";
}

function renderProfileCard() {
  if (!state.user || state.user.status === "rejected") return;
  el("profileHint").textContent = state.hints.profile;
}

function renderChannelsList() {
  const list = el("channelsList");
  const template = el("channelTemplate");
  list.innerHTML = "";

  if (!state.channels.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Kanal listesi yukleniyor.";
    list.appendChild(empty);
    return;
  }

  state.channels.forEach((channel) => {
    const node = template.content.firstElementChild.cloneNode(true);
    node.classList.toggle(
      "active",
      threadIsChannel(state.selectedThread) && state.selectedThread.id === channel.id
    );
    node.querySelector(".channel-name").textContent = `# ${channel.name}`;
    node.querySelector(".channel-description").textContent = channel.description || "";
    node.querySelector(".channel-pill").textContent = channel.id === "genel" ? "Genel" : channelAccessLabel(channel);
    node.addEventListener("click", () => selectChannel(channel.id));
    list.appendChild(node);
  });

  el("channelCount").textContent = String(state.channels.length);
}

function renderContactsList() {
  const list = el("contactsList");
  list.innerHTML = "";

  if (!state.contacts.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Henuz eklenmis ozel sohbet yok.";
    list.appendChild(empty);
    return;
  }

  state.contacts.forEach((contact) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "person-item";
    button.classList.toggle(
      "active",
      threadIsDirect(state.selectedThread) && state.selectedThread.id === contact.id
    );

    const left = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = `@${contact.username}`;
    const small = document.createElement("small");
    small.textContent = contact.role || "Uye";
    left.append(strong, small);

    const pill = document.createElement("span");
    pill.className = "person-pill";
    pill.textContent = contact.lastMessagePreview
      ? truncate(contact.lastMessagePreview, 20)
      : contact.canChat
        ? "DM"
        : "Beklemede";

    button.append(left, pill);
    button.addEventListener("click", () => selectDirect(contact));
    list.appendChild(button);
  });

  el("contactCount").textContent = String(state.contacts.length);
}

function renderSearchResults() {
  const list = el("searchResults");
  list.innerHTML = "";

  if (!state.searchQuery.trim()) {
    const hint = document.createElement("div");
    hint.className = "hint-card";
    hint.textContent = "Bir kullanici ara. Sonra ekleyip ozel sohbete gec.";
    list.appendChild(hint);
    return;
  }

  if (!state.searchResults.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "Sonuc bulunamadi.";
    list.appendChild(empty);
    return;
  }

  state.searchResults.forEach((result) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "person-item";
    button.classList.toggle(
      "active",
      threadIsDirect(state.selectedThread) && state.selectedThread.id === result.id
    );

    const left = document.createElement("span");
    const strong = document.createElement("strong");
    strong.textContent = `@${result.username}`;
    const small = document.createElement("small");
    small.textContent = result.role || "Uye";
    left.append(strong, small);

    const pill = document.createElement("span");
    pill.className = "person-pill";
    pill.textContent = result.canChat ? "Sohbet ac" : "Ekle";

    button.append(left, pill);
    button.addEventListener("click", () => openSearchResult(result));
    list.appendChild(button);
  });
}

function renderMessages() {
  const list = el("messageList");
  const template = el("messageTemplate");
  list.innerHTML = "";

  if (state.threadNotice && !state.messages.length) {
    const empty = document.createElement("div");
    empty.className = "message-empty";
    empty.innerHTML = `
      <strong>${state.threadNotice}</strong>
      <p>${state.threadAccess.canRequest ? "Erisim talebi gonderebilirsin." : "Baska bir kanal veya kullanici sec."}</p>
    `;
    list.appendChild(empty);
    return;
  }

  if (!state.messages.length) {
    const empty = document.createElement("div");
    empty.className = "message-empty";
    empty.innerHTML = `
      <strong>Henuz mesaj yok.</strong>
      <p>Ilk mesaji sen yaz. Karsilikli iletisim burada merkezde tutulur.</p>
    `;
    list.appendChild(empty);
    return;
  }

  state.messages.forEach((message) => {
    const node = template.content.firstElementChild.cloneNode(true);
    const mine = messageAuthorId(message) === state.user?.id;
    node.classList.toggle("mine", mine);
    node.querySelector(".message-avatar").textContent = initials(message.username);
    node.querySelector(".message-author").textContent = message.username || "Sistem";
    node.querySelector(".message-time").textContent = timeLabel(message.createdAt);
    node.querySelector(".message-text").textContent = message.text;
    list.appendChild(node);
  });

  list.scrollTop = list.scrollHeight;
}

function renderThreadHeader() {
  if (!isApproved(state.user)) return;

  const threadTitleText = threadIsDirect(state.selectedThread)
    ? `@${peerName()}`
    : `# ${selectedChannel()?.name || "Genel"}`;
  const badgeText = threadIsDirect(state.selectedThread) ? "Ozel sohbet" : "Kanal";

  el("channelBadge").textContent = badgeText;
  el("channelTitle").textContent = threadTitleText;
  el("channelDescription").textContent = peerDescription();
  el("pageTitle").textContent = threadTitleText;
  el("pageSubtitle").textContent = threadIsDirect(state.selectedThread)
    ? "Kullanici adlariyla bire bir ozel sohbet"
    : "Kanallar ve onayli grup mesajlari";
}

function renderComposerState() {
  const input = el("messageInput");
  const button = el("messageForm").querySelector('button[type="submit"]');
  const requestButton = el("channelRequestButton");

  if (!isApproved(state.user)) {
    input.disabled = true;
    button.disabled = true;
    requestButton.classList.add("hidden");
    el("composerHint").textContent = state.hints.composer;
    return;
  }

  if (threadIsChannel(state.selectedThread)) {
    const channel = selectedChannel();
    if (!channel) {
      input.disabled = true;
      button.disabled = true;
      requestButton.classList.add("hidden");
      el("composerHint").textContent = "Kanal yukleniyor.";
      return;
    }

    const canRequest = channel.access === "available";
    const isPending = channel.access === "pending";
    const canSend = channel.access === "member" && (!channel.readOnly || isAdmin(state.user));

    state.threadAccess = {
      canSend,
      canRequest,
      requestStatus: isPending ? "pending" : channel.access,
      readOnly: Boolean(channel.readOnly)
    };

    input.disabled = !canSend;
    button.disabled = !canSend;

    if (canRequest) {
      requestButton.classList.remove("hidden");
      requestButton.disabled = false;
      requestButton.textContent = "Erisim talep et";
      el("composerHint").textContent = "Bu kanala girmek icin once erisim talep etmelisin.";
    } else if (isPending) {
      requestButton.classList.remove("hidden");
      requestButton.disabled = true;
      requestButton.textContent = "Talep bekliyor";
      el("composerHint").textContent = "Erisim talebin onay bekliyor.";
    } else {
      requestButton.classList.add("hidden");
      if (channel.readOnly && !isAdmin(state.user)) {
        el("composerHint").textContent = "Bu kanal sadece yonetim yazabilir.";
      } else {
        el("composerHint").textContent = "Kanal hazir.";
      }
    }

    return;
  }

  state.threadAccess = {
    canSend: Boolean(state.peer || selectedContact() || isAdmin(state.user)),
    canRequest: false,
    requestStatus: "none",
    readOnly: false
  };

  input.disabled = !state.threadAccess.canSend;
  button.disabled = !state.threadAccess.canSend;
  requestButton.classList.add("hidden");
  el("composerHint").textContent = state.threadAccess.canSend
    ? "Ozel sohbet aktif."
    : "Bu kullaniciya ulasmak icin once ekleme yap.";
}

function renderVisibility() {
  const hasUser = Boolean(state.user);
  const isPending = state.user?.status === "pending";
  const approved = isApproved(state.user);

  el("authView").classList.toggle("hidden", hasUser && !rejected);
  el("pendingView").classList.toggle("hidden", !isPending);
  el("chatView").classList.toggle("hidden", !approved);
  el("userCard").classList.toggle("hidden", !hasUser || state.user?.status === "rejected");
  el("profileCard").classList.toggle("hidden", !hasUser || state.user?.status === "rejected");
  el("channelsCard").classList.toggle("hidden", !approved);
  el("peopleCard").classList.toggle("hidden", !approved);
  el("adminLink").classList.toggle("hidden", !isAdmin(state.user));
}

function renderAuthForms() {
  el("loginTab").classList.toggle("active", state.authMode === "login");
  el("registerTab").classList.toggle("active", state.authMode === "register");
  el("optionalSignupFields").classList.toggle("hidden", state.authMode !== "register");
  el("authSubmit").textContent = state.authMode === "login" ? "Giris yap" : "Uye ol";
  el("authHint").textContent = state.hints.auth;
}

function renderUserPanel() {
  renderIdentityCard();
  renderProfileCard();
}

function renderPendingPanel() {
  if (!state.user || state.user.status !== "pending") return;
  const profile = state.user.profile || {};
  const lines = [
    "Uyelik talebin admin onayinda.",
    `Kullanici adi: @${state.user.username}`,
    state.user.createdAt ? `Basvuru tarihi: ${dateLabel(state.user.createdAt)}` : "",
    profile.phone ? `Telefon bilgisi eklendi.` : "Telefon bilgisi opsiyonel.",
    profile.email ? `E-posta bilgisi eklendi.` : "E-posta bilgisi opsiyonel."
  ].filter(Boolean);
  el("pendingText").textContent = lines.join(" - ");
  el("pendingRefreshButton").textContent = "Durumu yenile";
}

function renderSidebarStats() {
  el("channelCount").textContent = String(state.channels.length);
  el("contactCount").textContent = String(state.contacts.length);
}

function render() {
  renderAuthChrome();
  renderAuthForms();
  renderUserPanel();
  renderPendingPanel();
  renderChannelsList();
  renderContactsList();
  renderSearchResults();
  renderMessages();
  renderThreadHeader();
  renderComposerState();
  renderVisibility();
  renderSidebarStats();
}

async function loadSession() {
  const payload = await api("/api/session");
  applySessionUser(payload.user || null);

  if (!payload.user) {
    resetWorkspaceState();
    state.selectedThread = restoreSelectedThread();
    setHint("composer", "Bir kanal veya ozel sohbet sec.");
    return;
  }

  state.selectedThread = restoreSelectedThread();
  if (isPending(state.user)) {
    setHint("pending", "Basvurun admin onayinda. Profilini guncelleyebilirsin.");
  }
  if (!isApproved(state.user)) {
    resetWorkspaceState();
    state.selectedThread = restoreSelectedThread();
  }
}

async function loadChannels() {
  if (!isApproved(state.user)) return;
  const payload = await api("/api/channels");
  state.channels = Array.isArray(payload.channels) ? payload.channels : [];
  if (!state.channels.some((channel) => channel.id === state.selectedThread.id) || threadIsDirect(state.selectedThread)) {
    if (!state.channels.some((channel) => channel.id === "genel")) {
      state.selectedThread = state.channels[0]
        ? { type: "channel", id: state.channels[0].id }
        : { type: "channel", id: "genel" };
    } else if (!threadIsDirect(state.selectedThread)) {
      state.selectedThread = { type: "channel", id: "genel" };
    }
  }
}

async function loadContacts() {
  if (!isApproved(state.user)) return;
  const payload = await api("/api/contacts");
  state.contacts = Array.isArray(payload.contacts) ? payload.contacts : [];
}

async function searchUsers(query, { quiet = false } = {}) {
  if (!isApproved(state.user)) return;
  const clean = cleanText(query);
  state.searchQuery = clean;
  if (!clean) {
    state.searchResults = [];
    if (!quiet) render();
    return;
  }

  const token = Date.now();
  state._searchToken = token;
  try {
    const payload = await api(`/api/users/search?q=${encodeURIComponent(clean)}`);
    if (state._searchToken !== token) return;
    state.searchResults = Array.isArray(payload.users) ? payload.users : [];
  } catch (error) {
    if (state._searchToken !== token) return;
    state.searchResults = [];
    setHint("composer", error.code === "not_authenticated" ? "Oturumun sonlandi." : "Kullanici arama basarisiz.");
  }
  if (!quiet) render();
}

async function loadThreadMessages() {
  if (!isApproved(state.user)) return;

  state.messages = [];
  state.peer = null;
  state.threadNotice = "";

  const token = Date.now();
  state._threadToken = token;

  try {
    if (threadIsChannel(state.selectedThread)) {
      const payload = await api(`/api/channels/${encodeURIComponent(state.selectedThread.id)}/messages`);
      if (state._threadToken !== token) return;

      const channel = selectedChannel();
      if (channel) {
        state.threadAccess = {
          canSend: channel.access === "member" && (!channel.readOnly || isAdmin(state.user)),
          canRequest: channel.access === "available",
          requestStatus: channel.access,
          readOnly: Boolean(channel.readOnly)
        };
      }

      state.messages = Array.isArray(payload.messages) ? payload.messages : [];
      state.threadNotice = "";
      return;
    }

    const payload = await api(`/api/direct/${encodeURIComponent(state.selectedThread.id)}/messages`);
    if (state._threadToken !== token) return;
    state.peer = payload.peer || selectedContact() || null;
    state.messages = Array.isArray(payload.messages) ? payload.messages : [];
    state.threadAccess = {
      canSend: true,
      canRequest: false,
      requestStatus: "none",
      readOnly: false
    };
    state.threadNotice = "";
  } catch (error) {
    if (state._threadToken !== token) return;
    state.messages = [];
    if (error.code === "channel_locked") {
      const channel = selectedChannel();
      state.threadAccess = {
        canSend: false,
        canRequest: Boolean(channel && channel.access === "available"),
        requestStatus: channel?.access || "available",
        readOnly: Boolean(channel?.readOnly)
      };
      state.threadNotice = "Bu kanala erisimin yok.";
    } else if (error.code === "contact_required") {
      state.threadAccess = {
        canSend: false,
        canRequest: false,
        requestStatus: "none",
        readOnly: false
      };
      state.threadNotice = "Bu kullanici ile ozel sohbet icin once ekleme yap.";
    } else {
      state.threadNotice = "Sohbet yuklenemedi.";
    }
  }
}

async function refreshWorkspace({ refreshSearch = true } = {}) {
  if (!isApproved(state.user)) {
    render();
    return;
  }

  await Promise.all([loadChannels(), loadContacts()]);

  if (threadIsChannel(state.selectedThread) && !state.channels.some((channel) => channel.id === state.selectedThread.id)) {
    state.selectedThread = { type: "channel", id: "genel" };
    saveSelectedThread(state.selectedThread);
  }

  if (refreshSearch && state.searchQuery.trim()) {
    await searchUsers(state.searchQuery, { quiet: true });
  }

  await loadThreadMessages();
  render();
}

async function selectChannel(channelId) {
  state.selectedThread = { type: "channel", id: channelId };
  saveSelectedThread(state.selectedThread);
  await loadThreadMessages();
  render();
}

async function selectDirect(contact) {
  state.selectedThread = { type: "direct", id: contact.id };
  state.peer = contact;
  saveSelectedThread(state.selectedThread);
  await loadThreadMessages();
  render();
}

async function requestChannelAccess() {
  const channel = selectedChannel();
  if (!channel || channel.id === "genel") return;
  const payload = await api(`/api/channels/${encodeURIComponent(channel.id)}/request`, {
    method: "POST"
  });
  if (payload.status === "pending") {
    setHint("composer", "Erisim talebin admin onayinda.");
  }
  await refreshWorkspace({ refreshSearch: false });
}

async function addContactAndOpen(person) {
  await api("/api/contacts", {
    method: "POST",
    body: { userId: person.id }
  });
  await loadContacts();
  await selectDirect(person);
}

async function openSearchResult(person) {
  if (person.canChat) {
    await selectDirect(person);
    return;
  }

  await addContactAndOpen(person);
}

async function sendProfile() {
  const payload = await api("/api/profile", {
    method: "PATCH",
    body: {
      phone: cleanText(el("profilePhone").value),
      email: cleanText(el("profileEmail").value),
      notes: cleanText(el("profileNotes").value)
    }
  });
  applySessionUser(payload.user || state.user);
  setHint("profile", "Profil kaydedildi.");
  render();
}

async function submitAuth(event) {
  event.preventDefault();
  const username = cleanHandle(el("authUsername").value);
  const password = String(el("authPassword").value || "");

  if (!username || username.length < 3) {
    setHint("auth", "Kullanici adi en az 3 karakter olmali.");
    render();
    return;
  }

  if (password.length < 6) {
    setHint("auth", "Sifre en az 6 karakter olmali.");
    render();
    return;
  }

  try {
    if (state.authMode === "register") {
      const payload = await api("/api/auth/register", {
        method: "POST",
        body: {
          username,
          password,
          phone: cleanText(el("authPhone").value),
          email: cleanText(el("authEmail").value),
          notes: cleanText(el("authNotes").value)
        }
      });
      applySessionUser(payload.user || null);
      resetWorkspaceState();
      state.selectedThread = restoreSelectedThread();
      setHint("pending", "Uyelik talebin alindi. Admin onayini bekle.");
      render();
      return;
    }

    const payload = await api("/api/auth/login", {
      method: "POST",
      body: {
        username,
        password
      }
    });
    applySessionUser(payload.user || null);
    resetWorkspaceState();
    state.selectedThread = restoreSelectedThread();

    if (isApproved(state.user)) {
      await refreshWorkspace({ refreshSearch: false });
    } else {
      render();
    }
  } catch (error) {
    if (error.code === "user_not_found") {
      setHint("auth", "Kullanici bulunamadi.");
    } else if (error.code === "invalid_credentials") {
      setHint("auth", "Sifre yanlis.");
    } else if (error.code === "username_taken") {
      setHint("auth", "Bu kullanici adi zaten kullaniliyor.");
    } else if (error.code === "account_rejected") {
      setHint("auth", "Hesap reddedildi. Admin ile gorus.");
    } else {
      setHint("auth", "Giris islemi basarisiz.");
    }
    render();
  }
}

async function logout() {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } catch {
    // Ignore logout failures.
  }

  applySessionUser(null);
  resetWorkspaceState();
  localStorage.removeItem(SELECTED_CHANNEL_KEY);
  localStorage.removeItem(SELECTED_DIRECT_KEY);
  render();
}

async function submitMessage(event) {
  event.preventDefault();
  if (!isApproved(state.user)) return;

  const input = el("messageInput");
  const text = cleanText(input.value);
  if (!text) return;

  try {
    if (threadIsChannel(state.selectedThread)) {
      await api(`/api/channels/${encodeURIComponent(state.selectedThread.id)}/messages`, {
        method: "POST",
        body: { text }
      });
    } else {
      await api(`/api/direct/${encodeURIComponent(state.selectedThread.id)}/messages`, {
        method: "POST",
        body: { text }
      });
    }
    input.value = "";
    input.style.height = "auto";
    await loadThreadMessages();
    render();
  } catch (error) {
    if (error.code === "announcement_only") {
      setHint("composer", "Bu kanala sadece yonetim yazabilir.");
    } else if (error.code === "contact_required") {
      setHint("composer", "Ozel sohbet icin once ekleme yap.");
    } else if (error.code === "channel_locked") {
      setHint("composer", "Bu kanala erisim talebi gerekli.");
    } else {
      setHint("composer", "Mesaj gonderilemedi.");
    }
    render();
  }
}

function wireEvents() {
  el("loginTab").addEventListener("click", () => setAuthMode("login"));
  el("registerTab").addEventListener("click", () => setAuthMode("register"));
  el("authForm").addEventListener("submit", submitAuth);
  el("profileForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      await sendProfile();
    } catch (error) {
      if (error.code === "account_rejected") {
        setHint("profile", "Reddedilen hesap guncellenemez.");
      } else {
        setHint("profile", "Profil kaydedilemedi.");
      }
      render();
    }
  });
  el("logoutButton").addEventListener("click", logout);
  el("pendingRefreshButton").addEventListener("click", async () => {
    try {
      await loadSession();
      if (isApproved(state.user)) {
        await refreshWorkspace({ refreshSearch: false });
      }
      render();
    } catch {
      render();
    }
  });
  el("refreshButton").addEventListener("click", async () => {
    try {
      await loadSession();
      if (isApproved(state.user)) {
        await refreshWorkspace();
      } else {
        render();
      }
    } catch {
      render();
    }
  });
  el("reloadChannelsButton").addEventListener("click", async () => {
    if (!isApproved(state.user)) return;
    await refreshWorkspace();
  });
  el("channelRequestButton").addEventListener("click", async () => {
    if (!isApproved(state.user)) return;
    try {
      await requestChannelAccess();
    } catch (error) {
      if (error.code === "general_channel_auto_membership") {
        setHint("composer", "Genel kanal zaten herkese acik.");
      } else {
        setHint("composer", "Erisim talebi gonderilemedi.");
      }
      render();
    }
  });
  el("messageForm").addEventListener("submit", submitMessage);
  el("messageInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      el("messageForm").requestSubmit();
    }
  });
  el("messageInput").addEventListener("input", (event) => {
    event.target.style.height = "auto";
    event.target.style.height = `${Math.min(event.target.scrollHeight, 190)}px`;
  });
  el("profilePhone").addEventListener("input", () => setHint("profile", "Telefon ve e-posta opsiyonel."));
  el("profileEmail").addEventListener("input", () => setHint("profile", "Telefon ve e-posta opsiyonel."));
  el("profileNotes").addEventListener("input", () => setHint("profile", "Telefon ve e-posta opsiyonel."));
  el("searchInput").addEventListener("input", (event) => {
    clearTimeout(state.searchTimer);
    const query = event.target.value;
    state.searchTimer = setTimeout(() => {
      searchUsers(query).catch(() => {
        state.searchResults = [];
        render();
      });
    }, SEARCH_DEBOUNCE_MS);
  });
  window.addEventListener("focus", syncWorkspaceIfVisible);
  window.addEventListener("online", syncWorkspaceIfVisible);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      syncWorkspaceIfVisible();
    }
  });
}

async function syncWorkspaceIfVisible() {
  if (!isApproved(state.user) || document.visibilityState === "hidden") return;
  try {
    await refreshWorkspace({ refreshSearch: Boolean(state.searchQuery.trim()) });
  } catch {
    // Best effort only.
  }
}

async function bootstrap() {
  wireEvents();
  render();
  await clearLegacyOfflineState();

  try {
    await loadSession();
  } catch {
    applySessionUser(null);
    resetWorkspaceState();
  }

  if (isApproved(state.user)) {
    await refreshWorkspace({ refreshSearch: false });
  } else {
    render();
  }

  state.syncTimer = setInterval(() => {
    if (document.visibilityState === "visible" && isApproved(state.user)) {
      syncWorkspaceIfVisible();
    }
  }, AUTO_REFRESH_MS);
}

bootstrap();
