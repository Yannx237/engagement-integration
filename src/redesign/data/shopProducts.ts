export type ShopProductId = 'tshirt' | 'snapback' | 'tasche' | 'kugelschreiber';

/**
 * The price used to be a formatted German string, repeated inside the WhatsApp
 * message. It is now a single number, formatted per locale at render time.
 * Text lives in home.json under shop.products.<id>.
 */
export interface ShopProduct {
  id: ShopProductId;
  image: string;
  priceCents: number;
}

export const shopProducts: readonly ShopProduct[] = [
  { id: 'tshirt', image: '/assets/images/tshirt-2.png', priceCents: 2500 },
  { id: 'snapback', image: '/assets/images/charity.png', priceCents: 2800 },
  { id: 'tasche', image: '/assets/images/bac-2.png', priceCents: 3000 },
  { id: 'kugelschreiber', image: '/assets/images/stylo.png', priceCents: 800 },
];
