import { io, type Socket } from "socket.io-client";

const gameApiUrl = (import.meta.env.VITE_GAME_API_URL ?? "").replace(/\/$/, "");

export const createSocket = (path = "/socket.io"): Socket => io(gameApiUrl || undefined, {
  path,
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: Infinity,
  reconnectionDelay: 500,
  reconnectionDelayMax: 3000,
  timeout: 5000,
  transports: ["websocket", "polling"],
});
