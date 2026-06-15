import { useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { SITE_NAV_LINKS } from '../../data/siteNav'
import { MenuNavIcon } from './MenuNavIcon'
import './SiteMenu.css'

type SiteMenuProps = {
  variant?: 'text' | 'icon'
}

export function SiteMenu({ variant = 'text' }: SiteMenuProps) {
  const [open, setOpen] = useState(false)
  const panelId = useId()
  const rootRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const overlay = (
    <div
      className={`site-menu__overlay${open ? ' site-menu__overlay--open' : ''}`}
      aria-hidden={!open}
      inert={!open}
    >
      <button
        type="button"
        className="site-menu__backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={close}
      />

      <div
        id={panelId}
        className="site-menu__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
      >
        <div className="site-menu__panel-head">
          <p className="site-menu__eyebrow">Navigate</p>
          <button
            ref={closeButtonRef}
            type="button"
            className="site-menu__close"
            aria-label="Close menu"
            onClick={close}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <nav className="site-menu__nav" aria-label="Site sections">
          <ul className="site-menu__list">
            {SITE_NAV_LINKS.map((link, index) => (
              <li
                key={link.href}
                className="site-menu__item"
                style={{ '--menu-i': index } as CSSProperties}
              >
                <Link
                  to={link.href}
                  className="site-menu__link"
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  <MenuNavIcon name={link.icon} />
                  <span className="site-menu__label">{link.label}</span>
                  <span className="site-menu__arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )

  return (
    <div className="site-menu" ref={rootRef}>
      <button
        type="button"
        className={`site-menu__trigger${
          variant === 'icon' ? ' site-menu__trigger--icon' : ''
        }${open ? ' site-menu__trigger--open' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((value) => !value)}
      >
        {variant === 'icon' ? (
          <span className="site-menu__bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        ) : (
          <>
            MENU{' '}
            <span className="site-menu__mark" aria-hidden="true">
              {open ? '−' : '+'}
            </span>
          </>
        )}
      </button>

      {createPortal(overlay, document.body)}
    </div>
  )
}
