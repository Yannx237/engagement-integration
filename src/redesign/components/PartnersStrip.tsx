import type { SyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';

// One shared partner block for the whole site: every logo is listed here once,
// aligned under "In Zusammenarbeit mit" instead of being repeated per city.
const partners: readonly { src: string; alt: string; title: string }[] = [
  {
    src: '/assets/images/aktion-mensch.svg',
    alt: 'Aktion Mensch',
    title: 'Aktion Mensch – Förderer von Tandem statt Barriere',
  },
  {
    src: '/assets/images/logo-kim-nrw.png',
    alt: 'Kommunales Integrationsmanagement NRW',
    title: 'Kommunales Integrationsmanagement NRW (KIM)',
  },
  {
    src: '/assets/images/image-4.png',
    alt: 'Kommunales Integrationszentrum Kreis Recklinghausen',
    title: 'Kommunales Integrationszentrum Kreis Recklinghausen',
  },
  {
    src: '/assets/images/image-5.png',
    alt: 'Land NRW – Ministerium für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration',
    title:
      'Ministerium für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration NRW',
  },
  {
    src: '/assets/images/image-10.png',
    alt: 'KOMM-AN NRW',
    title: 'KOMM-AN NRW',
  },
  {
    src: '/assets/images/image-6.png',
    alt: 'Stiftung Bildung',
    title: 'Stiftung Bildung',
  },
  {
    src: '/assets/images/image-7.png',
    alt: 'MENSCHEN STÄRKEN MENSCHEN',
    title: 'MENSCHEN STÄRKEN MENSCHEN',
  },
  {
    src: '/assets/images/image-8.png',
    alt: 'Bundesministerium für Familie, Senioren, Frauen und Jugend',
    title: 'Bundesministerium für Familie, Senioren, Frauen und Jugend',
  },
  {
    src: '/assets/images/logo-bmz.png',
    alt: 'Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung',
    title:
      'Mit Mitteln des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung',
  },
  {
    src: '/assets/images/logo-engagement-global.png',
    alt: 'Engagement Global',
    title: 'Engagement Global – Service für Entwicklungsinitiativen',
  },
  {
    src: '/assets/images/logo-deutsch-afrikanisches-jugendwerk.png',
    alt: 'Deutsch-Afrikanisches Jugendwerk',
    title: 'Deutsch-Afrikanisches Jugendwerk',
  },
  {
    src: '/assets/images/logo-bezirksamt-steglitz-zehlendorf.png',
    alt: 'Bezirksamt Steglitz-Zehlendorf, Berlin',
    title: 'Bezirksamt Steglitz-Zehlendorf, Berlin',
  },
];

export default function PartnersStrip() {
  const { t } = useTranslation();

  // A logo whose file is not in place yet hides its tile rather than showing a
  // broken image. Drop the file in and it appears; nothing else to change.
  function hideOnMissingFile(event: SyntheticEvent<HTMLImageElement>) {
    event.currentTarget.closest('li')?.setAttribute('hidden', '');
  }
  return (
    <section
      className="py-20 bg-white scroll-mt-28"
      data-purpose="partners-and-sponsors"
      id="partner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            {t('partners.eyebrow')}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('partners.heading')}
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            {t('partners.intro')}
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6 items-center">
          {partners.map((partner) => (
            <li
              key={partner.src}
              className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
              title={partner.title}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                loading="lazy"
                decoding="async"
                onError={hideOnMissingFile}
                className="max-h-14 max-w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
