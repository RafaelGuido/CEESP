import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.ceesp.org.br',
  integrations: [tailwind()],
});
