// @ts-check

import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import preact from '@astrojs/preact'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://app.netlify.com/projects/doc-astro-blog/overview',

  integrations: [
    // react(),
    preact(),
  ],
})
