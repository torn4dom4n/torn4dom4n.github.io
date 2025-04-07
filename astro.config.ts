// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { FontaineTransform } from "fontaine";

const site = process.env.CI
  ? process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://torn4dom4n.github.io"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      FontaineTransform.vite({
        fallbacks: ["Arial"],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url),
      }),
    ],
  },
});
