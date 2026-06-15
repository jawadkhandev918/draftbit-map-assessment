# Draftbit Map Assessment

Expo map app with a Cloudflare Workers API. View locations on a map, tap a pin, and open the detail screen.

| | |
|---|---|
| **GitHub** | `https://github.com/jawadkhandev918/draftbit-map-assessment` |
| **API** | `https://draftbit-map-api.draftbit-map-api.workers.dev` |

**Stack:** Expo SDK 54 · Expo Router · React Native Maps · TanStack Query · Axios · Cloudflare Workers

---

## Run Locally

**Prerequisites:** Node.js 20.19+, npm

### 1. Start the API

```bash
cd worker
npm install
npm run dev
```

Runs at `http://localhost:8787`. Test with:

```bash
curl http://localhost:8787/locations
```

### 2. Configure the app

Create `.env` in the project root:

```env
EXPO_PUBLIC_API_BASE_URL=http://localhost:8787
```

On a physical device, use your deployed Worker URL instead of `localhost`.

### 3. Start the app

```bash
npm install
npm run start:clear
```

Press `i` (iOS), `a` (Android), or scan the QR code with Expo Go.

---

## Deploy

**Worker:**

```bash
cd worker
npx wrangler login
npm run deploy
```

Set `EXPO_PUBLIC_API_BASE_URL` in `.env` to the deployed Worker URL.

**GitHub:**

```bash
git remote add origin https://github.com/jawadkhandev918/draftbit-map-assessment.git
git push -u origin main
```

---

## Project Layout

```
src/app/
  index.tsx           # Map screen
  location/[id].tsx   # Detail screen
worker/               # Cloudflare API (GET /locations)
```

**API:** `GET /locations` returns `{ id, name, description, latitude, longitude }[]`
