import tailwindcss from "@tailwindcss/vite";
import UnheadVite from "@unhead/addons/vite";
import react from "@vitejs/plugin-react";
import { FontaineTransform } from "fontaine";
import { defineConfig } from "vite";

const base = process.env.BASE || "/";

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [
    react(),
    tailwindcss(),
    FontaineTransform.vite({
      fallbacks: ["Geist Variable", "Geist Mono Variable"],
    }),
    UnheadVite(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});
