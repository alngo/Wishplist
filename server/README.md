# 🛰 signaling-server

A **minimal WebSocket signaling server** for peer-to-peer communication.

This server's only purpose is to help browsers discover each other and exchange **SDP offers/answers** and **ICE candidates**, so they can establish direct WebRTC data channels.

---

## ✨ Features

✅ Tiny (< 50 lines)  
✅ No database – fully stateless  
✅ Simple broadcast model: every message from one peer is forwarded to all other peers  
✅ Easy to run locally or deploy anywhere (VPS, Heroku, Fly.io, etc.)

---

## 🚀 Getting started

```bash
# Clone this repo (or your monorepo root)
cd signaling-server

# Install dependencies
npm install

# Start the server
npm start

# The server runs by default on
# ws://localhost:8080
```

## 📦 Project structure

```plaintxt
signaling-server/
├── src/
│   └── index.js        # The signaling server code
├── package.json
└── README.md
```

## ⚙ Usage from frontend

Connect to the signaling server:

```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = () => {
  console.log('Connected to signaling server');
};

// Send SDP offer, answer, or ICE candidate
socket.send(JSON.stringify({
  type: 'offer',
  sdp: myOffer
}));

// Receive messages from other peers
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Received signaling data:', data);
};
```

> ⚠ Note: All messages are broadcast to all connected clients.
> Your frontend should filter messages so peers only process what they expect.

## 📡 How it works

1. Peers connect to the signaling server over WebSocket.
2. They exchange:
  - offer (SDP)
  - answer (SDP)
  - ice-candidate (ICE)
3. After exchanging, they establish a direct WebRTC data channel and continue communicating peer-to-peer.
4. The signaling server is not involved in actual data transfer.

## 🛠 Future improvements (optional)

- Support rooms / channels instead of broadcast
- Add authentication / token-based access
- Use HTTPS / WSS for production
