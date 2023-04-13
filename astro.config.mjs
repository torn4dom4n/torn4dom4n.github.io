import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  experimental: {
    assets: true,
  },
  integrations: [sitemap(), tailwind()],
});
