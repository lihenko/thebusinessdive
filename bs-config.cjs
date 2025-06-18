// bs-config.js
const browserSync = require('browser-sync').create();

browserSync.init({
  proxy: 'http://localhost:5173', // Vite dev server
  files: ['dist/**/*.*', 'index.html', 'src/**/*.{html,js,scss}'],
  open: true,
  notify: false,
  port: 3000,
});
