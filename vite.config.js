// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // для відносних шляхів
  build: {
    minify: false, // ❌ вимикає стискання JS і CSS
    crossOrigin: false, // ❌ вимикає CORS для ресурсів
    rollupOptions: {
      input: {
        main: 'index.html',
        management: 'management-software.html',
        join: 'join-the-spotlight.html',
        toppicks: 'top-picks.html',
      }
    }
  },
})
