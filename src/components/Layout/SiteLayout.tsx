import type { ReactNode } from 'react'
import { Footer } from '../Footer/Footer'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      {children}
      <Footer />
      <ThemeToggle />
    </>
  )
}
