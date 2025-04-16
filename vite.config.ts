import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  // 本地开发，请注释调base
  base: "/react-playground",
  plugins: [react()],
});
