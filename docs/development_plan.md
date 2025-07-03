# 📦 P2P Wishlist App – Development Plan

A step-by-step plan to build a **peer-to-peer wishlist app** using:
- SvelteKit + TypeScript (frontend)
- WebRTC + CRDTs (real‑time sync)
- Node.js signaling server (WebSocket)

> ✅ MVP: basic wishlist shared between peers, no login, no central DB

---

## 🧭 Phase 0: Foundation & planning

- [x] Define MVP: add/remove items, see live updates from peers
- [x] Choose tech stack:
  - SvelteKit + TS
  - WebRTC data channels
  - Wasm CRDT lib (Automerge or Yjs)
- [x] Create folder structure

---

## 🏗 Phase 1: Signaling & peer discovery

- [x] Build minimal `signaling-server` (Node.js + WS)
- [x] Write `signaling.ts` module in frontend
- [x] Test: browsers can exchange raw JSON messages via WS

✅ **Goal:** peers can find each other & exchange signaling data

---

## 📡 Phase 2: WebRTC data channels

- [ ] Create `webrtc.ts` helper module:
- Handle offer/answer exchange
- Send ICE candidates
- Establish data channel
- [ ] Confirm two browsers can send/receive test messages (text chat)

✅ **Goal:** P2P connection established, data channel works

---

## 📦 Phase 3: CRDT state sync

- [ ] Integrate Automerge or Yjs
- [ ] Define wishlist model: array of `{ id, title, url, addedAt }`
- [ ] Broadcast local changes to peers
- [ ] Merge incoming updates & update UI

✅ **Goal:** real‑time, local-first, eventually consistent wishlist

---

## 🖼 Phase 4: SvelteKit UI

- [ ] Build wishlist page & item components
- [ ] Add/remove items UI
- [ ] Show peers / sync indicator
- [ ] Apply minimal styling (Tailwind CSS)

✅ **Goal:** usable interface to test live sync

---

## 🔐 Phase 5: Hybrid storage

- [ ] Persist wishlist locally (IndexedDB)
- [ ] Optionally sync snapshot to backend / IPFS / S3
- [ ] Add tiny backend API if needed for backup

✅ **Goal:** data survives reload & can be shared across devices

---

## 🚀 Phase 6: Polish & deploy

- [ ] Deploy signaling server (Fly.io / Heroku / VPS)
- [ ] Deploy frontend (Vercel / Netlify)
- [ ] Add README, screenshots, live demo link

---

## 🛠 Optional future features

- Login (magic link, OAuth)
- Share wishlist by URL
- Price tracking / scraping
- Mobile PWA

---

## 📅 Suggested timeline (part‑time)

| Week | Goal |
|-----|------|
| 1   | Signaling server & WS chat |
| 2   | WebRTC data channel |
| 3   | CRDT sync |
| 4   | SvelteKit UI |
| 5   | Local persistence & deploy |

---

## ✅ Tips

- Start with two tabs on localhost
- Add CRDT after data channel is working
- Keep signaling server **tiny & stateless**
- Build MVP first → extend later

---

> Built for fun, learning, and exploring P2P apps with modern web tech 🚀
