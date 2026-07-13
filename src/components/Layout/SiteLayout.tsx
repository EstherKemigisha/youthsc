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
      <div className="site-shell">{children}</div>
      <Footer />
    </>
  )
}
