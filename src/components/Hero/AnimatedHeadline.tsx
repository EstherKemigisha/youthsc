import type { HeadlineSequence } from '../../data/heroContent'

type AnimatedHeadlineProps = {
  sequences: readonly HeadlineSequence[]
}

// Static display only — second sequence & transition loop commented out for now.
// To re-enable: restore useEffect loop in git history and uncomment sequence 2 in heroContent.ts
export function AnimatedHeadline({ sequences }: AnimatedHeadlineProps) {
  const current = sequences[0]
  const titleLabel = current.titleLines.join(' ')

  return (
    <div className="headline__animated">
      <p className="headline__sub headline__sub--visible" aria-label={current.tagline}>
        {current.tagline}
      </p>

      <h1
        className="headline__main headline__main--visible"
        aria-label={titleLabel}
      >
        {current.titleLines.map((line) => (
          <span
            key={line}
            className={line === 'THE CULTURE' ? 'headline__title-line--culture' : undefined}
          >
            {line}
            {line === 'THE CULTURE' && (
              <span className="headline__anchor-point" aria-hidden="true" />
            )}
          </span>
        ))}
      </h1>
    </div>
  )
}
