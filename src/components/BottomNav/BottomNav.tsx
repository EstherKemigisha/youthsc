import { useCallback, useEffect, useRef, useState, type MouseEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { SITE_BOTTOM_NAV_LINKS } from '../../data/siteNav'
import { scrollHomeAfterRoute } from '../Layout/HashScrollHandler'
import { parseNavHref, scrollToSection } from '../../utils/scrollToSection'
import { BottomNavIcon } from './BottomNavIcon'
import './BottomNav.css'

function isBottomNavActive(href: string, pathname: string, hash: string) {
  const { path, hash: targetHash } = parseNavHref(href)
  if (targetHash) {
    return pathname === path && hash === targetHash
  }
  return pathname === path
}

export function BottomNav() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const updateScrollHints = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return

    const maxScroll = el.scrollWidth - el.clientWidth
    setCanScrollLeft(el.scrollLeft > 4)
    setCanScrollRight(maxScroll > 4 && el.scrollLeft < maxScroll - 4)
  }, [])

  const scrollBar = (direction: 'left' | 'right') => {
    const el = scrollerRef.current
    if (!el) return
    const amount = Math.max(el.clientWidth * 0.55, 120)
    el.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    updateScrollHints()

    const observer = new ResizeObserver(updateScrollHints)
    observer.observe(el)

    return () => observer.disconnect()
  }, [updateScrollHints])

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault()
    const { path, hash: targetHash } = parseNavHref(href)

    if (path !== '/') {
      if (pathname !== path) {
        navigate(path)
      }
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (pathname !== path) {
      navigate(targetHash ? { pathname: path, hash: targetHash } : path)
      if (!targetHash) scrollHomeAfterRoute()
      return
    }

    if (targetHash) {
      if (hash !== targetHash) {
        navigate({ pathname: path, hash: targetHash })
      }
      scrollToSection(targetHash)
      return
    }

    navigate(path, { replace: true })
    scrollToSection('')
  }

  return (
    <nav className="bottom-nav" aria-label="Primary navigation">
      <div className="bottom-nav__scroll-wrap">
        <button
          type="button"
          className={`bottom-nav__arrow-btn bottom-nav__arrow-btn--left${canScrollLeft ? ' bottom-nav__arrow-btn--visible' : ''}`}
          aria-label="Scroll navigation left"
          onClick={() => scrollBar('left')}
        >
          <span className="bottom-nav__arrow" aria-hidden="true">
            ‹
          </span>
        </button>

        <div
          ref={scrollerRef}
          className="bottom-nav__scroller"
          onScroll={updateScrollHints}
        >
          <ul className="bottom-nav__list">
            {SITE_BOTTOM_NAV_LINKS.map((item) => {
              const active = isBottomNavActive(item.href, pathname, hash)

              return (
                <li key={item.href} className="bottom-nav__item">
                  <Link
                    to={item.href}
                    className={`bottom-nav__link${active ? ' bottom-nav__link--active' : ''}`}
                    aria-current={active ? 'page' : undefined}
                    onClick={(event) => handleNavClick(event, item.href)}
                  >
                    <BottomNavIcon name={item.icon} />
                    <span className="bottom-nav__label">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <button
          type="button"
          className={`bottom-nav__arrow-btn bottom-nav__arrow-btn--right${canScrollRight ? ' bottom-nav__arrow-btn--visible' : ''}`}
          aria-label="Scroll navigation right"
          onClick={() => scrollBar('right')}
        >
          <span className="bottom-nav__arrow" aria-hidden="true">
            ›
          </span>
        </button>
      </div>
    </nav>
  )
}
