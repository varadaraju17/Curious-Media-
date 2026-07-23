/**
 * Image Optimization Script - Force Mode
 * Converts all poster JPGs and brand/content-partner PNGs to WebP
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC = path.join(__dirname, '../public/images');

async function processDir(dir, maxWidth, maxHeight, quality, label) {
  if (!fs.existsSync(dir)) { console.log(`  ⚠️  Not found: ${dir}`); return; }
  const files = fs.readdirSync(dir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  console.log(`\n📁 [${label}] Processing ${files.length} files...`);
  for (const file of files) {
    const input = path.join(dir, file);
    const outName = path.parse(file).name + '.webp';
    const output = path.join(dir, outName);
    try {
      const sizeBefore = fs.statSync(input).size;
      const resizeOpts = { withoutEnlargement: true };
      if (maxWidth) resizeOpts.width = maxWidth;
      if (maxHeight) resizeOpts.height = maxHeight;
      if (maxWidth && maxHeight) resizeOpts.fit = 'inside';
      await sharp(input).resize(resizeOpts).webp({ quality, effort: 4 }).toFile(output);
      const sizeAfter = fs.statSync(output).size;
      const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(0);
      console.log(`  ✅ ${file} → ${outName} | ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB (-${saved}%)`);
    } catch (e) {
      console.error(`  ❌ ${file}: ${e.message}`);
    }
  }
}

async function processFile(inputPath, outputPath, maxWidth, quality) {
  if (!fs.existsSync(inputPath)) { console.log(`  ⚠️  Not found: ${inputPath}`); return; }
  const sizeBefore = fs.statSync(inputPath).size;
  await sharp(inputPath).resize({ width: maxWidth, withoutEnlargement: true }).webp({ quality, effort: 4 }).toFile(outputPath);
  const sizeAfter = fs.statSync(outputPath).size;
  const saved = ((sizeBefore - sizeAfter) / sizeBefore * 100).toFixed(0);
  console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} | ${(sizeBefore/1024).toFixed(0)}KB → ${(sizeAfter/1024).toFixed(0)}KB (-${saved}%)`);
}

async function main() {
  console.log('🚀 Starting image optimization (force mode)...');
  await processFile(path.join(PUBLIC, 'logo.png'), path.join(PUBLIC, 'logo.webp'), 200, 85);
  await processFile(path.join(PUBLIC, 'hero-mobile-ui.png'), path.join(PUBLIC, 'hero-mobile-ui.webp'), 540, 82);
  await processDir(path.join(PUBLIC, 'posters'), 1200, null, 75, 'posters');
  await processDir(path.join(PUBLIC, 'brands'), 160, 160, 80, 'brands');
  await processDir(path.join(PUBLIC, 'content-partners'), 256, 256, 80, 'content-partners');
  await processDir(path.join(PUBLIC, 'testimonials'), 200, 200, 80, 'testimonials');
  console.log('\n🎉 Done!');
}

main().catch(console.error);
