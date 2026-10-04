import { copyFile } from "node:fs/promises";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// GitHub Pages serves 404.html for unknown paths. A copy of index.html lets
// the router handle deep links like /recruitment-ipsum/about on reload.
function spaFallback() {
  let outDir;
  return {
    name: "spa-fallback",
    apply: "build",
    configResolved(config) {
      outDir = config.build.outDir;
    },
    async closeBundle() {
      await copyFile(`${outDir}/index.html`, `${outDir}/404.html`);
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/recruitment-ipsum/" : "/",
  plugins: [vue(), spaFallback()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
  test: {
    include: ["src/**/*.test.js"],
  },
}));
