import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "tests/setup.ts",
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
      // "@/components": "./src/components/",
      // "@/pages": "./src/pages/",
    },
  },
});
