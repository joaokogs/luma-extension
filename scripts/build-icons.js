import sharp from 'sharp';
import { readFileSync } from 'fs';
import { writeFile } from 'fs/promises';
import { resolve } from 'path';

const SIZES = [16, 32, 48, 96, 128];
const SVG = readFileSync(resolve('public/icons/icon.svg'));

async function main() {
  for (const size of SIZES) {
    const png = await sharp(SVG, { density: 300 })
      .resize(size, size)
      .png()
      .toBuffer();
    await writeFile(resolve(`public/icons/icon-${size}.png`), png);
    console.log(`Created icon-${size}.png`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
