import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { WhatsAppButton } from './WhatsAppButton'

export function Header() {
  const { whatsapp, headerBrand, logo } = HERO_CONTENT

  return (
    <header className="header">
      <Link to="/#home" className="logo" aria-label="YSC Home">
        <img
          className="logo__img"
          src={logo.src}
          alt=""
          width={48}
          height={48}
          decoding="async"
        />
        <span className="logo__brand">
          <span className="logo__brand-title">{headerBrand.title}</span>
          <span className="logo__brand-subtitle">{headerBrand.subtitle}</span>
        </span>
      </Link>
      <p className="header__center-brand">
        <span className="header__center-brand-title">{headerBrand.title}</span>
        <span className="header__center-brand-subtitle">{headerBrand.subtitle}</span>
      </p>

      <div className="header__actions">
        <WhatsAppButton href={whatsapp.href} label={whatsapp.label} />
      </div>
    </header>
  )
}
