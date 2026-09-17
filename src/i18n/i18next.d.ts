import 'i18next';

import type common from './locales/de/common.json';
import type home from './locales/de/home.json';
import type about from './locales/de/about.json';
import type projects from './locales/de/projects.json';
import type news from './locales/de/news.json';
import type contact from './locales/de/contact.json';
import type legal from './locales/de/legal.json';
import type meta from './locales/de/meta.json';

// German is the reference: a key that does not exist in de/*.json is a typo,
// and tsc says so at the call site.
declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      home: typeof home;
      about: typeof about;
      projects: typeof projects;
      news: typeof news;
      contact: typeof contact;
      legal: typeof legal;
      meta: typeof meta;
    };
  }
}
