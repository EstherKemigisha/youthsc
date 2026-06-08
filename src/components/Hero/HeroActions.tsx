import { useLocation, useNavigate } from 'react-router-dom'
import type { CtaLink } from '../../data/heroContent'
import { scrollToSection } from '../../utils/scrollToSection'

type HeroActionsProps = {
  ctas: readonly CtaLink[]
}

function CalendarIcon() {
  return (
    <svg
      className="cta-btn__icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M8 3v4M16 3v4M3 10h18"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg
      className="cta-btn__arrow"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
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
      {ctas.map((cta) => {
        const isEvents = cta.href.includes('events')

        return (
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
            {isEvents ? <CalendarIcon /> : null}
            <span>{cta.label}</span>
            <ArrowIcon />
          </button>
        )
      })}
    </nav>
  )
}
