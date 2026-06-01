import { HERO_CONTENT } from '../../data/heroContent'
import { SiteMenu } from './SiteMenu'
import { WhatsAppButton } from './WhatsAppButton'

const LOGO_LETTERS = ['Y', 'S', 'C'] as const

export function Header() {
  const { whatsapp } = HERO_CONTENT

  return (
    <header className="header">
      <a href="#" className="logo" aria-label="YSC Home">
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
      </a>
      <div className="header__actions">
        <WhatsAppButton href={whatsapp.href} label={whatsapp.label} />
        <SiteMenu />
      </div>
    </header>
  )
}
