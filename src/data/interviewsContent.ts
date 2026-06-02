export type InterviewItem = {
  id: string
  video: string
  title: string
  cta: string
}

export const INTERVIEWS_CONTENT = {
  watermark: 'INTERVIEWS',
  eyebrow: 'Real stories',
  title: 'Voices from YSC',
  description:
    'Hear from young people living sold out for Jesus — real moments, real faith, real change.',
  pullQuote: 'Every testimony is proof that God is still writing stories in this generation.',
  sectionIntro:
    'Their words say what numbers never could — press play and hear what God is doing in young lives.',
  resourcesTitle: 'Stay rooted in what God is doing',
  backgroundImage: '/interviews/bg.png',
  interviews: [
    {
      id: '1',
      video: '/interviews/interview-1.mp4',
      title: 'Kingdom impact in the city',
      cta: "Watch this student's story",
    },
    {
      id: '2',
      video: '/interviews/interview-2.mp4',
      title: 'Worship that moves hearts',
      cta: 'See what God is doing',
    },
    {
      id: '3',
      video: '/interviews/interview-3.mp4',
      title: 'Community on fire',
      cta: 'Hear their testimony',
    },
  ] satisfies InterviewItem[],
} as const
