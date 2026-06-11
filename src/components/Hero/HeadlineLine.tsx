import { headlineLineClassName } from './headlineLineClass'

type HeadlineLineProps = {
  line: string
}

export function HeadlineLine({ line }: HeadlineLineProps) {
  if (line === 'in Christ') {
    return (
      <span className="headline__line headline__line--script">
        <span className="headline__script-wrap">
          <span className="headline__script-in">in</span>
          <span className="headline__script-christ">Christ</span>
        </span>
      </span>
    )
  }

  if (line === 'SATISFIED') {
    return (
      <span className={headlineLineClassName(line)}>Satisfied</span>
    )
  }

  return <span className={headlineLineClassName(line)}>{line}</span>
}
