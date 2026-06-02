import type { ReactNode } from 'react'
import { BottomNav } from '../BottomNav/BottomNav'
import { Footer } from '../Footer/Footer'
import { HashScrollHandler } from './HashScrollHandler'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <HashScrollHandler />
      {children}
      <Footer />
      <BottomNav />
      <ThemeToggle />
    </>
  )
}
