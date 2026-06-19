import { Link } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { HERO_CONTENT } from '../../data/heroContent'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import './PageHeader.css'

const PAGE_LOGO_LIGHT = '/ysc-logo-hero-light.png'

type PageHeaderProps = {
  backTo?: string
  backAriaLabel?: string
}

export function PageHeader({
  backTo = '/#home',
  backAriaLabel = 'Back home',
}: PageHeaderProps) {
  const { theme } = useTheme()
  const { headerBrand, logo } = HERO_CONTENT
  const logoSrc = theme === 'light' ? PAGE_LOGO_LIGHT : logo.src

  return (
    <header className="page-header site-header-bar site-header-bar--page">
      <div className="site-header-bar__inner page-header__inner header__inner">
        <Link
          to="/#home"
          className={`page-header__logo site-header-logo${
            theme === 'light' ? ' page-header__logo--light' : ''
          }`}
          aria-label="YSC Home"
        >
          <img
            className="page-header__logo-img site-logo-img"
            src={logoSrc}
            alt=""
            width={144}
            height={144}
            decoding="async"
          />
        </Link>

        <p className="page-header__center-brand header__center-brand">
          <span className="header__center-brand-title">{headerBrand.title}</span>
          <span className="header__center-brand-subtitle">{headerBrand.subtitle}</span>
        </p>

        <div className="page-header__actions header__actions">
          <ThemeToggle variant="hero" />
          <Link
            to={backTo}
            className="page-header__back"
            aria-label={backAriaLabel}
          >
            ←
          </Link>
        </div>
      </div>
      <span className="site-header-bar__accent" aria-hidden="true" />
    </header>
  )
}
