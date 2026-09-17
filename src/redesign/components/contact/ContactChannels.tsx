import { Trans, useTranslation } from 'react-i18next';

export default function ContactChannels() {
  const { t } = useTranslation('contact');
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: E-Mail */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span className="text-xs font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
              {t('channels.email.eyebrow')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t('channels.email.title')}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {t('channels.email.text')}
            </p>
          </div>
          <a
            href="mailto:info@engagement-integration.de"
            className="font-bold text-sm text-brand-700 hover:text-brand-800 break-all"
          >
            info@engagement-integration.de
          </a>
        </div>

        {/* Card 2: Büros */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span className="text-xs font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
              {t('channels.locations.eyebrow')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t('channels.locations.title')}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {t('channels.locations.text')}
            </p>
          </div>
          <div className="text-xs text-slate-700 space-y-1">
            <div>
              <Trans i18nKey="channels.locations.castrop" ns="contact" />
            </div>
            <div>
              <Trans i18nKey="channels.locations.dortmund" ns="contact" />
            </div>
            <div>
              <Trans i18nKey="channels.locations.berlin" ns="contact" />
            </div>
          </div>
        </div>

        {/* Card 3: Telefon & WhatsApp */}
        <div className="p-8 rounded-3xl bg-white border border-stone-200/80 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-700 mb-6 group-hover:scale-105 transition-transform">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span className="text-xs font-bold text-limeAccent-600 uppercase tracking-wider block mb-1">
              {t('channels.phone.eyebrow')}
            </span>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t('channels.phone.title')}
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
              {t('channels.phone.text')}
            </p>
          </div>
          <a
            href="tel:+491773218743"
            className="font-bold text-base text-brand-700 hover:text-brand-800"
          >
            (+49) 0 177 3218743
          </a>
        </div>
      </div>
    </section>
  );
}
