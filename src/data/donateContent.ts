export type DonationOption = {
  id: string
  title: string
  amountLabel: string
  description: string
  suggestedAmount?: string
  image: string
}

export const DONATE_CONTENT = {
  eyebrow: 'Youth Satisfied in Christ',
  titleLine1: 'Expand the impact.',
  titleLine2: 'Change a future.',
  intro:
    'Your generosity helps us reach more young people with the gospel, discipleship, and a culture-changing community rooted in Christ.',
  waysTitle: 'Four ways to give',
  waysSubtitle: 'Choose where your gift makes the greatest difference.',
  purpose: {
    title: 'Why we give',
    points: [
      'Weekly gatherings, worship, and Bible teaching for youth',
      'Outreach events, hangouts, and mentorship for new believers',
      'Resources — Bibles, devotionals, and materials for leaders',
      'Scholarships and support so no young person is left out',
    ],
  },
  whatToGive: {
    title: 'What you can give',
    items: [
      'One-time or monthly financial gifts',
      'Sponsorship of an event or outreach',
      'In-kind gifts (sound gear, snacks, transport, venue support)',
      'Prayer and volunteering your time and skills',
    ],
  },
  options: [
    {
      id: 'general',
      title: 'General fund',
      amountLabel: 'Any amount',
      description: 'Supports everything YSC does — gatherings, outreach, and discipleship.',
      suggestedAmount: 'From $10',
      image: '/events/donate-general.png',
    },
    {
      id: 'events',
      title: 'Events & outreach',
      amountLabel: 'Event partner',
      description: 'Helps fund hangouts, camps, and community outreaches.',
      suggestedAmount: 'From $25',
      image: '/events/donate-events.png',
    },
    {
      id: 'resources',
      title: 'Bibles & resources',
      amountLabel: 'Resource pack',
      description: 'Provides Bibles, devotionals, and study materials for youth.',
      suggestedAmount: 'From $15',
      image: '/events/bible-study.png',
    },
    {
      id: 'scholarship',
      title: 'Youth scholarship',
      amountLabel: 'Sponsor a young person',
      description: 'Covers fees, transport, or gear so someone can fully participate.',
      suggestedAmount: 'From $50',
      image: '/events/donate-scholarship.png',
    },
  ] satisfies DonationOption[],
  ctaNote:
    'Complete the form below and our team will contact you with payment details (mobile money or in-person).',
} as const
