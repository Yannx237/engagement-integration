import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LocalizedNavLink, LocalizedLink } from '../i18n/LocalizedLink';
import { LanguageToggle, LanguageSegmented } from '../i18n/LanguageToggle';
import Logo from '../components/Logo';

export default function RedesignHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  const desktopNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors py-2 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all whitespace-nowrap ${
      isActive
        ? 'text-brand-700 after:w-full font-bold'
        : 'text-slate-700 hover:text-brand-700 after:w-0'
    }`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block py-2 text-sm font-semibold border-b border-stone-100 transition-colors ${
      isActive
        ? 'text-brand-700 font-bold bg-brand-50/60 px-2.5 rounded-lg'
        : 'text-slate-700 hover:text-brand-700 px-1'
    }`;

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl bg-white/95 border-b border-stone-200/80 shadow-sm" data-purpose="site-header">

      {/* ========================================================================= */}
      {/* DESKTOP HEADER                                                            */}
      {/* The lg gutters are tighter than the xl ones to make room for the language */}
      {/* toggle; every xl: value is unchanged, so nothing moves above 1280px.      */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 xl:px-8 relative">
        <div className="flex items-center justify-between h-20">

          {/* Left Navigation Links: Home, Über uns, Unsere Projekte, International */}
          <nav aria-label={t('nav.ariaLeft')} className="flex-1 flex items-center justify-end gap-4 xl:gap-9 pr-4 xl:pr-12" data-purpose="primary-navigation-left">
            <LocalizedNavLink routeId="home" end className={desktopNavLinkClass}>
              {t('nav.home')}
            </LocalizedNavLink>
            <LocalizedNavLink routeId="about" className={desktopNavLinkClass}>
              {t('nav.about')}
            </LocalizedNavLink>
            <LocalizedNavLink routeId="projects" className={desktopNavLinkClass}>
              {t('nav.projects')}
            </LocalizedNavLink>
            <LocalizedNavLink routeId="international" className={desktopNavLinkClass}>
              {t('nav.international')}
            </LocalizedNavLink>
          </nav>

          {/* Center Logo Slot: Guaranteed space, large logo overflowing downward */}
          <div className="w-32 xl:w-44 flex-shrink-0 flex justify-center relative h-20">
            <LocalizedLink
              routeId="home"
              className="absolute top-2.5 z-50 group flex flex-col items-center cursor-pointer focus:outline-none"
              title={t('brand.homeTitle')}
            >
              <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-full p-1 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center border-4 border-white">
                <Logo size={120} className="w-full h-full" />
              </div>
            </LocalizedLink>
          </div>

          {/* Right Navigation Links & Buttons */}
          <div className="flex-1 flex items-center justify-between gap-4 xl:gap-10 pl-4 xl:pl-12" data-purpose="primary-navigation-right">
            <nav className="flex items-center gap-4 xl:gap-9">
              <LocalizedNavLink routeId="news" className={desktopNavLinkClass}>
                {t('nav.news')}
              </LocalizedNavLink>
              <LocalizedNavLink routeId="contact" className={desktopNavLinkClass}>
                {t('nav.contact')}
              </LocalizedNavLink>
            </nav>

            <div className="flex items-center gap-2 xl:gap-3 ml-auto">
              <LocalizedLink
                routeId="contact" query="?thema=spende" hash="#spenden"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs xl:text-sm font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              >
                {t('cta.donate')}
              </LocalizedLink>
              <LocalizedLink
                routeId="contact" query="?thema=mitglied" hash="#mitglied"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs xl:text-sm font-bold text-brand-900 hover:bg-stone-100 border border-stone-200 transition-colors whitespace-nowrap"
              >
                {t('cta.becomeMember')}
              </LocalizedLink>
              <LanguageToggle />
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE HEADER BAR (Strictly hidden on desktop: lg:hidden)                 */}
      {/* ========================================================================= */}
      <div className="lg:hidden flex items-center justify-between h-16 px-4 sm:px-6">

        {/* Brand Logo & Name */}
        <LocalizedLink routeId="home" className="flex items-center gap-2.5 focus:outline-none">
          <div className="w-10 h-10 rounded-full p-0.5 bg-white shadow-sm flex items-center justify-center border border-stone-200">
            <Logo size={36} className="w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-brand-950 text-base tracking-tight leading-none">{t('brand.short')}</span>
            <span className="text-[10px] font-medium text-stone-500 tracking-wider mt-0.5">{t('brand.full')}</span>
          </div>
        </LocalizedLink>

        {/* Mobile Right Controls: donate CTA, language and hamburger */}
        <div className="flex items-center gap-2">
          <LocalizedLink
            routeId="contact" query="?thema=spende" hash="#spenden"
            className="inline-flex items-center justify-center px-3.5 py-1.5 rounded-full text-xs font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-sm transition-colors"
          >
            {t('cta.donate')}
          </LocalizedLink>
          {/* In the bar and not only in the drawer: someone who cannot read the
              page will not go hunting through a hamburger menu to find out why. */}
          <LanguageToggle className="px-2" />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-stone-100 focus:outline-none transition-colors"
            aria-label={t('nav.toggle')}
            aria-expanded={isMobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown: Linked to real subpages */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-stone-200 px-5 pt-3 pb-6 space-y-2 shadow-xl">
          <LocalizedNavLink routeId="home" end onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>
            {t('nav.home')}
          </LocalizedNavLink>
          <LocalizedNavLink routeId="about" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>
            {t('nav.about')}
          </LocalizedNavLink>
          <LocalizedNavLink routeId="projects" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>
            {t('nav.projects')}
          </LocalizedNavLink>
          <LocalizedNavLink routeId="international" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>
            {t('nav.internationalLong')}
          </LocalizedNavLink>
          <LocalizedNavLink routeId="news" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>
            {t('nav.news')}
          </LocalizedNavLink>
          <LocalizedNavLink routeId="contact" onClick={() => setIsMobileMenuOpen(false)} className={mobileNavLinkClass}>
            {t('nav.contact')}
          </LocalizedNavLink>

          <div className="pt-3 flex flex-col gap-2.5">
            <LocalizedLink
              routeId="contact" query="?thema=spende" hash="#spenden"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-sm transition-colors"
            >
              {t('cta.donate')}
            </LocalizedLink>
            <LocalizedLink
              routeId="contact" query="?thema=mitglied" hash="#mitglied"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full text-xs font-bold text-brand-900 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
            >
              {t('cta.becomeMember')}
            </LocalizedLink>
          </div>

          <LanguageSegmented onNavigate={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}
