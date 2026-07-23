const fs = require('fs');
const path = require('path');

function walkSync(dir, exts) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkSync(filePath, exts));
    } else if (exts.some(ext => file.endsWith(ext))) {
      results.push(filePath);
    }
  });
  return results;
}

const srcDir = path.join(__dirname, '../src');
const files = walkSync(srcDir, ['.tsx', '.ts', '.json']);

const patterns = [
  [/\/images\/brands\/([^"'\s]+)\.(png|jpg|jpeg)/g, '/images/brands/$1.webp'],
  [/\/images\/content-partners\/([^"'\s]+)\.(png|jpg|jpeg)/g, '/images/content-partners/$1.webp'],
  [/\/images\/posters\/([^"'\s]+)\.(jpg|jpeg)/g, '/images/posters/$1.webp'],
  [/\/images\/logo\.png/g, '/images/logo.webp'],
  [/\/images\/hero-mobile-ui\.png/g, '/images/hero-mobile-ui.webp'],
];

let totalUpdated = 0;
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  for (const [regex, replacement] of patterns) {
    const newContent = content.replace(regex, replacement);
    if (newContent !== content) {
      content = newContent;
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated: ${path.relative(path.join(__dirname, '..'), file)}`);
    totalUpdated++;
  }
}
console.log(`\nDone. ${totalUpdated} files updated.`);
