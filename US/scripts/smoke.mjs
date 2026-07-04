import assert from "node:assert/strict";
import { mkdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, "..", "..");
const SERVER_URL = "http://127.0.0.1:4180";
const DATA_DIR = path.join(ROOT, "US", ".smoke-data");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function parseJson(text) {
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

function createJar() {
  return { cookie: "" };
}

async function request(pathname, { method = "GET", body, jar } = {}) {
  const headers = {};
  if (jar?.cookie) {
    headers.Cookie = jar.cookie;
  }
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${SERVER_URL}${pathname}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined
  });

  const setCookie = response.headers.get("set-cookie");
  if (setCookie && jar) {
    jar.cookie = setCookie.split(";")[0];
  }

  const text = await response.text();
  const payload = parseJson(text);
  if (!response.ok) {
    const error = new Error(`${method} ${pathname} failed: ${response.status} ${payload.error || text}`);
    error.status = response.status;
    error.code = payload.error || `http_${response.status}`;
    error.payload = payload;
    throw error;
  }

  return payload;
}

async function waitForServer() {
  for (let index = 0; index < 60; index += 1) {
    try {
      const response = await fetch(`${SERVER_URL}/api/health`);
      if (response.ok) return;
    } catch {
      // keep trying
    }
    await delay(250);
  }
  throw new Error("Server did not become ready in time.");
}

function spawnServer() {
  return spawn(process.execPath, [path.join(ROOT, "US", "server.mjs")], {
    env: {
      ...process.env,
      HOST: "127.0.0.1",
      PORT: "4180",
      CAPY_DATA_DIR: DATA_DIR,
      CAPY_ADMIN_USERNAME: "koray-admin",
      CAPY_ADMIN_PASSWORD: "Admin123!"
    },
    cwd: ROOT,
    stdio: ["ignore", "pipe", "pipe"]
  });
}

