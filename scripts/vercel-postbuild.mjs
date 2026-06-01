import { cp, mkdir, writeFile, rm } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const out = path.join(root, '.vercel/output');

await rm(out, { recursive: true, force: true });
await mkdir(path.join(out, 'functions/__server.func'), { recursive: true });
await mkdir(path.join(out, 'static'), { recursive: true });

// Static assets
await cp(path.join(dist, 'client'), path.join(out, 'static'), { recursive: true });

// Server bundle into the function dir
await cp(path.join(dist, 'server'), path.join(out, 'functions/__server.func'), { recursive: true });

// Node wrapper that adapts (req,res) <-> Fetch API for the nitro vercel_web export
const handler = `import server from './index.mjs';
import { Readable } from 'node:stream';

export default async function handler(req, res) {
  try {
    const proto = req.headers['x-forwarded-proto'] || 'https';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    const url = proto + '://' + host + req.url;

    const headers = new Headers();
    for (const [k, v] of Object.entries(req.headers)) {
      if (Array.isArray(v)) v.forEach((vv) => headers.append(k, vv));
      else if (v != null) headers.set(k, String(v));
    }

    const init = { method: req.method, headers };
    if (req.method && req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = Readable.toWeb(req);
      init.duplex = 'half';
    }

    const request = new Request(url, init);
    const response = await server.fetch(request, {});

    res.statusCode = response.status;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.setHeader('content-type', 'text/html; charset=utf-8');
    res.end('<h1>500</h1><p>Server error</p>');
  }
}
`;
await writeFile(path.join(out, 'functions/__server.func/handler.mjs'), handler);

await writeFile(
  path.join(out, 'functions/__server.func/.vc-config.json'),
  JSON.stringify({
    runtime: 'nodejs20.x',
    handler: 'handler.mjs',
    launcherType: 'Nodejs',
    shouldAddHelpers: false,
    supportsResponseStreaming: true,
  }, null, 2),
);

await writeFile(
  path.join(out, 'config.json'),
  JSON.stringify({
    version: 3,
    routes: [
      { src: '/assets/(.*)', headers: { 'cache-control': 'public, max-age=31536000, immutable' }, continue: true },
      { handle: 'filesystem' },
      { src: '/(.*)', dest: '/__server' },
    ],
  }, null, 2),
);

console.log('✓ Vercel Build Output assembled at .vercel/output/');
