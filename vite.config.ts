import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@svg": path.resolve(__dirname, "./src/components/svg"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@img": path.resolve(__dirname, "./src/assets/img"),
      "@css": path.resolve(__dirname, "./src/assets/css"),
      "@data": path.resolve(__dirname, "./src/data"),
    },
  },
});
