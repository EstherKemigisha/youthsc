export type CtaLink = {
  label: string
  href: string
  variant?: 'cream' | 'outline'
}

export type HeadlineSequence = {
  tagline: string
  titleLines: readonly string[]
}

export type VideoWordSegment = {
  label: string
  duration: number
}

export type SocialLink = {
  label: string
  href: string
  platform: 'instagram' | 'tiktok' | 'x' | 'facebook'
}

export const HERO_CONTENT = {
  whatsapp: {
    label: 'Chat on WhatsApp',
    href: 'https://wa.me/',
  },
  logo: {
    src: '/ysc-logo.png',
    alt: 'YSC — Youth Satisfied in Christ',
  },
  heroImage: {
    src: '/hero/hero-landing-mobile.jpg',
    alt: 'Two YSC youth smiling in team jerseys',
  },
  heroMobileImage: {
    src: '/hero/hero-landing-mobile.jpg',
    alt: 'Two YSC youth smiling in team jerseys',
  },
  headerBrand: {
    title: 'YOUTH SATISFIED',
    subtitle: 'IN CHRIST',
  },
  heroBadge: 'FAITH | COMMUNITY | PURPOSE',
  headlineSequences: [
    {
      tagline: 'FAITH · COMMUNITY · PURPOSE',
      titleLines: ['A GENERATION', 'SATISFIED', 'in Christ'],
    },
  ] satisfies HeadlineSequence[],
  heroDescription:
    'Young people\nInfluencing and changing the culture for Jesus 👌🏼 — on fire for God.',
  heroSubtitle: 'Young & on fire for Jesus',
  socialFollowLabel: 'FOLLOW US',
  socialLinks: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/youth_satisfied_in_christ/',
      platform: 'instagram',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@youthsatisfiedinchrist',
      platform: 'tiktok',
    },
    { label: 'X', href: 'https://x.com', platform: 'x' },
    { label: 'Facebook', href: 'https://facebook.com', platform: 'facebook' },
  ] satisfies SocialLink[],
  heroPrimaryCta: {
    label: 'JOIN US',
    href: '/join',
    variant: 'cream',
  },
  ctas: [
    { label: 'JOIN THE COMMUNITY', href: '/join', variant: 'cream' },
    { label: 'UPCOMING EVENTS', href: '/#events', variant: 'outline' },
  ] satisfies CtaLink[],
  backgroundVideo: '/ysc.mp4',
  mobileBackgroundVideo: '/ysc.mp4',
  videoWordSegments: [
    { label: 'events', duration: 9 },
    { label: 'fun', duration: 3 },
    { label: 'interviews', duration: 6 },
    { label: 'hangouts', duration: 4 },
    { label: 'Bible study', duration: 3 },
    { label: 'Worship', duration: 3 },
    { label: 'Interactions', duration: 3 },
    { label: 'outreaches', duration: 7 },
    { label: 'Enjoyment', duration: 999 },
  ] satisfies VideoWordSegment[],
} as const
