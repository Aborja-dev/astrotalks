// @ts-check
import { defineConfig } from 'astro/config';
import path from 'node:path'
import url from 'node:url'
import tailwindcss from '@tailwindcss/vite';
const _dirname = path.dirname(url.fileURLToPath(import.meta.url))
import db from '@astrojs/db';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel';

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

  integrations: [db()],
  adapter: vercel()
});