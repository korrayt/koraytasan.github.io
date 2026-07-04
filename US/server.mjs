import crypto from "node:crypto";
import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "node:http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, "..");
const DATA_DIR = process.env.CAPY_DATA_DIR ? path.resolve(process.env.CAPY_DATA_DIR) : path.join(__dirname, "data");
const DB_FILE = path.join(DATA_DIR, "capy-db.json");
const ADMIN_SECRET_FILE = path.join(DATA_DIR, "admin-secret.json");

const HOST = process.env.HOST || "0.0.0.0";
const PORT = Number(process.env.PORT || 4173);
const SESSION_COOKIE = "capy_session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const PBKDF2_ITERATIONS = 120000;
const PBKDF2_KEYLEN = 64;
const PBKDF2_DIGEST = "sha512";

const DEFAULT_CHANNELS = [
  {
    id: "genel",
    name: "Genel",
    description: "Ana tartisma alani",
    readOnly: false
  },
  {
    id: "duyurular",
    name: "Duyurular",
    description: "Yonetim duyurulari",
    readOnly: true
  },
  {
    id: "destek",
    name: "Destek",
    description: "Soru ve yardim alani",
    readOnly: false
  }
];

const DEFAULT_DB = {
  users: [],
  channels: [],
  channelRequests: [],
  memberships: [],
  messages: [],
  contacts: [],
  directMessages: []
};

const sessions = new Map();
let db = null;

function nowIso() {
  return new Date().toISOString();
}

function makeId(prefix) {
  return `${prefix}_${crypto.randomUUID()}`;
}

function normalizeUsername(value) {
  return String(value || "")
    .trim()
    .replace(/\s+/g, " ");
}

function usernameKey(value) {
  return normalizeUsername(value).toLowerCase();
}

