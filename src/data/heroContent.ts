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
  headlineSequences: [
    {
      tagline: 'INFLUENCING AND CHANGING',
      titleLines: ['THE CULTURE', 'FOR JESUS'],
    },
    // Second sequence — commented out for now
    // {
    //   tagline: 'Young and on fire 🔥',
    //   titleLines: ['for Jesus'],
    // },
  ] satisfies HeadlineSequence[],
  footerTagline: 'Young and on fire 🔥 for Jesus',
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
    { label: 'Join Us', href: '#join', variant: 'cream' },
    { label: 'Upcoming Events', href: '#events', variant: 'outline' },
    { label: 'Get Involved', href: '#involved', variant: 'outline' },
  ] satisfies CtaLink[],
  backgroundVideo: '/ysc.mp4',
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
