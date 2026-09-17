import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import puppeteer from 'puppeteer-core';
import { createServer } from 'vite';

const executablePath =
  process.env.CHROME_PATH ??
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    '/usr/bin/chromium',
    '/usr/bin/google-chrome',
  ].find(existsSync);
assert(executablePath, 'Set CHROME_PATH to an installed Chromium browser.');

const server = await createServer({ server: { host: '127.0.0.1', port: 0 } });
let browser;
try {
  await server.listen();
  const base = server.resolvedUrls.local[0];
  browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  async function visit(route) {
    await page.goto(new URL(route, base).href, {
      waitUntil: 'domcontentloaded',
    });
    await page.waitForSelector('h1');
  }
  async function clickText(selector, text) {
    const clicked = await page.$$eval(
      selector,
      (elements, label) => {
        const target = elements.find(
          (element) => element.textContent.trim() === label
        );
        target?.click();
        return Boolean(target);
      },
      text
    );
    assert(clicked, `Missing control: ${text}`);
  }

  for (const width of [1440, 390]) {
    await page.setViewport({ width, height: 900 });
    for (const route of [
      '/de',
      '/de/ueber-uns',
      '/de/kontakt',
      '/de/projekte',
      '/de/neuigkeiten',
      '/de/impressum',
      '/de/datenschutz',
      '/de/404',
    ]) {
      await visit(route);
      assert(await page.$('main'), `No main content: ${route}`);
    }
    console.log(`Eight routes render at ${width}px`);
  }

  await visit('/de');
  for (const [id, label] of [
    ['projekte', 'Nächstes Projekt'],
    ['shop', 'Nächstes Produkt'],
  ]) {
    await page.click(`#${id} button[aria-label="${label}"]`);
    await page.waitForFunction(
      (sectionId) =>
        document.querySelector(`#${sectionId} .overflow-x-auto`).scrollLeft >
        100,
      {},
      id
    );
  }
  console.log('Both mobile carousels scroll');

  await page.click('button[aria-label="Navigation umschalten"]');
  await page.waitForSelector('header a[href="/de/projekte"]');
  assert(
    await page.$eval('header', (header) =>
      header.textContent.includes('Unsere Projekte')
    )
  );
  await page.click('button[aria-label="Navigation umschalten"]');

  // Stable data hooks rather than German labels: these assertions must survive
  // translation.
  await visit('/de/projekte');
  await page.click('button[data-city="dortmund"]');
  await page.waitForFunction(
    () => document.querySelector('button[data-city="dortmund"]')
      ?.getAttribute('aria-pressed') === 'true'
  );
  await page.click('button[data-gallery-filter="berlin"]');
  await page.waitForFunction(
    () => document.querySelectorAll('main img[src*="/f"]').length === 2
  );
  await page.click('button[data-gallery-filter="all"]');
  await page.waitForFunction(
    () => document.querySelectorAll('main img[src*="/f"]').length === 11
  );
  console.log('Project and gallery filters work');

  for (const subject of ['spende', 'mitglied']) {
    await visit(`/de/kontakt?thema=${subject}#kontaktformular`);
    await page.waitForFunction(
      (expected) =>
        document.querySelector('#kontaktformular select')?.value === expected,
      {},
      subject
    );
  }
  await page.select('#kontaktformular select', 'nachhilfe');
  assert.equal(
    await page.$eval('#kontaktformular select', (select) => select.value),
    'nachhilfe'
  );
  await clickText('button', 'Direkt im Formular anfragen ↓');
  await page.waitForFunction(
    () => document.querySelector('#kontaktformular select')?.value === 'spende'
  );

  // Exercise the existing local confirmation only; never submit to an external service.
  const writes = [];
  page.on('request', (request) => {
    if (request.method() === 'POST') writes.push(request.url());
  });
  await page.$eval('#kontaktformular', (form) => {
    for (const field of form.querySelectorAll(
      'input[required], textarea[required]'
    )) {
      const value =
        field.type === 'email' ? 'test@example.com' : 'Local refactor check';
      const prototype =
        field.tagName === 'TEXTAREA'
          ? HTMLTextAreaElement.prototype
          : HTMLInputElement.prototype;
      Object.getOwnPropertyDescriptor(prototype, 'value').set.call(
        field,
        value
      );
      field.dispatchEvent(new Event('input', { bubbles: true }));
    }
    form.requestSubmit();
  });
  await page.waitForFunction(() =>
    document.body.textContent.includes('Nachricht erfolgreich versendet!')
  );
  await page.waitForSelector('#kontaktformular', { timeout: 8000 });
  assert.deepEqual(writes, []);
  console.log('Contact presets, manual selection and local confirmation work');
  // Language switching: the toggle must move both the URL and the document
  // language, and the business keys carried in the URL must survive it.
  await page.setViewport({ width: 1440, height: 900 });
  await visit('/de/projekte');
  await page.click('header a[hreflang="en"]');
  await page.waitForFunction(
    () => location.pathname === '/en/services-for-immigrants'
  );
  await page.waitForFunction(() => document.documentElement.lang === 'en');
  assert(
    await page.$eval('header', (header) => header.textContent.includes('Our projects'))
  );
  await visit('/en/contact?thema=spende#kontaktformular');
  await page.waitForFunction(
    () => document.querySelector('#kontaktformular select')?.value === 'spende'
  );
  console.log('Language toggle switches URL, lang and copy');

  // A URL indexed before the locale prefix existed must keep both halves.
  await page.goto(new URL('/contact?thema=mitglied#mitglied', base).href, {
    waitUntil: 'domcontentloaded',
  });
  await page.waitForFunction(
    () =>
      location.pathname === '/de/kontakt' &&
      location.search === '?thema=mitglied' &&
      location.hash === '#mitglied'
  );
  console.log('Legacy URLs redirect with query and hash intact');

  assert.deepEqual(errors, [], 'Browser runtime errors');
  console.log('No browser runtime errors');
} finally {
  await browser?.close();
  await server.close();
}
