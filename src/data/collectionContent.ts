export type CollectionProduct = {
  id: string
  name: string
  tagline: string
  price: string
  compareAtPrice?: string
  onSale?: boolean
  description: string
  image: string
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
    },
    {
      id: 'gameday-graphics',
      name: 'Love Like Jesus Tee',
      tagline: 'Heart graphic · orange & black',
      price: '$24',
      compareAtPrice: '$30',
      onSale: true,
      description:
        'Bold back graphic with “Love Like Jesus” — rep faith on and off the pitch.',
      image: '/events/collection-love-like-jesus.png',
    },
    {
      id: 'street-cargos',
      name: 'Youth Satisfied Tee',
      tagline: 'Classic black · white wordmark',
      price: '$42',
      description:
        'The signature YSC tee — clean, confident, and made for everyday wear.',
      image: '/events/collection-ysc-tee.png',
    },
    {
      id: 'performance-wear',
      name: 'Jesus Must Be Seen Tee',
      tagline: 'Black & red · bold front graphic',
      price: '$28',
      description:
        'Statement tees that put faith front and center — unisex fits in black and red.',
      image: '/events/collection-jesus-must-be-seen.png',
    },
    {
      id: 'patterned-denim',
      name: 'Patterned Street Denim',
      tagline: 'Cloud-wash · light blue',
      price: '$38',
      description:
        'Bleached and patterned denim with streetwear character — pairs with any jersey.',
      image: '/events/collection-patterned-denim.png',
    },
    {
      id: 'championship-style',
      name: 'Championship Style',
      tagline: 'Caps · sneakers · finish the fit',
      price: '$26',
      description:
        'Snapbacks, fitted caps, and court-ready sneakers to complete the look.',
      image: '/events/collection-hoodies.png',
    },
  ] satisfies CollectionProduct[],
  orderNote:
    'Submit your order below — we will confirm availability, total, and delivery or pickup details by WhatsApp or email.',
} as const
