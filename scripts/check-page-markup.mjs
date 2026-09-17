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
// Both locales: rendering the English pages here is a free smoke test. A key
// that resolves to itself, a missing <Trans> component or a t() returning
// [object Object] all show up as a markup diff.
const routes = [
  ['', 'src/redesign/RedesignHome.tsx'],
  ['ueber-uns|about-us', 'src/redesign/pages/RedesignAboutUs.tsx'],
  ['kontakt|contact', 'src/redesign/pages/RedesignContact.tsx'],
  ['projekte|services-for-immigrants', 'src/redesign/pages/RedesignProjects.tsx'],
  ['neuigkeiten|news', 'src/redesign/pages/RedesignNews.tsx'],
  ['international|international', 'src/redesign/pages/RedesignInternational.tsx'],
  ['impressum|imprint', 'src/pages/Mentions.tsx'],
  ['datenschutz|privacy-policy', 'src/pages/PrivacyPolicy.tsx'],
  ['404|404', 'src/redesign/pages/RedesignNotFound.tsx'],
];
const pages = routes.flatMap(([segments, file]) => {
  const [de, en = de] = segments.split('|');
  return [
    [`/de${de ? `/${de}` : ''}`, file],
    [`/en${en ? `/${en}` : ''}`, file],
  ];
});
const server = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
try {
  // Without this the English routes would render German: the pages are mounted
  // straight into a MemoryRouter, so LocaleLayout — which is what switches the
  // language in the app — never runs here.
  const { default: i18n } = await server.ssrLoadModule('src/i18n/index.ts');

  const rendered = {};
  for (const [route, file] of pages) {
    await i18n.changeLanguage(route.split('/')[1]);
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
