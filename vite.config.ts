import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { stringToSlug } from "./src/utils";

export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/${stringToSlug(env.VITE_TEAM_NAME)}/`,
    plugins: [react()],
    server: {
      proxy: {
        // Forward /api requests to the FastAPI service running inside the same container
        "/api": {
          target: "http://127.0.0.1:8000", // FastAPI
          changeOrigin: true,               // make Host header match target
          secure: false,                    // allow self‑signed certs (dev only)
          rewrite: (path) => path           // keep /api prefix intact
        }
      }
    }
  });
};
