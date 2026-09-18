import { useTranslation } from 'react-i18next';

export default function AboutPartners() {
  const { t } = useTranslation('about');
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
          {t('partners.badge')}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          {t('partners.heading')}
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          {t('partners.intro')}
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
        {[
          {
            src: '/assets/images/logo-kreis-recklinghausen.png',
            alt: 'Kreis Recklinghausen',
          },
          {
            src: '/assets/images/logo-kim-nrw.png',
            alt: 'KIM — Kommunales Integrationsmanagement NRW',
          },
          { src: '/assets/images/image-10.png', alt: 'KOMM-AN NRW' },
          {
            src: '/assets/images/image-4.png',
            alt: 'Kommunales Integrationszentrum Kreis Recklinghausen',
          },
          {
            src: '/assets/images/image-5.png',
            alt: 'Ministerium für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration des Landes Nordrhein-Westfalen',
          },
          { src: '/assets/images/image-6.png', alt: 'Stiftung Bildung' },
          { src: '/assets/images/image-7.png', alt: 'MENSCHEN STÄRKEN MENSCHEN' },
          {
            src: '/assets/images/image-8.png',
            alt: 'Bundesministerium für Familie, Senioren, Frauen und Jugend',
          },
          {
            src: '/assets/images/logo-bmz.jpg',
            alt: 'Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung',
          },
          {
            src: '/assets/images/logo-engagement-global.jpg',
            alt: 'Engagement Global',
          },
          {
            src: '/assets/images/logo-deutsch-afrikanisches-jugendwerk.jpg',
            alt: 'Deutsch-Afrikanisches Jugendwerk',
          },
          {
            src: '/assets/images/logo-bezirksamt-steglitz-zehlendorf.jpg',
            alt: 'Bezirksamt Steglitz-Zehlendorf, Berlin',
          },
        ].map((partner) => (
          <div
            key={partner.src}
            className="w-full h-24 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-center justify-center hover:border-brand-500 transition-colors"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="max-h-14 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
