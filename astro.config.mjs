// https://astro.build/config
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

export default defineConfig({
  site: "https://torn4dom4n.github.io",
  integrations: [
    sitemap(),
    tailwind(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp"
    }),
  ],
});
