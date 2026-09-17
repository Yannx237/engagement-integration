import { useTranslation } from 'react-i18next';
import { LocalizedLink } from '../../../i18n/LocalizedLink';
import { formatPrice } from '../../../i18n/formatPrice';
import { useLocale } from '../../../i18n/useLocale';
import type { ShopProduct } from '../../data/shopProducts';

export default function ShopProductCard({ product }: { product: ShopProduct }) {
  const { t } = useTranslation('home');
  const locale = useLocale();
  const name = t(`shop.products.${product.id}.name`);
  const price = formatPrice(locale, product.priceCents);
  // The order message is assembled from one phrase and one formatted price, so
  // the amount exists in exactly one place.
  const orderMessage = t('shop.orderMessage', {
    product: t(`shop.products.${product.id}.orderPhrase`),
    price,
  });

  return (
    <div className="flex-shrink-0 w-[270px] sm:w-[290px] lg:w-auto snap-start bg-white rounded-2xl border border-stone-200/90 p-5 shadow-subtle hover:shadow-elevated transition-all flex flex-col justify-between group">
      <div>
        <div className="relative bg-sand-50 rounded-xl p-6 mb-4 flex items-center justify-center h-52 overflow-hidden">
          <img
            alt={name}
            className="max-h-44 object-contain group-hover:scale-105 transition-transform duration-300"
            src={product.image}
          />
          <span className="absolute top-3 left-3 px-2 py-0.5 rounded text-[10px] font-bold bg-brand-800 text-white uppercase tracking-wider">
            {t(`shop.products.${product.id}.badge`)}
          </span>
        </div>
        <h3 className="font-bold text-slate-900 text-base">{name}</h3>
        <p className="text-xs text-slate-500 mt-1">
          {t(`shop.products.${product.id}.subtitle`)}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-2">
        <span className="text-lg font-extrabold text-brand-950">{price}</span>
        <div className="flex items-center gap-1.5">
          <a
            href={`https://wa.me/491773218743?text=${encodeURIComponent(orderMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            title={t('shop.whatsappTitle')}
            aria-label={t('shop.whatsappAria', { product: name })}
            className="p-2 rounded-lg border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 transition-all shadow-sm hover:scale-105 active:scale-95"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </a>
          {/* The article travels as a stable id, not as a German product name,
              so an order placed from the English page still resolves. */}
          <LocalizedLink
            routeId="contact"
            query={`?thema=shop&artikel=${product.id}`}
            hash="#kontaktformular"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-limeAccent-500 hover:bg-limeAccent-400 text-brand-950 text-xs font-bold transition-all shadow-sm hover:shadow active:scale-95"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <span>{t('shop.buy')}</span>
          </LocalizedLink>
        </div>
      </div>
    </div>
  );
}
