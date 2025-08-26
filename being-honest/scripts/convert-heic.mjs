import fs from 'node:fs/promises';
import path from 'node:path';
import convert from 'heic-convert';

const SRC_DIR = path.resolve('public/assets/images/basha/images');
const exts = new Set(['.heic', '.HEIC']);

async function* walk(dir){
  for (const d of await fs.readdir(dir, { withFileTypes: true })){
    const res = path.resolve(dir, d.name);
    if (d.isDirectory()) yield* walk(res);
    else yield res;
  }
}

async function main(){
  let count = 0;
  for await (const file of walk(SRC_DIR)){
    const ext = path.extname(file);
    if (!exts.has(ext)) continue;
    console.log('Found HEIC:', file);
    const base = file.slice(0, -ext.length);
    const jpgOut = base + '.jpg';
    const webpOut = base + '.webp';
    try{
      const inputBuffer = await fs.readFile(file);
      const webpBuffer = await convert({ buffer: inputBuffer, format: 'WEBP', quality: 0.8 });
      await fs.writeFile(webpOut, webpBuffer);
      const jpegBuffer = await convert({ buffer: inputBuffer, format: 'JPEG', quality: 0.82 });
      await fs.writeFile(jpgOut, jpegBuffer);
      console.log('Converted (WASM):', path.basename(file), '->', path.basename(jpgOut), path.basename(webpOut));
      count++;
    }catch(err){
      console.error('Failed:', file, err);
    }
  }
  console.log('Done. Converted', count, 'files.');
}
main().catch(e=>{ console.error(e); process.exit(1); });
