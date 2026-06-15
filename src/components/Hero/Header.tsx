import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { HERO_CONTENT } from '../../data/heroContent'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { SiteMenu } from './SiteMenu'

const HERO_LOGO_DARK = '/ysc-logo-hero.png'
const HERO_LOGO_LIGHT = '/ysc-logo-hero-light.png'

export function Header() {
  const { theme } = useTheme()
  const { headerBrand, logo } = HERO_CONTENT
  const heroLogoSrc = theme === 'light' ? HERO_LOGO_LIGHT : HERO_LOGO_DARK

  return (
    <header className="header site-header-bar">
      <div className="site-header-bar__inner header__inner">
        <Link to="/#home" className="header__wordmark" aria-label="YSC Home">
          <img
            className="header__wordmark-logo"
            src={heroLogoSrc}
            alt={logo.alt}
            width={280}
            height={96}
            decoding="async"
          />
        </Link>

        <Link to="/#home" className="logo site-header-logo" aria-label="YSC Home">
          <img
            className="logo__img site-logo-img"
            src={logo.src}
            alt=""
            width={144}
            height={144}
            decoding="async"
          />
          <span className="site-header-brand site-header-brand--beside-logo">
            <span className="site-header-brand__title">{headerBrand.title}</span>
            <span className="site-header-brand__subtitle">{headerBrand.subtitle}</span>
          </span>
        </Link>

        <p className="header__center-brand">
          <span className="header__center-brand-title">{headerBrand.title}</span>
          <span className="header__center-brand-subtitle">{headerBrand.subtitle}</span>
        </p>

        <div className="header__actions">
          <SiteMenu />
          <ThemeToggle variant="hero" />
        </div>
      </div>
      <span className="site-header-bar__accent" aria-hidden="true" />
    </header>
  )
}