function normalizeText(value) {
  return String(value || "").trim();
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function seedChannels() {
  const createdAt = nowIso();
  return DEFAULT_CHANNELS.map((channel) => ({
    ...channel,
    createdAt,
    createdBy: "system"
  }));
}

function normalizeDb(raw) {
  const normalized = {
    users: Array.isArray(raw?.users) ? raw.users : [],
    channels: Array.isArray(raw?.channels) ? raw.channels : [],
    channelRequests: Array.isArray(raw?.channelRequests) ? raw.channelRequests : [],
    memberships: Array.isArray(raw?.memberships) ? raw.memberships : [],
    messages: Array.isArray(raw?.messages) ? raw.messages : [],
    contacts: Array.isArray(raw?.contacts) ? raw.contacts : [],
    directMessages: Array.isArray(raw?.directMessages) ? raw.directMessages : []
  };

  if (!normalized.channels.length) {
    normalized.channels = seedChannels();
  }

  return normalized;
}

async function loadDb() {
  try {
    const raw = await readFile(DB_FILE, "utf8");
    return normalizeDb(JSON.parse(raw));
  } catch {
    return normalizeDb(DEFAULT_DB);
  }
}

async function saveDb(nextDb) {
  const payload = JSON.stringify(nextDb, null, 2);
  await writeFile(DB_FILE, payload, "utf8");
}

function pbkdf2(password, salt) {
  return crypto.pbkdf2Sync(String(password), String(salt), PBKDF2_ITERATIONS, PBKDF2_KEYLEN, PBKDF2_DIGEST)
    .toString("hex");
}

function createPasswordRecord(password, salt = crypto.randomBytes(16).toString("hex")) {
  return {
    salt,
    hash: pbkdf2(password, salt)
  };
}

function verifyPassword(password, user) {
  const candidate = pbkdf2(password, user.passwordSalt);
  const left = Buffer.from(candidate, "hex");
  const right = Buffer.from(user.passwordHash, "hex");
  if (left.length !== right.length) return false;
  return crypto.timingSafeEqual(left, right);
}

function createUserRecord({ username, password, role = "member", status = "pending", profile = {} }) {
  const cleanUsername = normalizeUsername(username);
  const passwordRecord = createPasswordRecord(password);
  return {
    id: makeId("user"),
    username: cleanUsername,
    usernameKey: usernameKey(cleanUsername),
    passwordSalt: passwordRecord.salt,
    passwordHash: passwordRecord.hash,
    role,
    status,
    profile: {
      phone: normalizeText(profile.phone),
      email: normalizeText(profile.email),
      notes: normalizeText(profile.notes)
    },
    createdAt: nowIso(),
    updatedAt: nowIso(),
    approvedAt: status === "approved" ? nowIso() : null,
    approvedBy: status === "approved" ? "system" : null
  };
}

function toPublicUser(user) {
  if (!user) return null;
  return {
    id: user.id,
    username: user.username,
    role: user.role,
    status: user.status,
    profile: clone(user.profile || { phone: "", email: "", notes: "" }),
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
    approvedAt: user.approvedAt,
    approvedBy: user.approvedBy
  };
}

function toPublicChannel(channel, user) {
  const access = isAdmin(user)
    ? "member"
    : (() => {
        const membership = db.memberships.find(
          (item) => item.userId === user.id && item.channelId === channel.id
        );
        const request = db.channelRequests.find(
          (item) => item.userId === user.id && item.channelId === channel.id && item.status === "pending"
        );
        return membership ? "member" : request ? "pending" : "available";
      })();
  return {
    id: channel.id,
    name: channel.name,
    description: channel.description,
    readOnly: Boolean(channel.readOnly),
    createdAt: channel.createdAt,
    createdBy: channel.createdBy,
    access
  };
}

function isAdmin(user) {
  return Boolean(user && user.role === "admin" && user.status === "approved");
}

function ensureGeneralMembership(userId) {
  if (!db.memberships.some((item) => item.userId === userId && item.channelId === "genel")) {
    db.memberships.push({
      id: makeId("membership"),
      userId,
      channelId: "genel",
      createdAt: nowIso(),
      approvedBy: "system"
    });
  }
}

function findUserByUsername(name) {
  const key = usernameKey(name);
  return db.users.find((user) => user.usernameKey === key) || null;
}

function findUserById(id) {
  return db.users.find((user) => user.id === id) || null;
}

function findChannelById(id) {
  return db.channels.find((channel) => channel.id === id) || null;
}

function getMembership(userId, channelId) {
  return db.memberships.find((item) => item.userId === userId && item.channelId === channelId) || null;
}

function getPendingChannelRequest(userId, channelId) {
  return db.channelRequests.find(
    (item) => item.userId === userId && item.channelId === channelId && item.status === "pending"
  ) || null;
}

function sanitizeMessageText(text) {
  return normalizeText(text).slice(0, 4000);
}

function createSession(userId) {
  const token = crypto.randomBytes(32).toString("hex");
  sessions.set(token, {
    userId,
    createdAt: Date.now(),
    expiresAt: Date.now() + SESSION_TTL_MS
  });
  return token;
}

function getSessionToken(req) {
  const cookieHeader = req.headers.cookie || "";
  const pairs = cookieHeader.split(";").map((part) => part.trim()).filter(Boolean);
  for (const pair of pairs) {
    const index = pair.indexOf("=");
    if (index === -1) continue;
    const name = pair.slice(0, index);
    const value = pair.slice(index + 1);
    if (name === SESSION_COOKIE) return value;
  }
  return "";
}

function getSessionUser(req) {
  const token = getSessionToken(req);
  if (!token) return null;
  const entry = sessions.get(token);
  if (!entry) return null;
  if (entry.expiresAt <= Date.now()) {
    sessions.delete(token);
    return null;
  }
  return findUserById(entry.userId);
}

function invalidateSessionsForUser(userId) {
  for (const [token, session] of sessions.entries()) {
    if (session.userId === userId) {
      sessions.delete(token);
    }
  }
}

function setCookie(res, name, value, options = {}) {
  const pieces = [`${name}=${value}`];
  pieces.push("Path=/");
  pieces.push("HttpOnly");
  pieces.push("SameSite=Lax");
  if (options.maxAge) pieces.push(`Max-Age=${options.maxAge}`);
  if (options.secure) pieces.push("Secure");
  res.setHeader("Set-Cookie", pieces.join("; "));
}

function clearCookie(res, name) {
  res.setHeader("Set-Cookie", `${name}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`);
}

function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let total = 0;
    req.on("data", (chunk) => {
      total += chunk.length;
      if (total > 128 * 1024) {
        reject(new Error("Body too large"));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => {
      if (!chunks.length) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res, statusCode, payload, extraHeaders = {}) {
  const body = JSON.stringify(payload);
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    ...extraHeaders
  });
  res.end(body);
}

function sendText(res, statusCode, text, contentType = "text/plain; charset=utf-8", extraHeaders = {}) {
  res.writeHead(statusCode, {
    "Content-Type": contentType,
    "Cache-Control": "no-store",
    ...extraHeaders
  });
  res.end(text);
}

function assertApproved(user) {
  if (!user) {
    return { ok: false, statusCode: 401, error: "not_authenticated" };
  }
  if (user.status === "rejected") {
    return { ok: false, statusCode: 403, error: "account_rejected" };
  }
  if (user.status !== "approved" && user.role !== "admin") {
    return { ok: false, statusCode: 403, error: "account_pending" };
  }
  return { ok: true, user };
}

function assertAdmin(user) {
  if (!isAdmin(user)) {
    return { ok: false, statusCode: 403, error: "admin_only" };
  }
  return { ok: true, user };
}

function ensureSeedData() {
  if (!db.channels.length) {
    db.channels = seedChannels();
  }
}

async function ensureAdminBootstrap() {
  if (db.users.some((user) => user.role === "admin")) return;

  let secret = null;
  try {
    const raw = await readFile(ADMIN_SECRET_FILE, "utf8");
    secret = JSON.parse(raw);
  } catch {
    const generated = {
      username: normalizeUsername(process.env.CAPY_ADMIN_USERNAME || "koray") || "koray",
      password: normalizeText(process.env.CAPY_ADMIN_PASSWORD) || crypto.randomBytes(8).toString("base64url")
    };
    await writeFile(ADMIN_SECRET_FILE, JSON.stringify(generated, null, 2), "utf8");
    secret = generated;
  }

  const adminUser = createUserRecord({
    username: secret.username,
    password: secret.password,
    role: "admin",
    status: "approved",
    profile: { phone: "", email: "", notes: "" }
  });
  db.users.push(adminUser);
  ensureGeneralMembership(adminUser.id);
  console.log(`[CAPY] admin bootstrap username=${secret.username} password=${secret.password}`);
}

async function persistDb() {
  await saveDb(db);
}

function ensureChannelExists(channelId) {
  const channel = findChannelById(channelId);
  if (!channel) {
    const error = new Error("channel_not_found");
    error.statusCode = 404;
    throw error;
  }
  return channel;
}

function canReadChannel(user, channelId) {
  if (isAdmin(user)) return true;
  if (!user || user.status !== "approved") return false;
  return Boolean(getMembership(user.id, channelId));
}

function buildChannelMessageView(message) {
  return {
    id: message.id,
    channelId: message.channelId,
    userId: message.userId,
    username: message.username,
    role: message.role,
    text: message.text,
    createdAt: message.createdAt
  };
}

function threadKeyForUsers(userAId, userBId) {
  return [String(userAId || ""), String(userBId || "")].filter(Boolean).sort().join("__");
}

function findContactRecord(userId, contactUserId) {
  return db.contacts.find(
    (item) => item.userId === userId && item.contactUserId === contactUserId
  ) || null;
}

function addContactRecord(userId, contactUserId) {
  const existing = findContactRecord(userId, contactUserId);
  if (existing) return existing;
  const record = {
    id: makeId("contact"),
    userId,
    contactUserId,
    createdAt: nowIso()
  };
  db.contacts.push(record);
  return record;
}

function directRelationFor(userId, otherUserId) {
  const addedByMe = Boolean(findContactRecord(userId, otherUserId));
  const addedMe = Boolean(findContactRecord(otherUserId, userId));
  return {
    addedByMe,
    addedMe,
    canChat: addedByMe || addedMe
  };
}

function canDirectChat(user, otherUser) {
  if (isAdmin(user)) return true;
  if (!user || !otherUser) return false;
  return directRelationFor(user.id, otherUser.id).canChat;
}

function buildSearchUserView(currentUser, otherUser) {
  const relation = directRelationFor(currentUser.id, otherUser.id);
  return {
    id: otherUser.id,
    username: otherUser.username,
    role: otherUser.role,
    status: otherUser.status,
    createdAt: otherUser.createdAt,
    addedByMe: relation.addedByMe,
    addedMe: relation.addedMe,
    canChat: isAdmin(currentUser) || relation.canChat,
    threadKey: threadKeyForUsers(currentUser.id, otherUser.id)
  };
}

function buildContactView(currentUser, otherUser) {
  const relation = directRelationFor(currentUser.id, otherUser.id);
  const threadKey = threadKeyForUsers(currentUser.id, otherUser.id);
  const messages = db.directMessages
    .filter((message) => message.threadKey === threadKey)
    .sort((a, b) => String(a.createdAt).localeCompare(String(b.createdAt)));
  const lastMessage = messages[messages.length - 1] || null;
  return {
    id: otherUser.id,
    username: otherUser.username,
    role: otherUser.role,
    createdAt: otherUser.createdAt,
    addedByMe: relation.addedByMe,
    addedMe: relation.addedMe,
    canChat: isAdmin(currentUser) || relation.canChat,
    threadKey,
    lastMessageAt: lastMessage?.createdAt || null,
    lastMessagePreview: lastMessage?.text || "",
    messageCount: messages.length
  };
}

function buildDirectMessageView(message) {
  return {
    id: message.id,
    threadKey: message.threadKey,
    senderUserId: message.senderUserId,
    recipientUserId: message.recipientUserId,
    username: message.username,
    role: message.role,
    text: message.text,
    createdAt: message.createdAt
  };
}

function listRelatedUsers(user) {
  const relatedIds = new Map();

  for (const contact of db.contacts) {
    if (contact.userId === user.id) {
      relatedIds.set(contact.contactUserId, true);
    }
    if (contact.contactUserId === user.id) {
      relatedIds.set(contact.userId, true);
    }
  }

  return [...relatedIds.keys()]
    .map((userId) => findUserById(userId))
    .filter((item) => Boolean(item) && item.status === "approved")
    .map((item) => buildContactView(user, item))
    .sort((a, b) => a.username.localeCompare(b.username, "tr"));
}

function buildQueueView() {
  const pendingUsers = db.users
    .filter((user) => user.status === "pending")
    .map(toPublicUser);

  const pendingRequests = db.channelRequests
    .filter((request) => request.status === "pending")
    .map((request) => {
      const user = findUserById(request.userId);
      const channel = findChannelById(request.channelId);
      return {
        id: request.id,
        userId: request.userId,
        username: user?.username || "unknown",
        channelId: request.channelId,
        channelName: channel?.name || request.channelId,
        status: request.status,
        createdAt: request.createdAt
      };
    });

  return {
    users: pendingUsers,
    channelRequests: pendingRequests,
    channels: db.channels.map((channel) => ({
      id: channel.id,
      name: channel.name,
      description: channel.description,
      readOnly: Boolean(channel.readOnly),
      createdAt: channel.createdAt
    }))
  };
}

function normalizeChannelId(value) {
  const base = normalizeUsername(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base.slice(0, 32) || "";
}

function validateSignupPayload(body) {
  const username = normalizeUsername(body.username);
  const password = String(body.password || "");
  if (username.length < 3) {
    return { ok: false, error: "username_too_short" };
  }
  if (password.length < 6) {
    return { ok: false, error: "password_too_short" };
  }
  return {
    ok: true,
    username,
    password,
    profile: {
      phone: normalizeText(body.phone),
      email: normalizeText(body.email),
      notes: normalizeText(body.notes)
    }
  };
}

async function handleRegister(req, res) {
  const body = await parseJsonBody(req);
  const validation = validateSignupPayload(body);
  if (!validation.ok) {
    sendJson(res, 400, { error: validation.error });
    return;
  }

  if (findUserByUsername(validation.username)) {
    sendJson(res, 409, { error: "username_taken" });
    return;
  }

  const user = createUserRecord({
    username: validation.username,
    password: validation.password,
    status: "pending",
    profile: validation.profile
  });

  db.users.push(user);
  const token = createSession(user.id);
  setCookie(res, SESSION_COOKIE, token, { maxAge: Math.floor(SESSION_TTL_MS / 1000) });
  await persistDb();
  sendJson(res, 201, { user: toPublicUser(user), needsApproval: true });
}

async function handleLogin(req, res) {
  const body = await parseJsonBody(req);
  const username = normalizeUsername(body.username);
  const password = String(body.password || "");
  const user = findUserByUsername(username);

  if (!user) {
    sendJson(res, 404, { error: "user_not_found" });
    return;
  }

  if (user.status === "rejected") {
    sendJson(res, 403, { error: "account_rejected" });
    return;
  }

  if (!verifyPassword(password, user)) {
    sendJson(res, 401, { error: "invalid_credentials" });
    return;
  }

  const token = createSession(user.id);
  setCookie(res, SESSION_COOKIE, token, { maxAge: Math.floor(SESSION_TTL_MS / 1000) });
  sendJson(res, 200, { user: toPublicUser(user) });
}

function handleLogout(req, res) {
  const token = getSessionToken(req);
  if (token) sessions.delete(token);
  clearCookie(res, SESSION_COOKIE);
  sendJson(res, 200, { ok: true });
}

function handleSession(req, res) {
  const user = getSessionUser(req);
  if (!user) {
    sendJson(res, 200, { user: null });
    return;
  }
  sendJson(res, 200, { user: toPublicUser(user) });
}

async function handleProfilePatch(req, res) {
  const user = getSessionUser(req);
  if (!user) {
    sendJson(res, 401, { error: "not_authenticated" });
    return;
  }
  if (user.status === "rejected") {
    sendJson(res, 403, { error: "account_rejected" });
    return;
  }

  const body = await parseJsonBody(req);
  user.profile = {
    phone: normalizeText(body.phone ?? user.profile?.phone ?? ""),
    email: normalizeText(body.email ?? user.profile?.email ?? ""),
    notes: normalizeText(body.notes ?? user.profile?.notes ?? "")
  };
  user.updatedAt = nowIso();
  await persistDb();
  sendJson(res, 200, { user: toPublicUser(user) });
}

function handleChannelsList(req, res) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  sendJson(res, 200, {
    channels: db.channels.map((channel) => toPublicChannel(channel, user))
  });
}

function handleUsersSearch(req, res, url) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const query = normalizeText(url.searchParams.get("q")).toLowerCase();
  const users = db.users
    .filter((item) => item.status === "approved" && item.id !== user.id)
    .filter((item) => {
      if (!query) return true;
      return item.username.toLowerCase().includes(query) || item.role.toLowerCase().includes(query);
    })
    .sort((a, b) => a.username.localeCompare(b.username, "tr"))
    .slice(0, 24)
    .map((item) => buildSearchUserView(user, item));

  sendJson(res, 200, { users });
}

function handleContactsList(req, res) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  sendJson(res, 200, { contacts: listRelatedUsers(user) });
}

