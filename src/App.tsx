import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Mentions from './pages/Mentions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RedesignLayout from './redesign/RedesignLayout';
import RedesignHome from './redesign/RedesignHome';
import RedesignAboutUs from './redesign/pages/RedesignAboutUs';
import RedesignProjects from './redesign/pages/RedesignProjects';
import RedesignNews from './redesign/pages/RedesignNews';
import RedesignInternational from './redesign/pages/RedesignInternational';
import RedesignContact from './redesign/pages/RedesignContact';
import RedesignNotFound from './redesign/pages/RedesignNotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    // A cross-page anchor can land before the target has mounted, so retry for
    // a few frames until it exists instead of giving up on the first miss.
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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RedesignLayout />}>
          <Route index element={<RedesignHome />} />
          <Route path="about-us" element={<RedesignAboutUs />} />
          <Route path="services-for-immigrants" element={<RedesignProjects />} />
          <Route path="projekte" element={<RedesignProjects />} />
          <Route path="international" element={<RedesignInternational />} />
          <Route path="news" element={<RedesignNews />} />
          <Route path="neuigkeiten" element={<RedesignNews />} />
          <Route path="contact" element={<RedesignContact />} />
          <Route path="kontakt" element={<RedesignContact />} />
          <Route path="mentions" element={<Mentions />} />
          <Route path="impressum" element={<Mentions />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="datenschutz" element={<PrivacyPolicy />} />
          <Route path="redesign" element={<RedesignHome />} />
          <Route path="404" element={<RedesignNotFound />} />
          {/* Catch-all route to 404 page */}
          <Route path="*" element={<RedesignNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
