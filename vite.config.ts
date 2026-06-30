import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  vite: {
    server: {
      host: "0.0.0.0",
      allowedHosts: [
        "exonerate-deacon-bagginess.ngrok-free.dev",
      ],
    },
  },
});