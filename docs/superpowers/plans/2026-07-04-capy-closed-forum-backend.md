# CAPY Closed Forum Backend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the current open/local chat flow with a closed forum-style app where username + password are required, optional profile data can be added later, new accounts and channel access requests require admin approval, users cannot create channels, and the admin console is only accessible to the owner account.

**Architecture:** A single Node.js server will serve the public app, the admin console, and a small JSON API. Authentication will use hashed passwords and signed session cookies, while the data store will live in a local JSON file so the whole system stays dependency-free and easy to run in this repo. The public UI will handle signup, login, profile editing, channel requests, and channel chat; the admin UI will handle approving users, approving channel access, and creating channels.

**Tech Stack:** Node.js built-in `http`, `fs`, `crypto`; plain HTML/CSS/JS; browser `fetch`; local JSON persistence; no runtime third-party packages.

---

### Task 1: Build the server, auth, and datastore

**Files:**
- Create: `E:\CODEX\koraytasancom\US\server.mjs`
- Create: `E:\CODEX\koraytasancom\US\data\.gitkeep`
- Create: `E:\CODEX\koraytasancom\US\data\.gitignore`
- Create: `E:\CODEX\koraytasancom\package.json`

- [ ] **Step 1: Define the server contract**

The server must expose these routes:

```text
GET  /US/                    -> landing page
GET  /US/app/                -> public app shell
GET  /US/admin/              -> admin console shell
POST /api/auth/register      -> username/password signup, status=pending
POST /api/auth/login         -> username/password login
POST /api/auth/logout        -> clear session
GET  /api/session            -> current user session
PATCH /api/profile           -> optional phone/email/notes fields
GET  /api/channels           -> channels the current user may see
POST /api/channels/:id/request -> request access to a channel
GET  /api/channels/:id/messages -> fetch channel messages
POST /api/channels/:id/messages -> post a channel message
GET  /api/admin/queue        -> pending users and channel requests
POST /api/admin/users/:id/approve
POST /api/admin/users/:id/reject
POST /api/admin/channels     -> admin creates a channel
POST /api/admin/channel-requests/:id/approve
POST /api/admin/channel-requests/:id/reject
```

- [ ] **Step 2: Implement password hashing and sessions**

Use `crypto.pbkdf2Sync()` for password hashes and `crypto.randomBytes()` for opaque session tokens. Store session tokens server-side in memory, map them to `userId`, and set an `HttpOnly` cookie on login.

- [ ] **Step 3: Implement the JSON store**

Persist these records in `US/data/capy-db.json`:

```json
{
  "users": [],
  "channels": [],
  "channelRequests": [],
  "memberships": [],
  "messages": []
}
```

Write helper functions for:

```js
loadDb()
saveDb(db)
createUser()
findUserByUsername()
createChannel()
createChannelRequest()
appendMessage()
isChannelMember()
```

- [ ] **Step 4: Seed the first admin account**

Boot the server so the first run can create an admin account from environment variables or a local bootstrap file. If no admin secret exists yet, print the generated admin username and password hash path clearly in the terminal so the owner can capture it once.

- [ ] **Step 5: Verify the server boots**

Run:

```powershell
node E:\CODEX\koraytasancom\US\server.mjs
```

Expected: the process prints the listening URL and the admin bootstrap status, then keeps running.

### Task 2: Rewrite the public app for signup, approval, profile, and channel chat

**Files:**
- Replace: `E:\CODEX\koraytasancom\US\app\index.html`
- Replace: `E:\CODEX\koraytasancom\US\app\app.css`
- Replace: `E:\CODEX\koraytasancom\US\app\app.js`

- [ ] **Step 1: Add auth states to the UI**

The page must show three states:

```text
Unauthenticated -> signup/login form only
Pending         -> request submitted, profile editing allowed, channel chat blocked
Approved        -> channel list, chat feed, profile settings
```

- [ ] **Step 2: Wire the app to the API**

Use `fetch()` against the routes above and keep all authentication state in the server session. The client must not store passwords or approval status in local storage.

- [ ] **Step 3: Add optional profile fields**

Allow the user to save optional contact info without making it required:

```json
{
  "phone": "",
  "email": "",
  "notes": ""
}
```

The UI should make it clear that these fields are optional and are only there if the user wants account recovery or a richer profile.

- [ ] **Step 4: Add channel request flow**

Approved users can see available channels and submit a join request. If the request is pending, the UI must show that the channel is locked until admin approval.

- [ ] **Step 5: Add message posting**

Only approved channel members can fetch/post messages for that channel. Message loading should refresh when the active channel changes and on a short polling interval.

- [ ] **Step 6: Verify the public app**

Run:

```powershell
node E:\CODEX\koraytasancom\US\server.mjs
```

Then open:

```text
http://127.0.0.1:<port>/US/app/
```

Expected: signup/login renders, pending users cannot chat, approved users can see and enter channels.

### Task 3: Build the admin console

**Files:**
- Create: `E:\CODEX\koraytasancom\US\admin\index.html`
- Create: `E:\CODEX\koraytasancom\US\admin\admin.css`
- Create: `E:\CODEX\koraytasancom\US\admin\admin.js`

- [ ] **Step 1: Make the admin page role-gated**

The server must reject non-admin sessions before serving the console data. The page should not render user management data unless the session user is `role=admin`.

- [ ] **Step 2: Show the approval queues**

Display three sections:

```text
Pending user signups
Pending channel access requests
Current channels
```

- [ ] **Step 3: Add admin actions**

Admin actions must call the API and refresh the queue after each action:

```text
approve user
reject user
create channel
approve channel request
reject channel request
```

No UI for normal users should ever expose channel creation.

- [ ] **Step 4: Verify the console**

Run:

```powershell
node E:\CODEX\koraytasancom\US\server.mjs
```

Expected: non-admin users get blocked from admin data; the owner can approve and create channels from the console.

### Task 4: Add smoke tests and update the docs

**Files:**
- Create: `E:\CODEX\koraytasancom\US\scripts\smoke.mjs`
- Update: `E:\CODEX\koraytasancom\README.md`
- Update: `E:\CODEX\koraytasancom\US\index.html` if the public entry copy should describe the approval flow

- [ ] **Step 1: Write a smoke script**

The smoke script should:

1. Start from an empty DB
2. Register a user
3. Confirm the user is pending
4. Log in as admin
5. Approve the user
6. Create a channel
7. Approve the channel request
8. Post a message
9. Fetch the message back

Expected output:

```text
SMOKE_OK
```

- [ ] **Step 2: Update the repo docs**

Document the local run command, the admin bootstrap credential flow, and the fact that users cannot create channels.

- [ ] **Step 3: Final verification**

Run the smoke script and one browser check against the public app and admin console. Only finish when signup, approval, channel request, and admin gating all work end-to-end.

