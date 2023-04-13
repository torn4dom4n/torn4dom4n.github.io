import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://torn4dom4n.github.io',
  experimental: {
    assets: true,
  },
  integrations: [sitemap(), tailwind()],
});
