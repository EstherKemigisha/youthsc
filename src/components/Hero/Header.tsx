import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { useTheme } from '../../context/ThemeContext'
import { useScrollHeader } from '../../hooks/useScrollHeader'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { SiteMenu } from './SiteMenu'
import './SiteMenu.css'

const HERO_LOGO = '/ysc-logo-transparent.png'
const HERO_LOGO_LIGHT = '/ysc-logo-hero-light.png'

export function Header() {
  const scrolled = useScrollHeader()
  const { theme } = useTheme()
  const { headerBrand } = HERO_CONTENT
  const logoSrc = theme === 'light' ? HERO_LOGO_LIGHT : HERO_LOGO

  return (
    <header
      className={`header site-header-bar${scrolled ? ' header--scrolled' : ''}`}
    >
      <div className="site-header-bar__inner header__inner">
        <div className="header__start">
          <div className="header__menu" aria-hidden={!scrolled}>
            <SiteMenu variant="icon" />
          </div>

          <Link
            to="/#home"
            className={`logo site-header-logo header__logo${
              theme === 'light' ? ' header__logo--light' : ''
            }`}
            aria-label="YSC Home"
          >
            <img
              className="logo__img site-logo-img"
              src={logoSrc}
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
        </div>

        <p className="header__center-brand">
          <span className="header__center-brand-title">{headerBrand.title}</span>
          <span className="header__center-brand-subtitle">{headerBrand.subtitle}</span>
        </p>

        <div className="header__actions">
          <ThemeToggle variant="hero" />
        </div>
      </div>
    </header>
  )
}
