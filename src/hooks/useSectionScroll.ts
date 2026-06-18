import { useEffect, useRef } from 'react'

type UseSectionScrollOptions = {
  cssVar?: string
}

export function useSectionScroll({ cssVar = '--section-scroll' }: UseSectionScrollOptions = {}) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    let frame = 0

    const updateScroll = () => {
      const rect = section.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)))
      section.style.setProperty(cssVar, progress.toFixed(4))
    }

    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(updateScroll)
    }

    updateScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [cssVar])

  return sectionRef
}
