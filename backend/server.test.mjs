import assert from 'node:assert/strict';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { after, test } from 'node:test';
import { createServer } from './server.mjs';

const temporaryData = await mkdtemp(path.join(os.tmpdir(), 'rehabai-data-'));
await writeFile(path.join(temporaryData, 'resources.json'), '[{"id":"directory"}]');
await writeFile(path.join(temporaryData, 'crisis-resources.json'), '[{"id":"988"}]');
const server = createServer({ dataDirectory: temporaryData });
await new Promise((resolve, reject) => {
  server.once('error', reject);
  server.listen(0, '127.0.0.1', resolve);
});
const baseUrl = `http://127.0.0.1:${server.address().port}`;

after(async () => {
  await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  await rm(temporaryData, { recursive: true, force: true });
});

test('health route reports the local resource API', async () => {
  const response = await fetch(`${baseUrl}/api/health`);
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    status: 'ok',
    service: 'rehabai-resource-catalog',
  });
});

test('catalog endpoints return the project data', async () => {
  const resources = await fetch(`${baseUrl}/api/resources`);
  const crisis = await fetch(`${baseUrl}/api/crisis-resources`);
  assert.deepEqual(await resources.json(), [{ id: 'directory' }]);
  assert.deepEqual(await crisis.json(), [{ id: '988' }]);
  assert.equal(resources.headers.get('cache-control'), 'no-store');
});

test('unknown routes and disallowed browser origins are rejected', async () => {
  const missing = await fetch(`${baseUrl}/api/private`);
  const forbidden = await fetch(`${baseUrl}/api/resources`, {
    headers: { Origin: 'https://example.com' },
  });
  assert.equal(missing.status, 404);
  assert.equal(forbidden.status, 403);
});
