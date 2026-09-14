import { useState } from 'react';

export default function ShareCTA() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = 'Engagement für Integration e.V. — Gemeinsam für gleichberechtigte Teilhabe';
    const text = 'Gemeinnützige Migrantenselbstorganisation in NRW für Bildung, Integration und gesellschaftlichen Zusammenhalt.';

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        // Fallback to clipboard if user dismissed or error
        if ((err as Error).name === 'AbortError') return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      alert('Link kopiert: ' + url);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 sm:my-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-brand-700/60">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-limeAccent-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-600/20 rounded-full blur-2xl pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-700/60 text-limeAccent-400 text-xs font-bold uppercase tracking-wider">
              Gemeinschaft &amp; Zusammenhalt
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
              Magst du unsere Organisation?
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Hilf uns, unsere Bildungs- und Integrationsangebote bekannt zu machen. Jeder geteilte Link schenkt einer weiteren Familie Perspektive und Unterstützung!
            </p>
          </div>

          <div className="flex-shrink-0">
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-bold text-brand-950 bg-limeAccent-500 hover:bg-limeAccent-400 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-limeAccent-400 focus:ring-offset-2 focus:ring-offset-brand-900"
            >
              {copied ? (
                <>
                  <svg className="w-5 h-5 text-brand-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Link kopiert!</span>
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 text-brand-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  <span>Diese Seite teilen</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
