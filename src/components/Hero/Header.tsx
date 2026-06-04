import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { WhatsAppButton } from './WhatsAppButton'

const LOGO_LETTERS = ['Y', 'S', 'C'] as const

export function Header() {
  const { whatsapp, headerBrand } = HERO_CONTENT

  return (
    <header className="header">
      <Link to="/#home" className="logo" aria-label="YSC Home">
        <span className="logo__mark" aria-hidden="true">
          {LOGO_LETTERS.map((letter) => (
            <span
              key={letter}
              className={
                letter === 'Y' ? 'logo__letter logo__letter--cream' : 'logo__letter'
              }
            >
              {letter}
            </span>
          ))}
        </span>
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
