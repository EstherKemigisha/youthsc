import { SITE_NAV_LINKS, type SiteNavLink } from './siteNav'

export type FooterLink = SiteNavLink

export const FOOTER_CONTENT = {
  brand: 'Youth Satisfied in Christ',
  shortName: 'YSC',
  tagline: 'Influencing and changing the culture for Jesus.',
  navLinks: SITE_NAV_LINKS satisfies FooterLink[],
  contact: {
    label: 'Chat with us',
  },
} as const
