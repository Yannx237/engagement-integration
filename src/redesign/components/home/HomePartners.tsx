export default function HomePartners() {
  return (
    <section
      className="py-20 bg-white scroll-mt-28"
      data-purpose="partners-and-sponsors"
      id="partner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
            Einige Partner &amp; Förderer
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Gemeinsam mit starken Partnern für nachhaltige Wirkung.
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Unsere Projekte und Initiativen werden gefördert, fachlich begleitet
            und unterstützt von vertrauensvollen Bundes-, Landes- und
            Kommunalinstitutionen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4 sm:gap-6 items-center">
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="Aktion Mensch – Förderer von Tandem statt Barriere"
          >
            <img
              src="/assets/images/aktion-mensch.svg"
              alt="Aktion Mensch"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="Kommunales Integrationsmanagement NRW (KIM)"
          >
            <img
              src="/assets/images/logo-kim-nrw.png"
              alt="Kommunales Integrationsmanagement NRW"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="Kommunales Integrationszentrum Kreis Recklinghausen"
          >
            <img
              src="/assets/images/image-4.png"
              alt="Kommunales Integrationszentrum Kreis Recklinghausen"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="Ministerium für Kinder, Jugend, Familie, Gleichstellung, Flucht und Integration NRW"
          >
            <img
              src="/assets/images/image-5.png"
              alt="Land NRW - MKJFGFI"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="KOMM-AN NRW"
          >
            <img
              src="/assets/images/image-10.png"
              alt="KOMM-AN NRW"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="Stiftung Bildung"
          >
            <img
              src="/assets/images/image-6.png"
              alt="Stiftung Bildung"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="MENSCHEN STÄRKEN MENSCHEN"
          >
            <img
              src="/assets/images/image-7.png"
              alt="MENSCHEN STÄRKEN MENSCHEN"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
          <div
            className="h-24 p-3 rounded-2xl border border-stone-200 bg-white flex items-center justify-center hover:border-brand-500/40 hover:shadow-md transition-all shadow-sm"
            title="Bundesministerium für Familie, Senioren, Frauen und Jugend"
          >
            <img
              src="/assets/images/image-8.png"
              alt="Bundesministerium für Familie, Senioren, Frauen und Jugend"
              className="max-h-14 max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
