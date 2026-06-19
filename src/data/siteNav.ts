export type SiteNavIcon =
  | 'home'
  | 'about'
  | 'events'
  | 'stories'
  | 'register'
  | 'donate'
  | 'collection'

export type BottomNavIcon =
  | 'home'
  | 'about'
  | 'events'
  | 'interviews'
  | 'donate'
  | 'collection'

export type SiteNavLink = {
  label: string
  href: string
  icon: SiteNavIcon
}

/** Site navigation — footer & slide menu */
export const SITE_NAV_LINKS = [
  { label: 'Home', href: '/#home', icon: 'home' },
  { label: 'About', href: '/#about', icon: 'about' },
  { label: 'Events', href: '/#events', icon: 'events' },
  { label: 'Stories', href: '/#interviews', icon: 'stories' },
  { label: 'Register', href: '/register', icon: 'register' },
  { label: 'Donate', href: '/donate', icon: 'donate' },
  { label: 'Youth Collection', href: '/youth-collection', icon: 'collection' },
] satisfies SiteNavLink[]

/** Bottom bar — scroll for more items */
export const SITE_BOTTOM_NAV_LINKS = [
  { label: 'HOME', href: '/#home', icon: 'home' },
  { label: 'ABOUT', href: '/#about', icon: 'about' },
  { label: 'EVENTS', href: '/#events', icon: 'events' },
  { label: 'DROPS', href: '/#interviews', icon: 'interviews' },
  { label: 'DONATE', href: '/donate', icon: 'donate' },
  { label: 'YOUTH', href: '/youth-collection', icon: 'collection' },
] as const satisfies ReadonlyArray<{
  label: string
  href: string
  icon: BottomNavIcon
}>

/** @deprecated use SITE_NAV_LINKS */
export const SITE_MENU_LINKS = SITE_NAV_LINKS
