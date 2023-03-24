import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://torn4dom4n.github.io',
  experimental: {
    assets: true,
  },
  integrations: [sitemap()],
});
