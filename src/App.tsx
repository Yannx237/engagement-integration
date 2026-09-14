import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Mentions from './pages/Mentions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RedesignLayout from './redesign/RedesignLayout';
import RedesignHome from './redesign/RedesignHome';
import RedesignAboutUs from './redesign/pages/RedesignAboutUs';
import RedesignProjects from './redesign/pages/RedesignProjects';
import RedesignNews from './redesign/pages/RedesignNews';
import RedesignContact from './redesign/pages/RedesignContact';
import RedesignNotFound from './redesign/pages/RedesignNotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
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
