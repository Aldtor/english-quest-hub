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

// Keep Nitro's generated `index.mjs` fetch handler and `.vc-config.json` intact.
// Vercel supports fetch-style handlers directly; wrapping it as `(req, res)` causes
// runtime mismatches on Vercel's streaming Node launcher.

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
