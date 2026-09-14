import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

interface ShopProduct {
  id: string;
  name: string;
  badge: string;
  image: string;
  price: string;
  subtitle: string;
  waText: string;
}

const shopProducts: ShopProduct[] = [
  {
    id: 'tshirt',
    name: 'EFI Charity T-Shirt',
    badge: 'Bio-Baumwolle',
    image: '/assets/images/tshirt-2.png',
    price: '25,00 €',
    subtitle: 'Fair produziert mit gesticktem EFI-Logo',
    waText: 'Hallo EFI-Team, ich möchte gerne das EFI Charity T-Shirt bestellen (25,00 €).',
  },
  {
    id: 'snapback',
    name: 'EFI Basecap Snapback',
    badge: 'Verstellbar',
    image: '/assets/images/charity.png',
    price: '28,00 €',
    subtitle: 'Hochwertiger 3D-Stick auf der Front',
    waText: 'Hallo EFI-Team, ich möchte gerne die EFI Basecap Snapback bestellen (28,00 €).',
  },
  {
    id: 'tasche',
    name: 'Robuste Canvas-Tasche',
    badge: 'Canvas 340g',
    image: '/assets/images/bac-2.png',
    price: '30,00 €',
    subtitle: 'Langlebige Tragetasche für Unterricht & Alltag',
    waText: 'Hallo EFI-Team, ich möchte gerne die robuste Canvas-Tasche bestellen (30,00 €).',
  },
  {
    id: 'kugelschreiber',
    name: 'EFI Kugelschreiber',
    badge: 'Recycelt',
    image: '/assets/images/stylo.png',
    price: '8,00 €',
    subtitle: 'Ergonomisch & nachfüllbar mit blauer Mine',
    waText: 'Hallo EFI-Team, ich möchte gerne den EFI Kugelschreiber bestellen (8,00 €).',
  },
];

export default function HomeShop() {
  const { containerRef: shopContainerRef, scroll: scrollShop } = useHorizontalScroll(320);

  return (
    <section className="py-24 bg-sand-100 border-t border-stone-200 scroll-mt-28" data-purpose="solidarity-merchandise" id="shop">
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
              Mit dem Erwerb unserer Vereins-Gadgets fließt jeder Reinerlös zu 100% direkt in Lernmaterialien für unsere kostenfreien Nachhilfekurse.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scrollShop('left')}
              aria-label="Vorheriges Produkt" 
              className="w-10 h-10 rounded-full border border-stone-300 bg-white hover:bg-stone-50 active:scale-95 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </button>
            <button 
              onClick={() => scrollShop('right')}
              aria-label="Nächstes Produkt" 
              className="w-10 h-10 rounded-full bg-brand-800 hover:bg-brand-900 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </button>
          </div>
        </div>

        <div ref={shopContainerRef} className="flex overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-4 gap-6 scrollbar-none pb-4 scroll-smooth">
          {shopProducts.map((product) => (
            <div 
              key={product.id}
              className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-auto snap-start bg-white rounded-2xl border border-stone-200/90 p-5 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative bg-sand-50 rounded-xl p-6 mb-4 flex items-center justify-center h-52 overflow-hidden">
                  <img 
                    alt={product.name} 
                    className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300" 
                    src={product.image}
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-white uppercase tracking-wider">
                    {product.badge}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 text-base">{product.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{product.subtitle}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
                <span className="text-lg font-extrabold text-brand-950">{product.price}</span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/491773218743?text=${encodeURIComponent(product.waText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Per WhatsApp anfragen / bestellen"
                    aria-label={`Per WhatsApp ${product.name} anfragen`}
                    className="p-2 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all shadow-sm hover:scale-105 active:scale-95"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                  <Link 
                    to={`/contact?thema=shop&artikel=${encodeURIComponent(product.name)}#kontaktformular`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-limeAccent-500 hover:bg-limeAccent-400 text-brand-950 text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    <span>Kaufen</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
