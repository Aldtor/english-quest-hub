// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig, type LovableViteTanstackOptions } from "@lovable.dev/vite-tanstack-config";

const vercelNitroConfig = {
  preset: "vercel",
  output: {
    dir: ".vercel/output",
    serverDir: ".vercel/output/functions/__server.func",
    publicDir: ".vercel/output/static",
  },
  vercel: {
    entryFormat: "node",
    functions: {
      runtime: "nodejs20.x",
    },
  },
} as unknown as LovableViteTanstackOptions["nitro"];

const nitroConfig = process.env.NITRO_PRESET === "vercel" || process.env.VERCEL === "1"
  ? vercelNitroConfig
  : true;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // Entries are resolved relative to srcDirectory (src), so "server" means src/server.ts.
    server: { entry: "server" },
  },
  nitro: nitroConfig,
});
