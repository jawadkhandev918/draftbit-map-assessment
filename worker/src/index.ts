import { locations } from './data/locations';

const CORS_HEADERS: Record<string, string> = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json',
      ...CORS_HEADERS,
    },
  });
}

export default {
  async fetch(request: Request): Promise<Response> {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS });
    }

    const url = new URL(request.url);

    if (url.pathname === '/locations' && request.method === 'GET') {
      return json(locations);
    }

    if (url.pathname === '/' && request.method === 'GET') {
      return json({
        name: 'Draftbit Map API',
        version: '1.0.0',
        endpoints: [
          { method: 'GET', path: '/locations', description: 'List all locations' },
        ],
      });
    }

    return json({ error: 'Not Found' }, 404);
  },
} satisfies ExportedHandler;
