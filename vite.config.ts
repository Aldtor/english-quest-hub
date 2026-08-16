import { defineConfig } from "@lovable.dev/vite-tanstack-config";

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
};

const nitroConfig = process.env.NITRO_PRESET === "vercel" || process.env.VERCEL === "1"
  ? vercelNitroConfig
  : true;

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: nitroConfig as any,
});
