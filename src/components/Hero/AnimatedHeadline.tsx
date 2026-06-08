import type { HeadlineSequence } from '../../data/heroContent'
import { HeadlineLine } from './HeadlineLine'

type AnimatedHeadlineProps = {
  sequences: readonly HeadlineSequence[]
}

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
          <HeadlineLine key={line} line={line} />
        ))}
      </h1>
    </div>
  )
}
