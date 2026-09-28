const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'src-images');
const OUT = path.join(__dirname, '..', 'src', 'assets', 'products');
fs.mkdirSync(OUT, { recursive: true });

const crops = [
  ['auto-cut-5g', 'blue.png', 186, 55, 252, 137],
  ['micro-controlled-mpl', 'blue.png', 182, 344, 254, 194],
  ['micro-controlled-20kva', 'blue.png', 188, 684, 248, 214],
  ['automatic-rps', 'dark.png', 195, 90, 245, 208],
  ['automatic-rv790', 'dark.png', 198, 420, 245, 144],
  ['automatic-gold', 'dark.png', 164, 666, 254, 168],
  ['servo-rv', 'servo.png', 60, 55, 500, 410],
  ['auto-cut-transformer', 'banner.png', 60, 292, 350, 262],
  ['pp-board-6way', 'brochure.png', 0, 70, 100, 95],
  ['pp-board-3way', 'brochure.png', 172, 12, 54, 120],
  ['ms-outdoor-panel', 'brochure.png', 112, 156, 100, 132],
  ['outdoor-panel', 'brochure.png', 10, 263, 104, 142],
  ['auto-cut-cxa3100', 'brochure.png', 309, 14, 120, 90],
  ['auto-cut-cxa-red', 'brochure.png', 225, 176, 120, 80],
  ['auto-cut-cxa10100', 'brochure.png', 297, 316, 118, 90],
  ['auto-cut-cxa20130', 'brochure.png', 527, 24, 117, 82],
  ['power-board', 'brochure.png', 527, 156, 117, 124],
  ['micro-controlled-2kva', 'brochure.png', 309, 656, 88, 98],
  ['cvt-500va', 'brochure.png', 4, 556, 99, 72],
  ['cvt-1kva', 'brochure.png', 4, 710, 99, 80],
  ['cvt-2kva', 'brochure.png', 92, 844, 97, 88],
];

(async () => {
  const tiles = [];
  for (const [name, file, left, top, width, height] of crops) {
    const buf = await sharp(path.join(SRC, file))
      .extract({ left, top, width, height })
      .resize({ width: 640, kernel: 'lanczos3' })
      .sharpen()
      .webp({ quality: 85 })
      .toBuffer();
    fs.writeFileSync(path.join(OUT, name + '.webp'), buf);
    tiles.push(buf);
  }
  const logoBase = await sharp(path.join(SRC, 'logo.png'))
    .extract({ left: 0, top: 0, width: 413, height: 122 })
    .toBuffer();
  await sharp(logoBase)
    .trim({ background: '#ffffff', threshold: 20 })
    .png()
    .toFile(path.join(OUT, '..', 'logo.png'));

  const cols = 5, tw = 300, th = 240;
  const composites = await Promise.all(
    tiles.map(async (b, i) => ({
      input: await sharp(b).resize(tw, th).toBuffer(),
      left: (i % cols) * tw,
      top: Math.floor(i / cols) * th,
    }))
  );
  await sharp({ create: { width: cols * tw, height: Math.ceil(tiles.length / cols) * th, channels: 3, background: '#888' } })
    .composite(composites)
    .png()
    .toFile(path.join(__dirname, 'contact.png'));
  console.log('done');
})();

