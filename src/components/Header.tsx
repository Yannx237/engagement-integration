import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/95 body-font fixed top-0 w-full z-50 shadow-sm">
      <div className="relative container mx-auto hidden lg:flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Centered Logo - tightly sized so it does NOT overlay navigation links */}
        <Link
          to="/"
          className="absolute -bottom-24 mx-auto left-0 right-0 w-[158px] h-[158px] grid place-items-center title-font font-medium items-center mb-4 md:mb-0 z-30 cursor-pointer"
        >
          <Logo className="w-[158px] h-[158px]" />
        </Link>

        {/* 12-column Navigation Bar */}
        <nav className="hidden max-w-5xl container mx-auto lg:grid grid-cols-12 relative z-40">
          <div className="col-span-6 flex justify-center items-center">
            <Link
              to="/"
              className={`mr-5 hover:text-gray-900 transition-colors cursor-pointer text-base ${
                isActive('/') ? 'text-gray-900 font-semibold' : 'text-primary-text-0 font-normal'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              className={`mr-5 hover:text-gray-900 transition-colors cursor-pointer text-base ${
                isActive('/about-us') ? 'text-gray-900 font-semibold' : 'text-primary-text-0 font-normal'
              }`}
            >
              Über uns
            </Link>
            <Link
              to="/services-for-immigrants"
              className={`mr-5 hover:text-gray-900 transition-colors cursor-pointer text-base ${
                isActive('/services-for-immigrants') ? 'text-gray-900 font-semibold' : 'text-primary-text-0 font-normal'
              }`}
            >
              Unsere Projekte
            </Link>
          </div>
          <div className="col-span-6 flex justify-center items-center">
            <Link
              to="/news"
              className={`mr-5 hover:text-gray-900 transition-colors cursor-pointer text-base ${
                isActive('/news') ? 'text-gray-900 font-semibold' : 'text-primary-text-0 font-normal'
              }`}
            >
              Neuigkeiten
            </Link>
            <Link
              to="/contact"
              className={`mr-5 hover:text-gray-900 transition-colors cursor-pointer text-base ${
                isActive('/contact') ? 'text-gray-900 font-semibold' : 'text-primary-text-0 font-normal'
              }`}
            >
              Kontakt
            </Link>
          </div>
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-row gap-2 absolute right-1 2xl:right-10 z-40">
          <Link
            to="/contact"
            className="lg:right-0 inline-flex font-medium items-center bg-primary-20 hover:bg-primary-70 text-white border-0 py-2 px-2 xl:px-5 focus:outline-none rounded-md text-xs xl:text-base mt-4 md:mt-0 transition-colors cursor-pointer"
          >
            Spenden
          </Link>
          <Link
            to="/contact"
            className="lg:right-0 inline-flex font-medium items-center bg-primary-10 hover:bg-primary-70 text-white border-0 py-2 px-2 xl:px-5 focus:outline-none rounded-md text-xs xl:text-base mt-4 md:mt-0 transition-colors cursor-pointer"
          >
            Mitglied werden
          </Link>
        </div>
      </div>

      {/* Mobile Header Bar */}
      <div className="lg:hidden w-full h-full flex justify-between items-center p-3 px-6">
        <Link to="/" className="flex items-center">
          <Logo className="w-11 h-11" />
        </Link>
        <button
          type="button"
          onClick={() => setIsNavOpen(!isNavOpen)}
          className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isNavOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isNavOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-xl">
          <ul className="flex flex-col space-y-4 font-medium uppercase text-sm">
            <li>
              <Link
                to="/"
                onClick={() => setIsNavOpen(false)}
                className={`block py-1 ${isActive('/') ? 'text-primary-20 font-bold' : 'text-gray-700'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about-us"
                onClick={() => setIsNavOpen(false)}
                className={`block py-1 ${isActive('/about-us') ? 'text-primary-20 font-bold' : 'text-gray-700'}`}
              >
                Über uns
              </Link>
            </li>
            <li>
              <Link
                to="/services-for-immigrants"
                onClick={() => setIsNavOpen(false)}
                className={`block py-1 ${isActive('/services-for-immigrants') ? 'text-primary-20 font-bold' : 'text-gray-700'}`}
              >
                Unsere Projekte
              </Link>
            </li>
            <li>
              <Link
                to="/news"
                onClick={() => setIsNavOpen(false)}
                className={`block py-1 ${isActive('/news') ? 'text-primary-20 font-bold' : 'text-gray-700'}`}
              >
                Neuigkeiten
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsNavOpen(false)}
                className={`block py-1 ${isActive('/contact') ? 'text-primary-20 font-bold' : 'text-gray-700'}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={() => setIsNavOpen(false)}
              className="w-full text-center py-2 text-white bg-primary-20 rounded-md font-medium text-sm"
            >
              Spenden
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsNavOpen(false)}
              className="w-full text-center py-2 text-white bg-primary-10 rounded-md font-medium text-sm"
            >
              Mitglied werden
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
