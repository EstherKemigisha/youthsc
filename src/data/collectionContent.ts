export type CollectionProduct = {
  id: string
  name: string
  tagline: string
  price: string
  compareAtPrice?: string
  onSale?: boolean
  description: string
  image: string
  reviewCount?: number
}

export const COLLECTION_CONTENT = {
  brandLine: 'Youth Satisfied in Christ',
  heroSeason: 'YSC Essentials',
  heroYear: '2026',
  title: 'Youth Collection',
  intro:
    'More than apparel — it’s purpose. Every item supports Youth Satisfied in Christ as we gather, disciple, and raise a generation grounded in faith to live boldly for Jesus.',
  fulfillment: {
    title: 'Pickup & delivery',
    options: [
      'Pick up at our next YSC gathering (free)',
      'Local delivery within our city (small fee)',
      'Ship nationwide — we will confirm shipping on your order',
    ],
  },
  products: [
    {
      id: 'jersey-series',
      name: 'The Jersey Series',
      tagline: 'Real Madrid · Barça · Man City & more',
      price: '$32',
      compareAtPrice: '$40',
      onSale: true,
      description:
        'Fan jerseys like the ones on our Friday night stage — unisex sizes S–XXL.',
      image: '/events/collection-tees.png',
      reviewCount: 28,
    },
    {
      id: 'performance-wear',
      name: 'Urban Performance Wear',
      tagline: 'Built for the stage',
      price: '$28',
      description:
        'Lightweight tops made for worship nights, dance, and hangout energy.',
      image: '/events/collection-hoodies.png',
      reviewCount: 22,
    },
    {
      id: 'street-cargos',
      name: 'Street-Ready Cargos',
      tagline: 'Utility pockets · all-night comfort',
      price: '$42',
      description:
        'Black cargo pants with a relaxed fit — move freely from stage to street.',
      image: '/events/collection-wristbands.png',
      reviewCount: 19,
    },
    {
      id: 'gameday-graphics',
      name: 'Gameday Graphics',
      tagline: 'Bold tees · statement fits',
      price: '$24',
      compareAtPrice: '$30',
      onSale: true,
      description:
        'Graphic tees with circular logos and color pops — perfect for hangout nights.',
      image: '/events/collection-devotionals.png',
      reviewCount: 16,
    },
    {
      id: 'fan-collection',
      name: 'The Fan Collection',
      tagline: 'Ethiopia · Uganda · club kits',
      price: '$34',
      description:
        'National and club-inspired jerseys seen on our YSC stage — rep your squad.',
      image: '/events/collection-bibles.png',
      reviewCount: 21,
    },
    {
      id: 'patterned-denim',
      name: 'Patterned Street Denim',
      tagline: 'Cloud-wash · light blue',
      price: '$38',
      description:
        'Bleached and patterned denim with streetwear character — pairs with any jersey.',
      image: '/events/collection-books.png',
      reviewCount: 14,
    },
    {
      id: 'championship-style',
      name: 'Championship Style',
      tagline: 'Caps · sneakers · finish the fit',
      price: '$26',
      description:
        'Snapbacks, fitted caps, and court-ready sneakers to complete the look.',
      image: '/events/collection-hoodies.png',
      reviewCount: 17,
    },
  ] satisfies CollectionProduct[],
  orderNote:
    'Submit your order below — we will confirm availability, total, and delivery or pickup details by WhatsApp or email.',
} as const
