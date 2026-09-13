import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const required = [
  'index.html', '404.html', 'en/index.html', 'zh/index.html',
  'en/privacy/index.html', 'zh/privacy/index.html',
  'en/support/index.html', 'zh/support/index.html',
  'en/guide/index.html', 'zh/guide/index.html',
  'sitemap-index.xml', 'brand/applane.png', 'brand/favicon.ico',
];
const errors = [];
for (const file of required) if (!existsSync(join(dist, file))) errors.push(`Missing ${file}`);

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });
}

const htmlFiles = filesUnder(dist).filter((file) => extname(file) === '.html');
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  if (/<script\b[^>]*\bsrc\s*=/i.test(html)) errors.push(`${relative(dist, file)} contains an external script`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const value = match[1];
    if (/^(?:https?:|mailto:|#|data:)/.test(value)) continue;
    if (!value.startsWith('/applane-site/')) {
      errors.push(`${relative(dist, file)} has a non-base local URL: ${value}`);
      continue;
    }
    let local = value.slice('/applane-site/'.length).split(/[?#]/)[0];
    if (!local) local = 'index.html';
    else if (local.endsWith('/')) local += 'index.html';
    if (!existsSync(join(dist, local))) errors.push(`${relative(dist, file)} references missing ${local}`);
  }
}

for (const [file, expectedLinks] of Object.entries({
  'en/guide/index.html': ['/applane-site/en/guide/', '/applane-site/zh/guide/'],
  'zh/guide/index.html': ['/applane-site/en/guide/', '/applane-site/zh/guide/'],
})) {
  const html = readFileSync(join(dist, file), 'utf8');
  for (const href of expectedLinks) {
    if (!html.includes(`href="${href}"`)) errors.push(`${file}: missing locale guide link ${href}`);
  }
}

for (const directory of ['src', 'public']) {
  for (const file of filesUnder(join(root, directory))) {
    if (!['.astro', '.ts', '.css', '.txt', '.md'].includes(extname(file))) continue;
    const source = readFileSync(file, 'utf8');
    for (const forbidden of ['Porthole', 'Telegram', 'CLOUDFLARE_WEB_ANALYTICS_TOKEN']) {
      if (source.includes(forbidden)) errors.push(`${relative(root, file)} contains ${forbidden}`);
    }
  }
}

for (const page of ['en/privacy/index.html', 'zh/privacy/index.html']) {
  if (existsSync(join(dist, page)) && !readFileSync(join(dist, page), 'utf8').includes('szlab.ai@outlook.com')) errors.push(`${page} has no support email`);
}

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
console.log(`Verified ${htmlFiles.length} HTML pages, bilingual guide/privacy/support routes, local assets, and script boundaries.`);
