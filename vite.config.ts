
import { defineConfig } from "vite-plus";

export default defineConfig({
  plugins: [],
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
