// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import db from '@astrojs/db';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    optimizeDeps: {
      exclude: ['@']

    },
    plugins: [tailwindcss()]
  },

  integrations: [db()],
  adapter: vercel()
});