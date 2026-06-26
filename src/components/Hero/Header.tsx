import { Link } from 'react-router-dom'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { SiteMenu } from './SiteMenu'

const HERO_LOGO = '/ysc-logo-transparent.png'

export function Header() {
  return (
    <header className="hero-header">
      <Link to="/#home" className="hero-header__logo" aria-label="YSC Home">
        <img
          className="hero-header__logo-img"
          src={HERO_LOGO}
          alt=""
          width={120}
          height={120}
          decoding="async"
        />
      </Link>

      <div className="hero-header__actions">
        <ThemeToggle variant="hero" className="hero-header__toggle" />
        <SiteMenu variant="icon" />
      </div>
    </header>
  )
}
