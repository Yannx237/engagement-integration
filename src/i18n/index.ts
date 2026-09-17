import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LOCALE, LOCALES, isLocale } from './config';
import type { Locale } from './config';

import deCommon from './locales/de/common.json';
import deHome from './locales/de/home.json';
import deAbout from './locales/de/about.json';
import deProjects from './locales/de/projects.json';
import deNews from './locales/de/news.json';
import deContact from './locales/de/contact.json';
import deLegal from './locales/de/legal.json';
import deMeta from './locales/de/meta.json';

import enCommon from './locales/en/common.json';
import enHome from './locales/en/home.json';
import enAbout from './locales/en/about.json';
import enProjects from './locales/en/projects.json';
import enNews from './locales/en/news.json';
import enContact from './locales/en/contact.json';
import enLegal from './locales/en/legal.json';
import enMeta from './locales/en/meta.json';

// The URL is the only source of truth for the language. Reading it here means
// the very first render is already in the right locale, with no flash and no
// second source of truth to keep in sync.
function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE;
  const segment = window.location.pathname.split('/')[1];
  return isLocale(segment) ? segment : DEFAULT_LOCALE;
}

// Resources are bundled rather than fetched, so changeLanguage() is synchronous:
// no Suspense boundary, no `ready` state, no half-translated frame.
i18n.use(initReactI18next).init({
  lng: detectInitialLocale(),
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: LOCALES,
  defaultNS: 'common',
  resources: {
    de: {
      common: deCommon,
      home: deHome,
      about: deAbout,
      projects: deProjects,
      news: deNews,
      contact: deContact,
      legal: deLegal,
      meta: deMeta,
    },
    en: {
      common: enCommon,
      home: enHome,
      about: enAbout,
      projects: enProjects,
      news: enNews,
      contact: enContact,
      legal: enLegal,
      meta: enMeta,
    },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
