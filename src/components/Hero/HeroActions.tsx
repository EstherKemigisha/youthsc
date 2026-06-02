import { useLocation, useNavigate } from 'react-router-dom'
import type { CtaLink } from '../../data/heroContent'
import { scrollToSection } from '../../utils/scrollToSection'

type HeroActionsProps = {
  ctas: readonly CtaLink[]
}

export function HeroActions({ ctas }: HeroActionsProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const goToJoin = () => {
    navigate('/join')
  }

  const goToEvents = () => {
    if (pathname !== '/') {
      navigate('/#events')
      return
    }
    scrollToSection('#events')
    window.history.replaceState(null, '', '/#events')
  }

  const handleCta = (cta: CtaLink) => {
    if (cta.href === '/join' || cta.href.startsWith('/join')) {
      goToJoin()
      return
    }
    if (cta.href.includes('events')) {
      goToEvents()
    }
  }

  return (
    <nav className="hero__actions" aria-label="Call to action">
      {ctas.map((cta) => (
        <button
          key={cta.label}
          type="button"
          className={
            cta.variant === 'cream'
              ? 'cta-btn cta-btn--cream'
              : 'cta-btn cta-btn--outline'
          }
          onClick={() => handleCta(cta)}
        >
          {cta.label}
        </button>
      ))}
    </nav>
  )
}
