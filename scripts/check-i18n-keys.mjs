import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

// Read-only guard over the translation files. Four checks, three of them fatal:
// an orphan English key is a typo; an HTML entity would render literally
// through t(); a mismatched placeholder would print {{var}} to a visitor.
// Untranslated German keys are only reported, so a batch can ship half done.

const ROOT = 'src/i18n/locales';
const LOCALES = ['de', 'en'];
const SOURCE = 'de';
const ENTITY = /&(?:amp|nbsp|lt|gt|quot|#\d+|#x[0-9a-f]+);/i;
const PLACEHOLDER = /\{\{\s*([\w.]+)\s*\}\}/g;

function flatten(value, prefix = '', out = new Map()) {
  if (value && typeof value === 'object' && !Array.isArray(value)) {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
  } else {
    out.set(prefix, value);
  }
  return out;
}

async function load(locale) {
  const dir = join(ROOT, locale);
  const files = (await readdir(dir)).filter((f) => f.endsWith('.json'));
  const all = new Map();
  for (const file of files) {
    const ns = file.replace(/\.json$/, '');
    const data = JSON.parse(await readFile(join(dir, file), 'utf8'));
    for (const [key, value] of flatten(data)) all.set(`${ns}:${key}`, value);
  }
  return all;
}

function placeholders(value) {
  return typeof value === 'string'
    ? new Set([...value.matchAll(PLACEHOLDER)].map((m) => m[1]))
    : new Set();
}

const bundles = Object.fromEntries(
  await Promise.all(LOCALES.map(async (l) => [l, await load(l)]))
);
const source = bundles[SOURCE];
const errors = [];

// 1 & 3. Entities anywhere, orphans in the target languages.
for (const locale of LOCALES) {
  for (const [key, value] of bundles[locale]) {
    if (typeof value === 'string' && ENTITY.test(value)) {
      errors.push(
        `${locale}/${key}: contains an HTML entity. t() and <Trans> do not ` +
          `decode entities, so it would render literally. Use the character.`
      );
    }
    if (locale !== SOURCE && !source.has(key)) {
      errors.push(`${locale}/${key}: no such key in ${SOURCE} — typo?`);
    }
  }
}

// 4. Placeholders must line up in both directions.
for (const locale of LOCALES.filter((l) => l !== SOURCE)) {
  for (const [key, value] of bundles[locale]) {
    if (!source.has(key)) continue;
    const from = placeholders(source.get(key));
    const to = placeholders(value);
    const missing = [...from].filter((p) => !to.has(p));
    const extra = [...to].filter((p) => !from.has(p));
    if (missing.length || extra.length) {
      errors.push(
        `${locale}/${key}: placeholders differ from ${SOURCE}` +
          (missing.length ? ` — missing {{${missing.join('}}, {{')}}}` : '') +
          (extra.length ? ` — unexpected {{${extra.join('}}, {{')}}}` : '')
      );
    }
  }
}

// 2. Progress, not an error.
for (const locale of LOCALES.filter((l) => l !== SOURCE)) {
  const translated = [...source.keys()].filter((k) => bundles[locale].has(k));
  const missing = [...source.keys()].filter((k) => !bundles[locale].has(k));
  console.log(
    `${locale}: ${translated.length}/${source.size} keys translated` +
      (missing.length ? ` — ${missing.length} still to do` : '')
  );
  for (const key of missing.slice(0, 20)) console.log(`   todo ${key}`);
  if (missing.length > 20) console.log(`   … and ${missing.length - 20} more`);
}

if (errors.length) {
  console.error(`\n${errors.length} problem(s):`);
  for (const error of errors) console.error(`  ${error}`);
  process.exitCode = 1;
} else {
  console.log('\nNo orphan keys, no HTML entities, no placeholder mismatch.');
}
