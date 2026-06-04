import type { HeadlineSequence } from '../../data/heroContent'

type AnimatedHeadlineProps = {
  sequences: readonly HeadlineSequence[]
}

function lineClassName(line: string) {
  if (line === 'THE') {
    return 'headline__line headline__line--the'
  }
  if (line === 'CULTURE') {
    return 'headline__line headline__line--gold headline__title-line--culture'
  }
  if (line === 'FOR JESUS') {
    return 'headline__line headline__line--title'
  }
  if (line === 'THE CULTURE') {
    return 'headline__line headline__title-line--culture'
  }
  return 'headline__line'
}

// Static display only — second sequence & transition loop commented out for now.
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
          <span key={line} className={lineClassName(line)}>
            {line}
            {(line === 'CULTURE' || line === 'THE CULTURE') && (
              <span className="headline__anchor-point" aria-hidden="true" />
            )}
          </span>
        ))}
      </h1>
    </div>
  )
}
