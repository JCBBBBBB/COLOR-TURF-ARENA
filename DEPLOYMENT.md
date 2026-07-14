# Split deployment

The Vite frontend is deployed to Vercel. The Socket.IO game server must run on a persistent Node host such as Render, Railway, or Fly.io, with a managed Redis instance.

## 1. Deploy the game API

Build command: `npm run build -w @paint-arena/shared && npm run build -w @paint-arena/game-api`

Start command: `npm run start -w @paint-arena/game-api`

Set `REDIS_URL`, strong `ADMIN_TOKEN` and `OPS_EVENT_TOKEN`, and `ALLOWED_ORIGINS` to the Vercel frontend URL. Set `PUBLIC_BASE_URL` to that same frontend URL so QR links point to the public site.

## 2. Deploy the frontend to Vercel

Import this repository with the repository root as the Vercel project root. Vercel uses `vercel.json` to build `apps/web` and publish `apps/web/dist`.

Add `VITE_GAME_API_URL` in Vercel to the HTTPS URL of the game API, then redeploy. This is a public browser value, so it must never contain a token or password.

## 3. Verify

Open `/admin`, sign in with the configured admin token, create an arena, and open the generated `/play/<room>` and `/watch/<room>` links. Confirm the browser successfully connects to the API host over HTTPS/WSS.
