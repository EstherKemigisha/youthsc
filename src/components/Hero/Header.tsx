import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import { WhatsAppButton } from './WhatsAppButton'

export function Header() {
  const { whatsapp, headerBrand, logo } = HERO_CONTENT

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
          <span className="site-header-brand">
            <span className="site-header-brand__title">{headerBrand.title}</span>
            <span className="site-header-brand__subtitle">{headerBrand.subtitle}</span>
          </span>
        </Link>

        <div className="header__actions">
          <ThemeToggle variant="hero" />
          <WhatsAppButton href={whatsapp.href} label={whatsapp.label} />
        </div>
      </div>
      <span className="site-header-bar__accent" aria-hidden="true" />
    </header>
  )
}
