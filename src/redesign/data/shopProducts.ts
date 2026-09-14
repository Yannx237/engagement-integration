export interface ShopProduct {
  id: string;
  name: string;
  badge: string;
  image: string;
  price: string;
  subtitle: string;
  waText: string;
}

export const shopProducts: readonly ShopProduct[] = [
  {
    id: 'tshirt',
    name: 'EFI Charity T-Shirt',
    badge: 'Bio-Baumwolle',
    image: '/assets/images/tshirt-2.png',
    price: '25,00 €',
    subtitle: 'Fair produziert mit gesticktem EFI-Logo',
    waText:
      'Hallo EFI-Team, ich möchte gerne das EFI Charity T-Shirt bestellen (25,00 €).',
  },
  {
    id: 'snapback',
    name: 'EFI Basecap Snapback',
    badge: 'Verstellbar',
    image: '/assets/images/charity.png',
    price: '28,00 €',
    subtitle: 'Hochwertiger 3D-Stick auf der Front',
    waText:
      'Hallo EFI-Team, ich möchte gerne die EFI Basecap Snapback bestellen (28,00 €).',
  },
  {
    id: 'tasche',
    name: 'Robuste Canvas-Tasche',
    badge: 'Canvas 340g',
    image: '/assets/images/bac-2.png',
    price: '30,00 €',
    subtitle: 'Langlebige Tragetasche für Unterricht & Alltag',
    waText:
      'Hallo EFI-Team, ich möchte gerne die robuste Canvas-Tasche bestellen (30,00 €).',
  },
  {
    id: 'kugelschreiber',
    name: 'EFI Kugelschreiber',
    badge: 'Recycelt',
    image: '/assets/images/stylo.png',
    price: '8,00 €',
    subtitle: 'Ergonomisch & nachfüllbar mit blauer Mine',
    waText:
      'Hallo EFI-Team, ich möchte gerne den EFI Kugelschreiber bestellen (8,00 €).',
  },
];
