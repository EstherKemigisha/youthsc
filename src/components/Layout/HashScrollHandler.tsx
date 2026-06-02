import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../../utils/scrollToSection'

/** Scrolls to hash targets after route changes (e.g. bottom bar from /register). */
export function HashScrollHandler() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname !== '/' || !hash) return

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => scrollToSection(hash))
    })

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])

  return null
}

/** After navigating home without a hash (e.g. bottom bar HOME from /register). */
export function scrollHomeAfterRoute() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => scrollToSection(''))
  })
}
