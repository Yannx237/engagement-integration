import { Trans, useTranslation } from 'react-i18next';
import PageMeta from '../../i18n/PageMeta';
import { LocalizedLink } from '../../i18n/LocalizedLink';

export default function RedesignNotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-sand-50 px-4 sm:px-6 lg:px-8 py-20">
      <PageMeta routeId="notFound" />
      <div className="max-w-2xl w-full text-center space-y-8 bg-white p-8 sm:p-14 rounded-3xl border border-stone-200/80 shadow-xl relative overflow-hidden">
        
        {/* Background subtle badge */}
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-limeAccent-100/40 pointer-events-none blur-2xl"></div>
        <div className="absolute -bottom-12 -left-12 w-44 h-44 rounded-full bg-brand-50 pointer-events-none blur-2xl"></div>

        {/* 404 Big Code Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-900 text-xs sm:text-sm font-bold uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-brand-600 animate-ping"></span>
          {t('notFound.badge')}
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl sm:text-7xl font-extrabold text-brand-950 tracking-tight">
            {t('notFound.oops')}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
            {t('notFound.heading')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            {t('notFound.text')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <LocalizedLink
            routeId="home"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span>{t('notFound.backHome')}</span>
          </LocalizedLink>

          <LocalizedLink
            routeId="projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-brand-900 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors"
          >
            <span>{t('notFound.projects')}</span>
          </LocalizedLink>

          <LocalizedLink
            routeId="contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-700 hover:text-slate-900 hover:bg-stone-100 border border-stone-200 transition-colors"
          >
            <span>{t('notFound.contact')}</span>
          </LocalizedLink>
        </div>

        {/* Direct Contact help note */}
        <div className="pt-6 border-t border-stone-100 text-xs text-slate-500">
          <Trans
            i18nKey="notFound.help"
            components={{
              mail: (
                <a
                  href="mailto:info@engagement-integration.de"
                  className="text-brand-700 font-bold hover:underline"
                />
              ),
            }}
          />
        </div>

      </div>
    </div>
  );
}
