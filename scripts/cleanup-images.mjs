/**
 * Supprime UNIQUEMENT les doublons exacts (même hash) lorsqu'une copie référencée existe.
 * Ne supprime jamais les fichiers orphelins seuls.
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT = path.resolve('public/images');
const KEEP_EXTRA = new Set(['pattern.svg', 'pattern.png', 'pattern-light.svg']);

function collectReferenced() {
  const keep = new Set([...KEEP_EXTRA]);
  const patterns = [/img\(\s*['"]([^'"]+)['"]\s*\)/g, /\/images\/([^'"`\s)]+)/g];

  function scanFile(file) {
    const text = fs.readFileSync(file, 'utf8');
    for (const re of patterns) {
      re.lastIndex = 0;
      for (const m of text.matchAll(re)) {
        const name = m[1];
        if (name && !name.includes('${')) keep.add(name);
      }
    }
  }

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (/\.(tsx?|jsx?|css)$/.test(entry.name)) scanFile(full);
    }
  }

  walk('app');
  return keep;
}

function fileHash(filePath) {
  return crypto.createHash('sha256').update(fs.readFileSync(filePath)).digest('hex');
}

const keep = collectReferenced();
const files = fs.readdirSync(ROOT).filter((f) => fs.statSync(path.join(ROOT, f)).isFile());

const byHash = new Map();
for (const name of files) {
  const hash = fileHash(path.join(ROOT, name));
  if (!byHash.has(hash)) byHash.set(hash, []);
  byHash.get(hash).push(name);
}

let deleted = 0;
const deletedList = [];

for (const name of files) {
  if (keep.has(name)) continue;
  const hash = fileHash(path.join(ROOT, name));
  const keptInGroup = (byHash.get(hash) ?? []).filter((n) => keep.has(n));
  if (keptInGroup.length === 0) continue;

  fs.unlinkSync(path.join(ROOT, name));
  deleted++;
  deletedList.push({ name, duplicateOf: keptInGroup[0] });
}

console.log(`Référencés : ${keep.size}`);
console.log(`Doublons supprimés : ${deleted}`);
console.log(`Fichiers restants : ${fs.readdirSync(ROOT).length}`);

if (deletedList.length) {
  fs.writeFileSync('scripts/cleanup-images-log.json', JSON.stringify(deletedList, null, 2));
}
