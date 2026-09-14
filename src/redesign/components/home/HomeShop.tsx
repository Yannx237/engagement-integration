import ShopProductCard from './ShopProductCard';
import { shopProducts } from '../../data/shopProducts';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

export default function HomeShop() {
  const { containerRef: shopContainerRef, scroll: scrollShop } =
    useHorizontalScroll(320);

  return (
    <section
      className="py-24 bg-sand-100 border-t border-stone-200 scroll-mt-28"
      data-purpose="solidarity-merchandise"
      id="shop"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-2">
              Support-Gadgets &amp; Solidarität
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trage unsere Botschaft nach außen.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Mit dem Erwerb unserer Vereins-Gadgets fließt jeder Reinerlös zu
              100% direkt in Lernmaterialien für unsere kostenfreien
              Nachhilfekurse.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollShop('left')}
              aria-label="Vorheriges Produkt"
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 19l-7-7 7-7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
            <button
              onClick={() => scrollShop('right')}
              aria-label="Nächstes Produkt"
              className="w-10 h-10 rounded-full bg-brand-800 hover:bg-brand-900 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={shopContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 scrollbar-none pb-4 scroll-smooth"
        >
          {shopProducts.map((product) => (
            <ShopProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
