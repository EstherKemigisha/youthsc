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
    src: '/ysc-logo.svg',
    alt: 'YSC — Youth Satisfied in Christ',
  },
  headerBrand: {
    title: 'YOUTH SATISFIED',
    subtitle: 'IN CHRIST',
  },
  heroBadge: '• WORSHIP • INFLUENCING • CHANGING',
  headlineSequences: [
    {
      tagline: 'WORSHIP · INFLUENCING · CHANGING',
      titleLines: ['THE', 'CULTURE', 'FOR JESUS'],
    },
  ] satisfies HeadlineSequence[],
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
  ctas: [
    { label: 'JOIN US →', href: '/join', variant: 'cream' },
    { label: 'UPCOMING EVENTS', href: '/#events', variant: 'outline' },
  ] satisfies CtaLink[],
  backgroundVideo: '/ysc.mp4',
  mobileBackgroundVideo: '/mobile.mp4',
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
