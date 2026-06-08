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
      id: 'tees',
      name: 'The Culture Tee',
      tagline: 'Classic YSC tee',
      price: '$22',
      compareAtPrice: '$28',
      onSale: true,
      description: 'Soft cotton tees with the YSC logo — unisex sizes S–XXL.',
      image: '/events/collection-tees.png',
      reviewCount: 24,
    },
    {
      id: 'hoodies',
      name: 'Mission Hoodie',
      tagline: 'Stay warm, stay on mission',
      price: '$38',
      description: 'Cozy hoodies perfect for hangouts, events, and outreach nights.',
      image: '/events/collection-hoodies.png',
      reviewCount: 31,
    },
    {
      id: 'wristbands',
      name: 'Faith Wristband Pack',
      tagline: 'A daily reminder',
      price: '$6',
      description: 'Silicone bands with scripture and YSC branding — great for outreach.',
      image: '/events/collection-wristbands.png',
      reviewCount: 18,
    },
    {
      id: 'bibles',
      name: 'Study Bible',
      tagline: 'Word-centered',
      price: '$15',
      description: 'Study and gift Bibles for new believers and small groups.',
      image: '/events/collection-bibles.png',
      reviewCount: 12,
    },
    {
      id: 'devotionals',
      name: 'Daily Devotional',
      tagline: 'Grow daily',
      price: '$12',
      compareAtPrice: '$16',
      onSale: true,
      description: 'Curated devotionals to help youth build a daily habit with God.',
      image: '/events/collection-devotionals.png',
      reviewCount: 9,
    },
    {
      id: 'books',
      name: 'Christian Book Set',
      tagline: 'Go deeper',
      price: '$18',
      description: 'Faith-building books selected by our leaders for teens and young adults.',
      image: '/events/collection-books.png',
      reviewCount: 15,
    },
  ] satisfies CollectionProduct[],
  orderNote:
    'Submit your order below — we will confirm availability, total, and delivery or pickup details by WhatsApp or email.',
} as const
