const state = {
  user: null,
  queue: null,
  hint: "Sadece admin hesabi bu sayfayi kullanabilir."
};
const API_BASE_URL = (
  window.CAPY_API_BASE_URL ||
  document.querySelector('meta[name="capy-api-base"]')?.content ||
  window.location.origin
).replace(/\/+$/, "");

const el = (id) => document.getElementById(id);

function isAdmin(user) {
  return Boolean(user && user.role === "admin" && user.status === "approved");
}

function cleanText(value) {
  return String(value || "").trim().replace(/\s+/g, " ");
}

function cleanHandle(value) {
  return cleanText(value).slice(0, 80);
}

async function api(path, options = {}) {
  const target = String(path || "");
  const url = /^https?:\/\//i.test(target) ? target : new URL(target, `${API_BASE_URL}/`).toString();
  const response = await fetch(url, {
    method: options.method || "GET",
    credentials: "include",
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
    error.code = payload?.error || `http_${response.status}`;
    error.status = response.status;
    error.payload = payload;
    throw error;
  }

  return payload;
}

function setHint(message) {
  state.hint = message;
  el("adminHint").textContent = message;
}

function renderSummary() {
  const pendingUsers = state.queue?.users || [];
  const pendingRequests = state.queue?.channelRequests || [];
  const channels = state.queue?.channels || [];

  el("pendingUsersCount").textContent = String(pendingUsers.length);
  el("pendingRequestsCount").textContent = String(pendingRequests.length);
  el("channelsCount").textContent = String(channels.length);
  el("pendingUsersBadge").textContent = String(pendingUsers.length);
  el("pendingRequestsBadge").textContent = String(pendingRequests.length);
  el("channelsBadge").textContent = String(channels.length);
  el("adminBadge").textContent = isAdmin(state.user) ? `@${state.user.username}` : "Cikis";
}

function renderEmpty(container, text) {
  container.innerHTML = "";
  const empty = document.createElement("div");
  empty.className = "empty-state";
  empty.textContent = text;
  container.appendChild(empty);
}

function renderPendingUsers() {
  const list = el("pendingUsersList");
  const users = state.queue?.users || [];
  if (!users.length) {
    renderEmpty(list, "Bekleyen uye yok.");
    return;
  }

  list.innerHTML = "";
  users.forEach((user) => {
    const item = document.createElement("article");
    item.className = "queue-item";

    const head = document.createElement("div");
    head.className = "queue-item-head";

    const meta = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `@${user.username}`;
    const sub = document.createElement("small");
    sub.textContent = `${user.profile?.phone ? "telefon var" : "telefon yok"} - ${user.profile?.email ? "email var" : "email yok"}`;
    meta.append(title, sub);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = user.status;

    head.append(meta, badge);

    const details = document.createElement("small");
    details.textContent = user.createdAt ? `Basvuru: ${user.createdAt}` : "Basvuru zamani yok";

    const actions = document.createElement("div");
    actions.className = "queue-actions";

    const approve = document.createElement("button");
    approve.type = "button";
    approve.className = "queue-action approve";
    approve.textContent = "Onayla";
    approve.addEventListener("click", () => reviewUser(user.id, "approve"));

    const reject = document.createElement("button");
    reject.type = "button";
    reject.className = "queue-action reject";
    reject.textContent = "Reddet";
    reject.addEventListener("click", () => reviewUser(user.id, "reject"));

    actions.append(approve, reject);
    item.append(head, details, actions);
    list.appendChild(item);
  });
}

function renderPendingRequests() {
  const list = el("pendingRequestsList");
  const requests = state.queue?.channelRequests || [];
  if (!requests.length) {
    renderEmpty(list, "Bekleyen kanal talebi yok.");
    return;
  }

  list.innerHTML = "";
  requests.forEach((request) => {
    const item = document.createElement("article");
    item.className = "queue-item";

    const head = document.createElement("div");
    head.className = "queue-item-head";

    const meta = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = `@${request.username}`;
    const sub = document.createElement("small");
    sub.textContent = `Kanal: ${request.channelName}`;
    meta.append(title, sub);

    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = request.status;

    head.append(meta, badge);

    const details = document.createElement("small");
    details.textContent = request.createdAt ? `Talep: ${request.createdAt}` : "Talep zamani yok";

    const actions = document.createElement("div");
    actions.className = "queue-actions";

    const approve = document.createElement("button");
    approve.type = "button";
    approve.className = "queue-action approve";
    approve.textContent = "Onayla";
    approve.addEventListener("click", () => reviewRequest(request.id, "approve"));

    const reject = document.createElement("button");
    reject.type = "button";
    reject.className = "queue-action reject";
    reject.textContent = "Reddet";
    reject.addEventListener("click", () => reviewRequest(request.id, "reject"));

    actions.append(approve, reject);
    item.append(head, details, actions);
    list.appendChild(item);
  });
}

function renderChannels() {
  const list = el("channelsList");
  const channels = state.queue?.channels || [];
  if (!channels.length) {
    renderEmpty(list, "Kanal bulunamadi.");
    return;
  }

  list.innerHTML = "";
  channels.forEach((channel) => {
    const item = document.createElement("article");
    item.className = "queue-item";

    const title = document.createElement("strong");
    title.textContent = `# ${channel.name}`;

    const sub = document.createElement("small");
    sub.textContent = `${channel.description || "Aciklama yok"} - ${channel.readOnly ? "salt okunur" : "yazi acik"} `;

    const badge = document.createElement("span");
    badge.className = "tag";
    badge.textContent = channel.id;

    item.append(title, sub, badge);
    list.appendChild(item);
  });
}

function renderAuthState() {
  const dashboard = el("dashboardPanel");
  const loginPanel = el("loginPanel");
  const logoutButton = el("logoutButton");

  const admin = isAdmin(state.user);
  dashboard.classList.toggle("hidden", !admin);
  loginPanel.classList.toggle("hidden", admin);
  logoutButton.classList.toggle("hidden", !state.user);

  if (!state.user) {
    el("adminBadge").textContent = "Cikis";
    el("adminHint").textContent = state.hint;
    return;
  }

  if (!admin) {
    el("adminBadge").textContent = `@${state.user.username}`;
    setHint("Bu hesap admin yetkisine sahip degil.");
    return;
  }

  el("adminBadge").textContent = `@${state.user.username}`;
  el("adminHint").textContent = state.hint;
}

function render() {
  renderAuthState();
  renderSummary();
  renderPendingUsers();
  renderPendingRequests();
  renderChannels();
}

async function loadQueue() {
  if (!isAdmin(state.user)) return;
  const payload = await api("/api/admin/queue");
  state.queue = payload;
  render();
}

async function loadSession() {
  const payload = await api("/api/session");
  state.user = payload.user || null;
  if (!state.user) {
    state.queue = null;
    setHint("Sadece admin hesabi bu sayfayi kullanabilir.");
    return;
  }

  if (!isAdmin(state.user)) {
    state.queue = null;
    setHint("Bu hesap admin yetkisine sahip degil.");
    return;
  }

  setHint("Admin oturumu aktif.");
}

async function submitLogin(event) {
  event.preventDefault();
  const username = cleanHandle(el("adminUsername").value);
  const password = String(el("adminPassword").value || "");

  if (!username || password.length < 6) {
    setHint("Kullanici adi ve en az 6 karakterli sifre gerekli.");
    render();
    return;
  }

  try {
    await api("/api/auth/login", {
      method: "POST",
      body: { username, password }
    });
    await loadSession();
    if (isAdmin(state.user)) {
      await loadQueue();
    }
  } catch (error) {
    if (error.code === "user_not_found" || error.code === "invalid_credentials") {
      setHint("Giris bilgileri hatali.");
    } else if (error.code === "account_rejected") {
      setHint("Bu hesap reddedildi.");
    } else {
      setHint("Giris yapilamadi.");
    }
    render();
  }
}

async function logout() {
  try {
    await api("/api/auth/logout", { method: "POST" });
  } catch {
    // ignore
  }

  state.user = null;
  state.queue = null;
  el("adminUsername").value = "";
  el("adminPassword").value = "";
  setHint("Sadece admin hesabi bu sayfayi kullanabilir.");
  render();
}

async function reviewUser(userId, action) {
  try {
    await api(`/api/admin/users/${encodeURIComponent(userId)}/${action}`, {
      method: "POST"
    });
    await loadQueue();
  } catch {
    setHint("Uyelik islemi basarisiz.");
    render();
  }
}

async function reviewRequest(requestId, action) {
  try {
    await api(`/api/admin/channel-requests/${encodeURIComponent(requestId)}/${action}`, {
      method: "POST"
    });
    await loadQueue();
  } catch {
    setHint("Kanal talebi islenemedi.");
    render();
  }
}

async function createChannel(event) {
  event.preventDefault();
  const name = cleanHandle(el("channelName").value);
  const id = cleanHandle(el("channelId").value);
  const description = cleanHandle(el("channelDescription").value);
  const readOnly = el("channelReadOnly").checked;

  if (!name) {
    setHint("Kanal adi gerekli.");
    render();
    return;
  }

  try {
    await api("/api/admin/channels", {
      method: "POST",
      body: {
        name,
        id,
        description,
        readOnly
      }
    });
    el("channelName").value = "";
    el("channelId").value = "";
    el("channelDescription").value = "";
    el("channelReadOnly").checked = false;
    setHint("Kanal olusturuldu.");
    await loadQueue();
  } catch (error) {
    if (error.code === "channel_exists") {
      setHint("Bu kanal zaten var.");
    } else if (error.code === "channel_name_required") {
      setHint("Kanal adi gerekli.");
    } else {
      setHint("Kanal olusturulamadi.");
    }
    render();
  }
}

function wireEvents() {
  el("adminLoginForm").addEventListener("submit", submitLogin);
  el("logoutButton").addEventListener("click", logout);
  el("refreshButton").addEventListener("click", async () => {
    try {
      await loadSession();
      if (isAdmin(state.user)) {
        await loadQueue();
      } else {
        render();
      }
    } catch {
      render();
    }
  });
  el("createChannelForm").addEventListener("submit", createChannel);
}

async function bootstrap() {
  wireEvents();
  render();
  try {
    await loadSession();
    if (isAdmin(state.user)) {
      await loadQueue();
    } else {
      render();
    }
  } catch {
    render();
  }
}

bootstrap();
