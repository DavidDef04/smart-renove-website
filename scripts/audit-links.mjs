import fs from 'fs';
import path from 'path';

const appDir = 'app';
const routes = new Set();

function walk(dir, base = '') {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || entry.name === 'api') continue;
      walk(full, `${base}/${entry.name}`);
    } else if (entry.name === 'page.tsx' || entry.name === 'page.js') {
      routes.add(base || '/');
    }
  }
}

walk(appDir);

const redirects = new Map([
  ['/pages/realisations', '/realisations'],
  ['/pages/about', '/about'],
  ['/pages/contact', '/contact'],
  ['/services/renovation', '/renovation-complete'],
  ['/services/isolation-thermique', '/services'],
]);

const links = new Set();
const re = /href=["'](\/[^"'#?]*)/g;

function scanFile(file) {
  const text = fs.readFileSync(file, 'utf8');
  for (const m of text.matchAll(re)) links.add(m[1].replace(/\/$/, '') || '/');
}

function scanDir(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) scanDir(full);
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) scanFile(full);
  }
}

scanDir(appDir);

const missing = [];
const notes = [];

for (const link of [...links].sort()) {
  if (link.startsWith('http') || link.includes('.')) continue;
  const normalized = link === '' ? '/' : link;
  const target = redirects.get(normalized) ?? normalized;

  const exists =
    routes.has(target) ||
    routes.has(target.replace(/\/$/, '')) ||
    (target !== '/' && routes.has(target));

  if (!exists) {
    // dynamic segments
    if (/^\/services\/[\w-]+$/.test(target)) {
      const p = `app/services${target.replace('/services', '')}/page.tsx`;
      if (!fs.existsSync(p)) missing.push({ link: normalized, reason: 'page service absente' });
    } else if (target.startsWith('/pages/')) {
      const p = `app/pages${target.replace('/pages', '')}/page.tsx`;
      if (!fs.existsSync(p)) missing.push({ link: normalized, reason: 'page légale absente' });
    } else {
      missing.push({ link: normalized, reason: 'route introuvable' });
    }
  }
}

// Slugs sans page dédiée sur /services
const serviceSlugsNoPage = ['sur-mesure', 'projets-commerciaux', 'fourniture-pose', 'serrurerie', 'menuiserie', 'renovation'];
for (const s of serviceSlugsNoPage) {
  notes.push({ item: `/services#${s}`, note: 'ancre sur /services — pas de page dédiée (contact ou /services)' });
}

notes.push({ item: '/services/electricite', note: 'pas de page — redirige vers /renovation-complete via servicesData' });
notes.push({ item: '/about-hero-poster.jpg', note: 'fichier manquant (AboutHero vidéo retirée)' });
notes.push({ item: '/videos/videoabout.mp4', note: 'vidéo about absente du dossier public' });

const report = { routes: [...routes].sort(), missing, notes, totalLinks: links.size };
fs.writeFileSync('scripts/audit-links-report.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
