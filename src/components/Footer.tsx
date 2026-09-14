import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-primary-20 body-font text-white">
      <div className="max-w-7xl px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap justify-between flex-wrap flex-col">
        <div className="__className_2308b8 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link to="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Logo className="h-32 w-32" />
          </Link>
          <p className="my-8 text-white text-base font-light">
            Vereint für Integration,<br />
            geführt von Vielfalt.
          </p>
          <nav className="md:ml-auto md:mr-auto flex flex-col lg:flex-row gap-y-2 md:gap-y-0 items-center text-base justify-center">
            <Link to="/" className="mr-5 text-white font-light hover:text-gray-300 cursor-pointer">
              Home
            </Link>
            <Link to="/about-us" className="mr-5 text-white font-light hover:text-gray-300 cursor-pointer">
              Über uns
            </Link>
            <Link to="/services-for-immigrants" className="mr-5 text-white font-light hover:text-gray-300 cursor-pointer">
              Unsere Projekte
            </Link>
            <Link to="/news" className="mr-5 text-white font-light hover:text-gray-300 cursor-pointer">
              Neuigkeiten
            </Link>
            <Link to="/contact" className="mr-5 text-white font-light hover:text-gray-300 cursor-pointer">
              Kontakt
            </Link>
          </nav>
        </div>
        <div className="__className_2308b8 md:w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <p className="my-8 text-white text-base font-light">
            Geben Sie Ihre E-Mail-Adresse ein, um unseren Newsletter zu abonnieren und über die neuesten Nachrichten informiert zu bleiben.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Vielen Dank für Ihre Anmeldung zum Newsletter!');
            }}
            className="flex items-center gap-x-4"
          >
            <input
              type="email"
              id="footer-email"
              placeholder="Email"
              required
              className="w-full bg-opacity-50 rounded-md border border-gray-300 focus:border-primary-20 focus:bg-white focus:ring-2 focus:ring-primary-10 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              name="email"
            />
            <button
              type="submit"
              className="inline-flex font-medium items-center hover:bg-primary-70 bg-primary-10 text-white border-0 py-2 px-5 focus:outline-none rounded-md text-base mt-0 transition-colors"
            >
              Schicken
            </button>
          </form>
        </div>
      </div>
      <div className="bg-primary-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto py-4 px-5 flex flex-wrap justify-between flex-col sm:flex-row">
          <p className="text-primary-text-50 text-sm text-center sm:text-left">
            © 2024 .<span className="text-primary-text-50 ml-1">Alle Rechte vorbehalten.</span>
          </p>
          <p className="text-primary-text-50 text-sm text-center sm:text-left">
            Copyright 2024 © All Rights Reserved
          </p>
          <p className="text-primary-text-50 text-sm text-center sm:text-left">
            <Link to="/mentions" className="hover:underline">Impressum</Link> |{' '}
            <Link to="/privacy-policy" className="hover:underline">Datenschutzerklärung</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
