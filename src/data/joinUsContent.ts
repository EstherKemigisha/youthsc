export const JOIN_US_CONTENT = {
  eyebrow: 'Welcome to YSC',
  title: 'Join the community',
  subtitle:
    'Tell us about yourself so we can welcome you into the community.',
  submitLabel: 'Join the Community',
  ageRanges: ['13–17', '18–24', '25–30', '30+'] as const,
  interests: [
    'Spiritual Growth',
    'Christian Community',
    'Bible Study',
    'Mentorship',
    'Prayer Support',
    'Events & Fellowship',
    "I'm Exploring Faith",
  ] as const,
  placeholders: {
    fullName: 'Enter your full name',
    email: 'example@gmail.com',
    phone: 'Include country code if outside Uganda',
    location: 'Kampala, Uganda',
    message:
      "Tell us a little about yourself or why you'd like to join YSC.",
  },
  fieldHints: {
    phone: 'Useful for updates and connection.',
    location: 'Helpful for meetups and events.',
  },
} as const
