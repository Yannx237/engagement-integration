import { useState } from 'react';
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
    src: '/assets/images/logo-bmz.jpg',
    alt: 'Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung',
    title:
      'Mit Mitteln des Bundesministeriums für wirtschaftliche Zusammenarbeit und Entwicklung',
  },
  {
    src: '/assets/images/logo-engagement-global.jpg',
    alt: 'Engagement Global',
    title: 'Engagement Global – Service für Entwicklungsinitiativen',
  },
  {
    src: '/assets/images/logo-deutsch-afrikanisches-jugendwerk.jpg',
    alt: 'Deutsch-Afrikanisches Jugendwerk',
    title: 'Deutsch-Afrikanisches Jugendwerk',
  },
  {
    src: '/assets/images/logo-bezirksamt-steglitz-zehlendorf.jpg',
    alt: 'Bezirksamt Steglitz-Zehlendorf, Berlin',
    title: 'Bezirksamt Steglitz-Zehlendorf, Berlin',
  },
];

/**
 * A tile stays out of the layout until its image has actually loaded. A logo
 * whose file is not in the repository yet therefore shows nothing at all,
 * rather than a broken image that only disappears once the browser has tried
 * and failed to fetch it. Drop the file in and the logo appears.
 *
 * Loading is eager on purpose: a lazy image inside a hidden tile would never
 * enter the viewport, so it would never load and the tile would never appear.
 */
function PartnerLogo({
  partner,
}: {
  partner: { src: string; alt: string; title: string };
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <li
      hidden={!loaded}
      className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
      title={partner.title}
    >
      <img
        src={partner.src}
        alt={partner.alt}
        decoding="async"
        className="max-h-14 max-w-full object-contain"
        onLoad={(event) => setLoaded(event.currentTarget.naturalWidth > 0)}
        ref={(element) => {
          // A cached image can finish before React attaches onLoad.
          if (element?.complete && element.naturalWidth > 0) setLoaded(true);
        }}
      />
    </li>
  );
}

export default function PartnersStrip() {
  const { t } = useTranslation();
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
            <PartnerLogo key={partner.src} partner={partner} />
          ))}
        </ul>
      </div>
    </section>
  );
}
