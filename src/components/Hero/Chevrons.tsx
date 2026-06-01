type LineSegment = {
  x1: number
  y1: number
  x2: number
  y2: number
}

const CHEVRON_OFFSETS = [0, 4, 8, 12] as const

function getSegments(offset: number): LineSegment[] {
  const edge = 100 - offset
  const mid = 58 - offset

  return [
    { x1: edge, y1: 1, x2: mid, y2: 38 },
    { x1: mid, y1: 38, x2: mid, y2: 62 },
    { x1: mid, y1: 62, x2: edge, y2: 99 },
  ]
}

function segmentKey(seg: LineSegment) {
  return `${seg.x1}-${seg.y1}-${seg.x2}-${seg.y2}`
}

function ChevronGroup() {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {CHEVRON_OFFSETS.flatMap((offset) =>
        getSegments(offset).map((seg) => (
          <line
            key={`${offset}-${segmentKey(seg)}`}
            x1={seg.x1}
            y1={seg.y1}
            x2={seg.x2}
            y2={seg.y2}
            className="chevrons__line"
          />
        )),
      )}
    </svg>
  )
}

export function Chevrons() {
  return (
    <div className="chevrons" aria-hidden="true">
      <ChevronGroup />
      <ChevronGroup />
    </div>
  )
}
