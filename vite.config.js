// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // для відносних шляхів
  build: {
    minify: false, // ❌ вимикає стискання JS і CSS
  },
})
