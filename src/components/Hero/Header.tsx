import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { WhatsAppButton } from './WhatsAppButton'

const LOGO_LETTERS = ['Y', 'S', 'C'] as const

export function Header() {
  const { whatsapp } = HERO_CONTENT

  return (
    <header className="header">
      <Link to="/#home" className="logo" aria-label="YSC Home">
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
      </Link>
      <div className="header__actions">
        <WhatsAppButton href={whatsapp.href} label={whatsapp.label} />
      </div>
    </header>
  )
}
