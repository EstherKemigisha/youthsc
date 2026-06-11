import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'

export function Header() {
  const { headerBrand, logo } = HERO_CONTENT

  return (
    <header className="header site-header-bar">
      <div className="site-header-bar__inner header__inner">
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
          <ThemeToggle variant="hero" />
        </div>
      </div>
      <span className="site-header-bar__accent" aria-hidden="true" />
    </header>
  )
}
