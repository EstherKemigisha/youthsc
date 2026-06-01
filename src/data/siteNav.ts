export type SiteNavIcon = 'home' | 'about' | 'events' | 'stories' | 'register'

export type SiteNavLink = {
  label: string
  href: string
  icon: SiteNavIcon
}

/** Site navigation — header menu & footer */
export const SITE_NAV_LINKS = [
  { label: 'Home', href: '/', icon: 'home' },
  { label: 'About', href: '/#about', icon: 'about' },
  { label: 'Events', href: '/#events', icon: 'events' },
  { label: 'Stories', href: '/#interviews', icon: 'stories' },
  { label: 'Register', href: '/register', icon: 'register' },
] satisfies SiteNavLink[]

/** @deprecated use SITE_NAV_LINKS */
export const SITE_MENU_LINKS = SITE_NAV_LINKS
