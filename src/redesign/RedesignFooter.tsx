import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../i18n/LocalizedLink';
import Logo from '../components/Logo';

export default function RedesignFooter() {
  const { t } = useTranslation();
  return (
    <footer className="bg-brand-deep text-white pt-20 pb-10 border-t border-brand-800" data-purpose="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">

          <div className="md:col-span-2 lg:col-span-5 space-y-5">
            <LocalizedLink routeId="home" className="flex items-center gap-3 w-fit focus:outline-none">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 border-2 border-limeAccent-500 shadow-md flex items-center justify-center flex-shrink-0">
                <Logo size={46} className="w-full h-full" />
              </div>
              <div>
                <span className="text-lg font-extrabold tracking-tight text-white block leading-none">{t('brand.short')}</span>
                <span className="text-[11px] text-limeAccent-400 font-semibold tracking-wider mt-1 block">{t('brand.full')}</span>
              </div>
            </LocalizedLink>
            <p className="text-stone-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t('footer.tagline')}
            </p>
            <div className="text-xs text-stone-400">
              {t('footer.legalNote')}
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-limeAccent-400">{t('footer.navHeading')}</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-stone-300">
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="home">{t('footer.links.home')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="about">{t('footer.links.about')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="projects">{t('footer.links.projects')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="international">{t('footer.links.international')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="news">{t('footer.links.news')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="contact">{t('footer.links.contact')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="contact" query="?thema=spende" hash="#spenden">{t('footer.links.donate')}</LocalizedLink></li>
              <li><LocalizedLink className="hover:text-white transition-colors" routeId="contact" query="?thema=mitglied" hash="#mitglied">{t('footer.links.becomeMember')}</LocalizedLink></li>
            </ul>
          </div>

          <div className="lg:col-span-4 min-w-0 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-limeAccent-400">{t('footer.locationsHeading')}</h4>
            <div className="text-xs sm:text-sm text-stone-300 space-y-3">
              <div>
                <strong className="text-white block font-bold">{t('footer.locations.castropLabel')}</strong>
                <span>{t('footer.locations.castropValue')}</span>
              </div>
              <div>
                <strong className="text-white block font-bold">{t('footer.locations.dortmundLabel')}</strong>
                <span>{t('footer.locations.dortmundValue')}</span>
              </div>
              <div>
                <strong className="text-white block font-bold">{t('footer.locations.berlinLabel')}</strong>
                <span>{t('footer.locations.berlinValue')}</span>
              </div>
              <div className="pt-2 flex flex-col gap-1.5">
                <a className="text-limeAccent-400 hover:underline inline-flex items-center gap-1.5 font-medium" href="https://wa.me/491773218743" target="_blank" rel="noopener noreferrer">
                  <span>{t('footer.whatsapp')}</span>
                </a>
                <a className="text-stone-300 hover:text-white transition-colors break-words" href="mailto:info@engagement-integration.de">
                  info@engagement-integration.de
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-center lg:text-left text-xs text-stone-400">
          <p>{t('footer.copyright')}</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <LocalizedLink className="hover:text-white transition-colors" routeId="imprint">{t('footer.imprint')}</LocalizedLink>
            <LocalizedLink className="hover:text-white transition-colors" routeId="privacy">{t('footer.privacy')}</LocalizedLink>
            <LocalizedLink className="hover:text-white transition-colors" routeId="about">{t('footer.transparency')}</LocalizedLink>
            <LocalizedLink className="hover:text-white transition-colors" routeId="contact">{t('footer.accessibility')}</LocalizedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
