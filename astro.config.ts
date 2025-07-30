// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

const site =
  process.env.CI &&
  process.env.VERCEL_ENV !== "production" &&
  process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : (process.env.SITE ?? "http://localhost:4321");
const base = process.env.BASE || "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react(), sitemap(), icon()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Mona Sans",
        cssVariable: "--font-mona-sans",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
