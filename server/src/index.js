import { WebSocketServer } from 'ws';

const port = 8080;
const wss = new WebSocketServer({ port });

console.log(`Signaling server running on ws://localhost:${port}`);

wss.on('connection', function connection(ws) {
  console.log('New client connected');

  // Forward every message to all other clients
  ws.on('message', function incoming(message) {
    console.log('Received message:', message.toString());

    // Broadcast to all other clients
    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === client.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
