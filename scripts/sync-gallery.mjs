import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { extname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { UTApi } from 'uploadthing/server';
import 'dotenv/config';

const root = fileURLToPath(new URL('..', import.meta.url));
const uploadDir = join(root, 'gallery-upload');
const manifestPath = join(root, 'gallery.json');
const supported = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.avif']);
const tagIndex = process.argv.indexOf('--tag');
const tag = tagIndex >= 0 ? process.argv[tagIndex + 1] : 'everyday';

if (!process.env.UPLOADTHING_TOKEN) throw new Error('Missing UPLOADTHING_TOKEN. Copy .env.example to .env.');

await mkdir(uploadDir, { recursive: true });
const files = (await readdir(uploadDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile() && supported.has(extname(entry.name).toLowerCase()))
  .map((entry) => entry.name);
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const known = new Set(manifest.map((item) => item.sourceName).filter(Boolean));
const pending = files.filter((name) => !known.has(name));

if (!pending.length) {
  console.log('No new gallery images found.');
  process.exit(0);
}

const utapi = new UTApi({ token: process.env.UPLOADTHING_TOKEN });
for (const name of pending) {
  const file = new File([await readFile(join(uploadDir, name))], name, { type: mimeType(name) });
  const result = await utapi.uploadFiles(file);
  if (result.error || !result.data) throw new Error(`${name}: ${result.error?.message ?? 'upload failed'}`);
  manifest.push({ src: result.data.url, title: titleFrom(name), tag, sourceName: name });
  console.log(`Uploaded ${name}`);
}

await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Updated gallery.json with ${pending.length} image${pending.length === 1 ? '' : 's'}.`);

function titleFrom(name) {
  return basename(name, extname(name)).replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function mimeType(name) {
  const extension = extname(name).toLowerCase();
  return extension === '.jpg' || extension === '.jpeg' ? 'image/jpeg' : `image/${extension.slice(1)}`;
}
