// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path'
import url from 'node:url'
import tailwindcss from '@tailwindcss/vite';
const _dirname = path.dirname(url.fileURLToPath(import.meta.url))


import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(_dirname, "./src")
      }
    },
    plugins: [tailwindcss()]
  },
output: 'server',
  integrations: [],
  adapter: vercel({
    edgeMiddleware: true,
  })
});