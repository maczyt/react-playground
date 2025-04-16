import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(process.env.NODE_ENV);
// https://vite.dev/config/
export default defineConfig({
  // 本地开发，请注释调base
  base: process.env.NODE_ENV === "development" ? "/" : "/react-playground",
  plugins: [react()],
});
