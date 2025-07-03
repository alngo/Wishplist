export type SignalingMessage = {
	type: string; // e.g., "offer", "answer", "ice-candidate"
	[key: string]: any; // allow additional fields like sdp, candidate, etc.
};

type MessageCallback = (message: SignalingMessage) => void;

let socket: WebSocket | null = null;
const listeners: Set<MessageCallback> = new Set();

/**
 * Connect to the signaling server.
 * @param url WebSocket URL (default: ws://localhost:8080)
 */
export function connectSignalingServer(url: string = 'ws://localhost:8080'): void {
	socket = new WebSocket(url);

	socket.onopen = () => {
		console.log('[signaling] Connected to signaling server');
	};

	socket.onmessage = async (event: MessageEvent) => {
		let rawData: string;

		if (typeof event.data === 'string') {
			rawData = event.data;
		} else if (event.data instanceof Blob) {
			rawData = await event.data.text();
		} else if (event.data instanceof ArrayBuffer) {
			rawData = new TextDecoder().decode(event.data);
		} else {
			console.error('[signaling] Unknown message type:', typeof event.data);
			return;
		}

		try {
			const message: SignalingMessage = JSON.parse(rawData);
			console.log('[signaling] Received:', message);
			listeners.forEach((cb) => cb(message));
		} catch (err) {
			console.error('[signaling] Failed to parse JSON:', err);
		}
	};

	socket.onclose = () => {
		console.log('[signaling] Disconnected from signaling server');
	};

	socket.onerror = (err) => {
		console.error('[signaling] WebSocket error:', err);
	};
}

/**
 * Send a signaling message to the server.
 * @param message The message object to send
 */
export function sendSignalingMessage(message: SignalingMessage): void {
	if (socket && socket.readyState === WebSocket.OPEN) {
		socket.send(JSON.stringify(message));
	} else {
		console.warn('[signaling] Socket not ready; message not sent');
	}
}

/**
 * Register a callback to be called on each incoming signaling message.
 * @param callback The callback function
 */
export function onSignalingMessage(callback: MessageCallback): void {
	listeners.add(callback);
}

/**
 * Remove a previously registered callback.
 * @param callback The callback function to remove
 */
export function removeSignalingListener(callback: MessageCallback): void {
	listeners.delete(callback);
}
