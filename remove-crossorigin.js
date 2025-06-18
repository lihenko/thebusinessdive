import fs from 'fs';
import path from 'path';

const distDir = './dist';

fs.readdirSync(distDir).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(distDir, file);
    let html = fs.readFileSync(filePath, 'utf8');
    html = html.replace(/\s*crossorigin(="[^"]*")?/g, '');
    fs.writeFileSync(filePath, html);
  }
});