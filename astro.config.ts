// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { defineConfig, fontProviders } from "astro/config";

const site = process.env.CI
  ? process.env.VERCEL_ENV !== "production" && process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "https://torn4dom4n.github.io"
  : "http://localhost:4321";

// https://astro.build/config
export default defineConfig({
  site,
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
