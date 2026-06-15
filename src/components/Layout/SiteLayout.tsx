import type { ReactNode } from 'react'
import { Footer } from '../Footer/Footer'
import { HashScrollHandler } from './HashScrollHandler'

type SiteLayoutProps = {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <HashScrollHandler />
      {children}
      <Footer />
    </>
  )
}
