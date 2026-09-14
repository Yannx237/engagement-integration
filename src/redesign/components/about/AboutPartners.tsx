export default function AboutPartners() {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
          Netzwerk &amp; Förderer
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Unsere Partner &amp; Unterstützer
        </h2>
        <p className="text-slate-600 text-sm mt-2">
          Zusammen mit starken Institutionen und Trägern setzen wir erfolgreiche
          Maßnahmen zur gesellschaftlichen Teilhabe um.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-items-center">
        {[
          {
            src: '/assets/images/logo-kreis-recklinghausen.png',
            alt: 'Kreis Recklinghausen',
          },
          {
            src: '/assets/images/logo-kim-nrw.png',
            alt: 'KIM — Kommunales Integrationsmanagement NRW',
          },
          { src: '/assets/images/image-10.png', alt: 'Partner Institution' },
          { src: '/assets/images/image-4.png', alt: 'Partner Organisation' },
          { src: '/assets/images/image-5.png', alt: 'Partner Netzwerk' },
          { src: '/assets/images/image-6.png', alt: 'Partner Träger' },
          { src: '/assets/images/image-7.png', alt: 'Kooperationspartner' },
          { src: '/assets/images/image-8.png', alt: 'Unterstützer' },
        ].map((partner, i) => (
          <div
            key={i}
            className="w-full h-24 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-center justify-center hover:border-brand-500 transition-colors"
          >
            <img
              src={partner.src}
              alt={partner.alt}
              className="max-h-14 max-w-[80%] object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              loading="eager"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
