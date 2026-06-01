import type { CtaLink } from '../../data/heroContent'

type HeroActionsProps = {
  ctas: readonly CtaLink[]
}

export function HeroActions({ ctas }: HeroActionsProps) {
  return (
    <nav className="hero__actions" aria-label="Call to action">
      {ctas.map((cta) => (
        <a
          key={cta.label}
          href={cta.href}
          className={
            cta.variant === 'cream'
              ? 'cta-btn cta-btn--cream'
              : 'cta-btn cta-btn--outline'
          }
        >
          {cta.label}
        </a>
      ))}
    </nav>
  )
}
