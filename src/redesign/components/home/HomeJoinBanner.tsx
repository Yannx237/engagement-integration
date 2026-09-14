export default function HomeJoinBanner() {
  return (
    <section
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mb-10 relative z-20"
      data-purpose="share-cta-banner"
    >
      <div className="rounded-3xl bg-gradient-to-r from-brand-800 via-brand-900 to-brand-950 p-8 sm:p-12 shadow-2xl border border-limeAccent-500/30 text-white flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center lg:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-limeAccent-400">
            Gemeinsam Großes bewegen
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold mt-1 tracking-tight text-white">
            Magst du unsere Organisation unterstützen?
          </h3>
          <p className="text-sm sm:text-base text-stone-300 mt-2">
            Hilf uns, bekannter zu werden! Teile unsere Angebote mit Freunden,
            Familien und Nachbarn oder engagiere dich selbst aktiv bei EFI e.V.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 flex-shrink-0">
          <button
            className="px-6 py-3.5 rounded-full text-sm font-bold bg-white text-brand-950 hover:bg-sand-100 transition-colors shadow-md flex items-center gap-2"
            onClick={() => {}}
          >
            <svg
              className="w-4 h-4 text-brand-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <span>Die Seite teilen</span>
          </button>
          <a
            className="px-6 py-3.5 rounded-full text-sm font-bold bg-limeAccent-500 text-brand-950 hover:bg-limeAccent-400 transition-colors shadow-glow"
            href="#kontakt"
          >
            Aktiv mitmachen
          </a>
        </div>
      </div>
    </section>
  );
}