async function handleContactsCreate(req, res) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const body = await parseJsonBody(req);
  const target = body.userId
    ? findUserById(body.userId)
    : findUserByUsername(body.username);

  if (!target || target.status !== "approved") {
    sendJson(res, 404, { error: "user_not_found" });
    return;
  }

  if (target.id === user.id) {
    sendJson(res, 400, { error: "self_contact_not_allowed" });
    return;
  }

  addContactRecord(user.id, target.id);
  await persistDb();
  sendJson(res, 201, { contact: buildContactView(user, target) });
}

function handleDirectMessagesGet(req, res, otherUserId) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const target = findUserById(otherUserId);
  if (!target || target.status !== "approved") {
    sendJson(res, 404, { error: "user_not_found" });
    return;
  }

  if (!canDirectChat(user, target)) {
    sendJson(res, 403, { error: "contact_required" });
    return;
  }

  const threadKey = threadKeyForUsers(user.id, target.id);
  const messages = db.directMessages
    .filter((message) => message.threadKey === threadKey)
    .slice(-100)
    .map(buildDirectMessageView);

  sendJson(res, 200, {
    peer: toPublicUser(target),
    messages
  });
}

async function handleDirectMessagesPost(req, res, otherUserId) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const target = findUserById(otherUserId);
  if (!target || target.status !== "approved") {
    sendJson(res, 404, { error: "user_not_found" });
    return;
  }

  if (!canDirectChat(user, target)) {
    sendJson(res, 403, { error: "contact_required" });
    return;
  }

  const body = await parseJsonBody(req);
  const text = sanitizeMessageText(body.text);
  if (!text) {
    sendJson(res, 400, { error: "empty_message" });
    return;
  }

  const message = {
    id: makeId("dmsg"),
    threadKey: threadKeyForUsers(user.id, target.id),
    senderUserId: user.id,
    recipientUserId: target.id,
    username: user.username,
    role: user.role,
    text,
    createdAt: nowIso()
  };
  db.directMessages.push(message);
  await persistDb();
  sendJson(res, 201, {
    message: buildDirectMessageView(message)
  });
}

