import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';

// Capture before a structural refactor, then compare the complete rendered markup.
// The baseline lives outside the repository and is supplied explicitly.
const [mode, baseline] = process.argv.slice(2);
assert(
  ['capture', 'compare'].includes(mode) && baseline,
  'Usage: node scripts/check-page-markup.mjs capture|compare <baseline.json>'
);
const pages = [
  ['/de', 'src/redesign/RedesignHome.tsx'],
  ['/de/ueber-uns', 'src/redesign/pages/RedesignAboutUs.tsx'],
  ['/de/kontakt', 'src/redesign/pages/RedesignContact.tsx'],
  ['/de/projekte', 'src/redesign/pages/RedesignProjects.tsx'],
  ['/de/neuigkeiten', 'src/redesign/pages/RedesignNews.tsx'],
  ['/de/international', 'src/redesign/pages/RedesignInternational.tsx'],
  ['/de/impressum', 'src/pages/Mentions.tsx'],
  ['/de/datenschutz', 'src/pages/PrivacyPolicy.tsx'],
  ['/de/404', 'src/redesign/pages/RedesignNotFound.tsx'],
];
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
try {
  const rendered = {};
  for (const [route, file] of pages) {
    const { default: Page } = await server.ssrLoadModule(file);
    rendered[route] = renderToStaticMarkup(
      createElement(
        MemoryRouter,
        { initialEntries: [route] },
        createElement(Page)
      )
    );
  }
  if (mode === 'capture') {
    await writeFile(baseline, JSON.stringify(rendered));
  } else {
    const original = JSON.parse(await readFile(baseline, 'utf8'));
    for (const [route, markup] of Object.entries(rendered)) {
      if (markup !== original[route]) {
        let index = 0;
        while (
          index < markup.length &&
          markup[index] === original[route][index]
        )
          index++;
        console.error(
          `Rendered markup changed: ${route} at ${index}\nBefore: ${original[route].slice(index - 100, index + 250)}\nAfter: ${markup.slice(index - 100, index + 250)}`
        );
        process.exitCode = 1;
        continue;
      }
      console.log(`Identical markup: ${route}`);
    }
  }
} finally {
  await server.close();
}
