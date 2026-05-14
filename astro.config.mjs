import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  site: 'https://personal-blog-unai.vercel.app',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
