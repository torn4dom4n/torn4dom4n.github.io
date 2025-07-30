// @ts-check

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";

const site = process.env.SITE;
const base = process.env.BASE;

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