async function main() {
  await rm(DATA_DIR, { recursive: true, force: true });
  await mkdir(DATA_DIR, { recursive: true });

  const server = spawnServer();
  server.stdout.on("data", (chunk) => process.stdout.write(chunk));
  server.stderr.on("data", (chunk) => process.stderr.write(chunk));

  try {
    await waitForServer();

    const adminJar = createJar();
    const aliceJar = createJar();
    const bobJar = createJar();

    await request("/api/auth/register", {
      method: "POST",
      jar: aliceJar,
      body: {
        username: "alice",
        password: "Secret123!",
        phone: "",
        email: "",
        notes: "alice note"
      }
    });

    await request("/api/auth/register", {
      method: "POST",
      jar: bobJar,
      body: {
        username: "bob",
        password: "Secret123!",
        phone: "",
        email: "",
        notes: "bob note"
      }
    });

    const adminLogin = await request("/api/auth/login", {
      method: "POST",
      jar: adminJar,
      body: {
        username: "koray-admin",
        password: "Admin123!"
      }
    });
    assert.equal(adminLogin.user.role, "admin");

    const pendingQueue = await request("/api/admin/queue", { jar: adminJar });
    assert.equal(pendingQueue.users.length, 2);

    const aliceUser = pendingQueue.users.find((user) => user.username === "alice");
    const bobUser = pendingQueue.users.find((user) => user.username === "bob");
    assert.ok(aliceUser, "alice pending user missing");
    assert.ok(bobUser, "bob pending user missing");

    await request(`/api/admin/users/${aliceUser.id}/approve`, {
      method: "POST",
      jar: adminJar
    });
    await request(`/api/admin/users/${bobUser.id}/approve`, {
      method: "POST",
      jar: adminJar
    });

    const channelCreate = await request("/api/admin/channels", {
      method: "POST",
      jar: adminJar,
      body: {
        name: "Smoke Room",
        id: "smoke-room",
        description: "Smoke test channel",
        readOnly: false
      }
    });
    assert.equal(channelCreate.channel.id, "smoke-room");

    const aliceSession = await request("/api/session", { jar: aliceJar });
    assert.equal(aliceSession.user.status, "approved");

    const bobSession = await request("/api/session", { jar: bobJar });
    assert.equal(bobSession.user.status, "approved");

    const aliceChannels = await request("/api/channels", { jar: aliceJar });
    const smokeChannel = aliceChannels.channels.find((channel) => channel.id === "smoke-room");
    assert.ok(smokeChannel, "smoke-room not returned");
    assert.equal(smokeChannel.access, "available");

    const aliceSearchBefore = await request("/api/users/search?q=bob", { jar: aliceJar });
    assert.equal(aliceSearchBefore.users[0].canChat, false);

    const bobSearchBefore = await request("/api/users/search?q=alice", { jar: bobJar });
    assert.equal(bobSearchBefore.users[0].canChat, false);

    await request("/api/contacts", {
      method: "POST",
      jar: aliceJar,
      body: {
        userId: bobUser.id
      }
    });

    const aliceContacts = await request("/api/contacts", { jar: aliceJar });
    assert.equal(aliceContacts.contacts.length, 1);
    assert.equal(aliceContacts.contacts[0].username, "bob");
    assert.equal(aliceContacts.contacts[0].canChat, true);

    const bobContactsAfterAliceAdd = await request("/api/contacts", { jar: bobJar });
    assert.equal(bobContactsAfterAliceAdd.contacts.length, 1);
    assert.equal(bobContactsAfterAliceAdd.contacts[0].username, "alice");
    assert.equal(bobContactsAfterAliceAdd.contacts[0].canChat, true);

    const aliceSearchAfter = await request("/api/users/search?q=bob", { jar: aliceJar });
    assert.equal(aliceSearchAfter.users[0].canChat, true);

    const bobSearchAfter = await request("/api/users/search?q=alice", { jar: bobJar });
    assert.equal(bobSearchAfter.users[0].canChat, true);

    const aliceDirectSend = await request(`/api/direct/${bobUser.id}/messages`, {
      method: "POST",
      jar: aliceJar,
      body: {
        text: "Selam Bob"
      }
    });
    assert.equal(aliceDirectSend.message.text, "Selam Bob");

    const bobDirectThread = await request(`/api/direct/${aliceUser.id}/messages`, {
      jar: bobJar
    });
    assert.equal(bobDirectThread.messages.length, 1);
    assert.equal(bobDirectThread.messages[0].text, "Selam Bob");

    const bobReply = await request(`/api/direct/${aliceUser.id}/messages`, {
      method: "POST",
      jar: bobJar,
      body: {
        text: "Merhaba Alice"
      }
    });
    assert.equal(bobReply.message.text, "Merhaba Alice");

    const aliceDirectThread = await request(`/api/direct/${bobUser.id}/messages`, {
      jar: aliceJar
    });
    assert.equal(aliceDirectThread.messages.length, 2);

    const aliceChannelRequest = await request("/api/channels/smoke-room/request", {
      method: "POST",
      jar: aliceJar
    });
    assert.equal(aliceChannelRequest.status, "pending");

    const queueWithChannelRequest = await request("/api/admin/queue", { jar: adminJar });
    assert.equal(queueWithChannelRequest.channelRequests.length, 1);

    const pendingRequest = queueWithChannelRequest.channelRequests[0];
    await request(`/api/admin/channel-requests/${pendingRequest.id}/approve`, {
      method: "POST",
      jar: adminJar
    });

    const aliceChannelsAfterApprove = await request("/api/channels", { jar: aliceJar });
    const smokeAfterApprove = aliceChannelsAfterApprove.channels.find((channel) => channel.id === "smoke-room");
    assert.equal(smokeAfterApprove.access, "member");

    const aliceChannelPost = await request("/api/channels/smoke-room/messages", {
      method: "POST",
      jar: aliceJar,
      body: {
        text: "Kanal mesaji"
      }
    });
    assert.equal(aliceChannelPost.message.channelId, "smoke-room");

    const smokeMessages = await request("/api/channels/smoke-room/messages", { jar: aliceJar });
    assert.equal(smokeMessages.messages.length, 1);
    assert.equal(smokeMessages.messages[0].text, "Kanal mesaji");

    const adminQueueFinal = await request("/api/admin/queue", { jar: adminJar });
    assert.equal(adminQueueFinal.channelRequests.length, 0);
    assert.equal(adminQueueFinal.users.length, 0);

    console.log("Smoke test passed.");
  } finally {
    server.kill();
    await rm(DATA_DIR, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
