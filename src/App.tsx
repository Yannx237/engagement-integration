import { useEffect } from 'react';
import type { ReactElement } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import Mentions from './pages/Mentions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RedesignHome from './redesign/RedesignHome';
import RedesignAboutUs from './redesign/pages/RedesignAboutUs';
import RedesignProjects from './redesign/pages/RedesignProjects';
import RedesignNews from './redesign/pages/RedesignNews';
import RedesignInternational from './redesign/pages/RedesignInternational';
import RedesignContact from './redesign/pages/RedesignContact';
import RedesignNotFound from './redesign/pages/RedesignNotFound';
import LocaleLayout from './i18n/LocaleLayout';
import { DEFAULT_LOCALE, LOCALES, LOCALE_STORAGE_KEY, isLocale } from './i18n/config';
import type { Locale } from './i18n/config';
import { LEGACY_REDIRECTS, routePaths } from './i18n/routes';
import type { RouteId } from './i18n/routes';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // A timer rather than requestAnimationFrame: rAF is not serviced while the
    // document is not being painted, which would leave the anchor unhandled.
    const id = hash.slice(1);
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches;
    let timeout: ReturnType<typeof setTimeout>;
    let attempts = 0;
    function findAndScroll() {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto' });
        return;
      }
      if (attempts++ < 20) timeout = setTimeout(findAndScroll, 50);
    }
    timeout = setTimeout(findAndScroll, 0);
    return () => clearTimeout(timeout);
  }, [pathname, hash]);
  return null;
}

/** Bare "/" carries no language, so pick one and get out of the way. */
function RootRedirect() {
  let stored: string | null = null;
  try {
    stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  } catch {
    // Private mode or blocked storage: fall through to the browser languages.
  }
  const languages = navigator.languages ?? [navigator.language];
  const prefersEnglish =
    languages.some((tag) => tag.toLowerCase().startsWith('en')) &&
    !languages.some((tag) => tag.toLowerCase().startsWith('de'));
  const locale: Locale = isLocale(stored ?? undefined)
    ? (stored as Locale)
    : prefersEnglish
      ? 'en'
      : DEFAULT_LOCALE;
  return <Navigate to={`/${locale}`} replace />;
}

/**
 * An address that was indexed before the locale prefix existed. The query
 * string and the anchor are carried over: /contact?thema=spende#spenden is a
 * live link, and dropping either half would break the donation entry point.
 */
function LegacyRedirect({ to }: { to: string }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}

/** Anything else — /fr/kontakt, /blabla — still deserves a laid-out 404. */
function UnknownPath() {
  return <Navigate to={`/${DEFAULT_LOCALE}/404`} replace />;
}

const PAGES: { id: Exclude<RouteId, 'home'>; element: ReactElement }[] = [
  { id: 'about', element: <RedesignAboutUs /> },
  { id: 'projects', element: <RedesignProjects /> },
  { id: 'international', element: <RedesignInternational /> },
  { id: 'news', element: <RedesignNews /> },
  { id: 'contact', element: <RedesignContact /> },
  { id: 'imprint', element: <Mentions /> },
  { id: 'privacy', element: <PrivacyPolicy /> },
  { id: 'notFound', element: <RedesignNotFound /> },
];

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootRedirect />} />

        {LOCALES.map((locale) => (
          <Route
            key={locale}
            path={locale}
            element={<LocaleLayout locale={locale} />}
          >
            <Route index element={<RedesignHome />} />
            {PAGES.map((page) => (
              <Route
                key={page.id}
                path={routePaths[page.id][locale]}
                element={page.element}
              />
            ))}
            <Route path="*" element={<RedesignNotFound />} />
          </Route>
        ))}

        {Object.entries(LEGACY_REDIRECTS).map(([from, to]) => (
          <Route key={from} path={from} element={<LegacyRedirect to={to} />} />
        ))}

        <Route path="*" element={<UnknownPath />} />
      </Routes>
    </BrowserRouter>
  );
}