async function handleChannelRequest(req, res, channelId) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const channel = ensureChannelExists(channelId);
  if (channel.id === "genel") {
    sendJson(res, 400, { error: "general_channel_auto_membership" });
    return;
  }

  if (getMembership(user.id, channel.id)) {
    sendJson(res, 200, { status: "member" });
    return;
  }

  const pending = getPendingChannelRequest(user.id, channel.id);
  if (pending) {
    sendJson(res, 200, { status: "pending" });
    return;
  }

  db.channelRequests.push({
    id: makeId("request"),
    userId: user.id,
    channelId: channel.id,
    status: "pending",
    createdAt: nowIso(),
    reviewedAt: null,
    reviewedBy: null
  });
  await persistDb();
  sendJson(res, 201, { status: "pending" });
}

function handleChannelMessagesGet(req, res, channelId) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  ensureChannelExists(channelId);
  if (!canReadChannel(user, channelId)) {
    sendJson(res, 403, { error: "channel_locked" });
    return;
  }

  const messages = db.messages
    .filter((message) => message.channelId === channelId)
    .slice(-100)
    .map(buildChannelMessageView);

  sendJson(res, 200, { messages });
}

async function handleChannelMessagesPost(req, res, channelId) {
  const user = getSessionUser(req);
  const access = assertApproved(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  ensureChannelExists(channelId);
  if (!canReadChannel(user, channelId)) {
    sendJson(res, 403, { error: "channel_locked" });
    return;
  }

  if (channelId === "duyurular" && !isAdmin(user)) {
    sendJson(res, 403, { error: "announcement_only" });
    return;
  }

  const body = await parseJsonBody(req);
  const text = sanitizeMessageText(body.text);
  if (!text) {
    sendJson(res, 400, { error: "empty_message" });
    return;
  }

  const message = {
    id: makeId("msg"),
    channelId,
    userId: user.id,
    username: user.username,
    role: user.role,
    text,
    createdAt: nowIso()
  };
  db.messages.push(message);
  await persistDb();
  sendJson(res, 201, { message: buildChannelMessageView(message) });
}

function handleAdminQueue(req, res) {
  const user = getSessionUser(req);
  const access = assertAdmin(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }
  sendJson(res, 200, buildQueueView());
}

async function handleAdminUserAction(req, res, userId, action) {
  const user = getSessionUser(req);
  const access = assertAdmin(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const target = findUserById(userId);
  if (!target) {
    sendJson(res, 404, { error: "user_not_found" });
    return;
  }

  if (action === "approve") {
    target.status = "approved";
    target.approvedAt = nowIso();
    target.approvedBy = user.username;
    target.updatedAt = nowIso();
    ensureGeneralMembership(target.id);
    await persistDb();
    sendJson(res, 200, { user: toPublicUser(target) });
    return;
  }

  if (action === "reject") {
    target.status = "rejected";
    target.updatedAt = nowIso();
    db.memberships = db.memberships.filter((item) => item.userId !== target.id);
    db.channelRequests = db.channelRequests.filter((item) => item.userId !== target.id);
    invalidateSessionsForUser(target.id);
    await persistDb();
    sendJson(res, 200, { user: toPublicUser(target) });
    return;
  }

  sendJson(res, 400, { error: "unsupported_action" });
}

async function handleAdminCreateChannel(req, res) {
  const user = getSessionUser(req);
  const access = assertAdmin(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const body = await parseJsonBody(req);
  const name = normalizeUsername(body.name);
  const description = normalizeUsername(body.description);
  if (name.length < 2) {
    sendJson(res, 400, { error: "channel_name_required" });
    return;
  }

  const id = normalizeChannelId(body.id || name);
  if (!id) {
    sendJson(res, 400, { error: "channel_id_invalid" });
    return;
  }

  if (findChannelById(id)) {
    sendJson(res, 409, { error: "channel_exists" });
    return;
  }

  const channel = {
    id,
    name,
    description,
    readOnly: Boolean(body.readOnly),
    createdAt: nowIso(),
    createdBy: user.username
  };
  db.channels.push(channel);
  await persistDb();
  sendJson(res, 201, { channel });
}

async function handleAdminRequestAction(req, res, requestId, action) {
  const user = getSessionUser(req);
  const access = assertAdmin(user);
  if (!access.ok) {
    sendJson(res, access.statusCode, { error: access.error });
    return;
  }

  const request = db.channelRequests.find((item) => item.id === requestId);
  if (!request) {
    sendJson(res, 404, { error: "request_not_found" });
    return;
  }

  const channel = findChannelById(request.channelId);
  const targetUser = findUserById(request.userId);
  if (!channel || !targetUser) {
    sendJson(res, 404, { error: "request_target_missing" });
    return;
  }

  if (action === "approve") {
    request.status = "approved";
    request.reviewedAt = nowIso();
    request.reviewedBy = user.username;
    if (!getMembership(targetUser.id, channel.id)) {
      db.memberships.push({
        id: makeId("membership"),
        userId: targetUser.id,
        channelId: channel.id,
        createdAt: nowIso(),
        approvedBy: user.username
      });
    }
    await persistDb();
    sendJson(res, 200, { request });
    return;
  }

  if (action === "reject") {
    request.status = "rejected";
    request.reviewedAt = nowIso();
    request.reviewedBy = user.username;
    await persistDb();
    sendJson(res, 200, { request });
    return;
  }

  sendJson(res, 400, { error: "unsupported_action" });
}

function handleHealth(req, res) {
  sendJson(res, 200, { ok: true });
}

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "text/javascript; charset=utf-8",
    ".mjs": "text/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".webmanifest": "application/manifest+json",
    ".ico": "image/x-icon"
  }[ext] || "application/octet-stream";
}

async function resolveStaticFile(urlPath) {
  const normalized = decodeURIComponent(urlPath);
  let target = normalized;
  if (target === "/") {
    target = "/index.html";
  } else if (target.endsWith("/")) {
    target = `${target}index.html`;
  } else if (!path.extname(target)) {
    const withIndex = path.join(REPO_ROOT, target, "index.html");
    try {
      const info = await stat(withIndex);
      if (info.isFile()) return withIndex;
    } catch {
      // Fall through.
    }
  }

  const resolved = path.normalize(path.join(REPO_ROOT, target));
  if (!resolved.startsWith(REPO_ROOT)) {
    return null;
  }

  try {
    const info = await stat(resolved);
    if (info.isFile()) return resolved;
  } catch {
    return null;
  }
  return null;
}

async function handleStatic(req, res, pathname) {
  const filePath = await resolveStaticFile(pathname);
  if (!filePath) {
    sendText(res, 404, "Not found");
    return;
  }

  const buffer = await readFile(filePath);
  res.writeHead(200, {
    "Content-Type": contentTypeFor(filePath),
    "Cache-Control": "no-store"
  });
  res.end(buffer);
}

async function handleApi(req, res, pathname, url) {
  try {
    if (req.method === "GET" && pathname === "/api/health") {
      handleHealth(req, res);
      return;
    }
    if (req.method === "POST" && pathname === "/api/auth/register") {
      await handleRegister(req, res);
      return;
    }
    if (req.method === "POST" && pathname === "/api/auth/login") {
      await handleLogin(req, res);
      return;
    }
    if (req.method === "POST" && pathname === "/api/auth/logout") {
      handleLogout(req, res);
      return;
    }
    if (req.method === "GET" && pathname === "/api/session") {
      handleSession(req, res);
      return;
    }
    if (req.method === "PATCH" && pathname === "/api/profile") {
      await handleProfilePatch(req, res);
      return;
    }
    if (req.method === "GET" && pathname === "/api/users/search") {
      handleUsersSearch(req, res, url);
      return;
    }
    if (req.method === "GET" && pathname === "/api/contacts") {
      handleContactsList(req, res);
      return;
    }
    if (req.method === "POST" && pathname === "/api/contacts") {
      await handleContactsCreate(req, res);
      return;
    }
    if (req.method === "GET" && pathname === "/api/channels") {
      handleChannelsList(req, res);
      return;
    }
    if (req.method === "GET" && pathname === "/api/admin/queue") {
      handleAdminQueue(req, res);
      return;
    }

    let match = pathname.match(/^\/api\/channels\/([^/]+)\/request$/);
    if (match && req.method === "POST") {
      await handleChannelRequest(req, res, match[1]);
      return;
    }

    match = pathname.match(/^\/api\/channels\/([^/]+)\/messages$/);
    if (match && req.method === "GET") {
      handleChannelMessagesGet(req, res, match[1]);
      return;
    }
    if (match && req.method === "POST") {
      await handleChannelMessagesPost(req, res, match[1]);
      return;
    }

    match = pathname.match(/^\/api\/direct\/([^/]+)\/messages$/);
    if (match && req.method === "GET") {
      handleDirectMessagesGet(req, res, match[1]);
      return;
    }
    if (match && req.method === "POST") {
      await handleDirectMessagesPost(req, res, match[1]);
      return;
    }

    match = pathname.match(/^\/api\/admin\/users\/([^/]+)\/(approve|reject)$/);
    if (match && req.method === "POST") {
      await handleAdminUserAction(req, res, match[1], match[2]);
      return;
    }

    if (req.method === "POST" && pathname === "/api/admin/channels") {
      await handleAdminCreateChannel(req, res);
      return;
    }

    match = pathname.match(/^\/api\/admin\/channel-requests\/([^/]+)\/(approve|reject)$/);
    if (match && req.method === "POST") {
      await handleAdminRequestAction(req, res, match[1], match[2]);
      return;
    }

    sendJson(res, 404, { error: "not_found" });
  } catch (error) {
    const statusCode = Number(error?.statusCode || 500);
    const errorCode = error?.message || "internal_error";
    sendJson(res, statusCode, { error: errorCode });
  }
}

function bootstrapRoutes() {
  return {
    "/US/": "/US/index.html",
    "/US/app/": "/US/app/index.html",
    "/US/admin/": "/US/admin/index.html"
  };
}

async function handleRequest(req, res) {
  const url = new URL(req.url || "/", `http://${req.headers.host || HOST}`);
  const pathname = url.pathname;

  if (pathname.startsWith("/api/")) {
    await handleApi(req, res, pathname, url);
    return;
  }

  const bootstraps = bootstrapRoutes();
  if (bootstraps[pathname]) {
    await handleStatic(req, res, bootstraps[pathname]);
    return;
  }

  await handleStatic(req, res, pathname);
}

async function boot() {
  await mkdir(DATA_DIR, { recursive: true });
  db = await loadDb();
  ensureSeedData();
  await ensureAdminBootstrap();
  await persistDb();

  const server = createServer((req, res) => {
    handleRequest(req, res).catch((error) => {
      console.error(error);
      sendJson(res, 500, { error: "internal_error" });
    });
  });

  server.listen(PORT, HOST, () => {
    console.log(`[CAPY] listening on http://${HOST}:${PORT}`);
  });
}

await boot();
