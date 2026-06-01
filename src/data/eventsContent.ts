export type EventItem = {
  id: string
  slug: string
  title: string
  date: string
  time: string
  location: string
  description: string
  image: string
  imageAlt: string
}

export const EVENTS_CONTENT = {
  eyebrow: 'What’s next',
  title: 'Upcoming Events',
  registerCta: 'Register for an event',
  events: [
    {
      id: 'friday-hangout',
      slug: 'friday-night-hangout',
      title: 'Friday Night Hangout',
      date: 'Jun 6, 2026',
      time: '7:00 PM',
      location: 'YSC Main Hall',
      description:
        'Games, worship, and good vibes. Bring a friend and come as you are.',
      image: '/events/friday-hangout.png',
      imageAlt: 'Young people worshipping together at a hangout',
    },
    {
      id: 'bible-study',
      slug: 'bible-study-prayer',
      title: 'Bible Study & Prayer',
      date: 'Jun 11, 2026',
      time: '6:30 PM',
      location: 'Room 204',
      description:
        'Dive into the Word together and pray over what God is doing in our city.',
      image: '/events/bible-study.png',
      imageAlt: 'Open Bibles and notes during a study session',
    },
    {
      id: 'city-outreach',
      slug: 'city-outreach',
      title: 'City Outreach',
      date: 'Jun 21, 2026',
      time: '10:00 AM',
      location: 'Downtown',
      description:
        'Serve, share hope, and show Jesus to our community in practical ways.',
      image: '/events/city-outreach.png',
      imageAlt: 'Two friends embracing in fellowship',
    },
  ] satisfies EventItem[],
} as const

export function getEventBySlug(slug: string | undefined): EventItem | undefined {
  if (!slug) return undefined
  return EVENTS_CONTENT.events.find((event) => event.slug === slug)
}
