import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// A project Pages build needs BASE_PATH=/repository-name.
// A custom-domain build needs BASE_PATH=/ and SITE_URL=https://your-domain.
const site = process.env.SITE_URL || 'http://localhost:4321';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  build: { concurrency: 4 },
  integrations: [react(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
