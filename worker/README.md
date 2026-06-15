# Draftbit Map API — Cloudflare Worker

## Local Development

```bash
cd worker
npm install
npm run dev
```

The API will be available at `http://localhost:8787`.

## Endpoints

| Method | Path         | Description          |
|--------|--------------|----------------------|
| GET    | /            | API info             |
| GET    | /locations   | List all locations   |

## Deployment

1. **Login to Cloudflare:**

```bash
npx wrangler login
```

2. **Deploy:**

```bash
npm run deploy
```

Wrangler will output the live URL (e.g. `https://draftbit-map-api.<your-subdomain>.workers.dev`).

3. **Update the mobile app** — set the worker URL in your `.env`:

```
EXPO_PUBLIC_API_BASE_URL=https://draftbit-map-api.<your-subdomain>.workers.dev
```
