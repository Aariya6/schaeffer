import { createServer as createHttpServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const defaultOrigins = ['http://localhost:5173', 'http://127.0.0.1:5173'];

export function createServer({
  dataDirectory = path.join(projectRoot, 'data'),
  allowedOrigins = defaultOrigins,
} = {}) {
  return createHttpServer(async (request, response) => {
    const origin = request.headers.origin;
    if (origin && !allowedOrigins.includes(origin)) {
      response.writeHead(403, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify({ error: 'Origin is not allowed.' }));
      return;
    }

    if (origin) {
      response.setHeader('Access-Control-Allow-Origin', origin);
      response.setHeader('Vary', 'Origin');
      response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
      response.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    }

    if (request.method === 'OPTIONS') {
      response.writeHead(204);
      response.end();
      return;
    }

    const routeFiles = {
      '/api/resources': 'resources.json',
      '/api/crisis-resources': 'crisis-resources.json',
    };

    if (request.method === 'GET' && request.url === '/api/health') {
      response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ status: 'ok', service: 'rehabai-resource-catalog' }));
      return;
    }

    const filename = routeFiles[request.url];
    if (request.method !== 'GET' || !filename) {
      response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ error: 'Route not found.' }));
      return;
    }

    try {
      const contents = await readFile(path.join(dataDirectory, filename), 'utf8');
      response.writeHead(200, {
        'Content-Type': 'application/json; charset=utf-8',
        'Cache-Control': 'no-store',
        'X-Content-Type-Options': 'nosniff',
      });
      response.end(contents);
    } catch (error) {
      console.error(`Unable to load ${filename}:`, error);
      response.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ error: 'Resource data is temporarily unavailable.' }));
    }
  });
}

const isMainModule =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
  const port = Number(process.env.PORT || 4174);
  const server = createServer();
  server.listen(port, '127.0.0.1', () => {
    console.log(`RehabAI resource API listening at http://127.0.0.1:${port}`);
  });
}
