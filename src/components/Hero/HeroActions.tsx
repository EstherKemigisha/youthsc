import { useLocation, useNavigate } from 'react-router-dom'
import type { CtaLink } from '../../data/heroContent'
import { scrollToSection } from '../../utils/scrollToSection'

type HeroActionsProps = {
  primaryCta: CtaLink
  desktopCtas: readonly CtaLink[]
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

export function HeroActions({ primaryCta, desktopCtas }: HeroActionsProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const goTo = (href: string) => {
    if (href === '/join' || href.startsWith('/join')) {
      navigate('/join')
      return
    }

    if (href === '/donate' || href.startsWith('/donate')) {
      navigate('/donate')
      return
    }

    if (href.includes('#')) {
      const [, hash] = href.split('#')

      if (pathname !== '/') {
        navigate(href)
        return
      }

      if (hash) {
        scrollToSection(`#${hash}`)
        window.history.replaceState(null, '', `/#${hash}`)
      }
    }
  }

  return (
    <nav className="hero__actions" aria-label="Call to action">
      <div className="hero__actions-mobile">
        <button
          type="button"
          className="cta-btn cta-btn--join-primary"
          onClick={() => goTo(primaryCta.href)}
        >
          <span>{primaryCta.label}</span>
          <ArrowIcon />
        </button>
      </div>

      <div className="hero__actions-desktop">
        {desktopCtas.map((cta) => {
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
              onClick={() => goTo(cta.href)}
            >
              {isEvents ? (
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
              ) : null}
              <span>{cta.label}</span>
              <ArrowIcon />
            </button>
          )
        })}
      </div>
    </nav>
  )
}
