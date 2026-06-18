import { Link } from 'react-router-dom'
import { FOOTER_CONTENT } from '../../data/footerContent'
import { HERO_CONTENT } from '../../data/heroContent'
import { SocialIcon } from '../Hero/SocialIcon'
import './Footer.css'

function isInternalRoute(href: string) {
  return href.startsWith('/') && !href.startsWith('//')
}

export function Footer() {
  const { brand, shortName, tagline, navLinks, contact } = FOOTER_CONTENT
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__logo">{shortName}</p>
          <p className="site-footer__name">{brand}</p>
          <p className="site-footer__tagline">{tagline}</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <p className="site-footer__nav-title">Explore</p>
          <ul className="site-footer__nav-list">
            {navLinks.map((link) => (
              <li key={link.label}>
                {isInternalRoute(link.href) ? (
                  <Link to={link.href} className="site-footer__link">
                    {link.label}
                  </Link>
                ) : (
                  <a href={link.href} className="site-footer__link">
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-footer__connect">
          <p className="site-footer__nav-title">Connect</p>
          <ul className="site-footer__social">
            {HERO_CONTENT.socialLinks.map((link) => (
              <li key={link.platform}>
                <a
                  href={link.href}
                  className="site-footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <SocialIcon platform={link.platform} className="site-footer__social-icon" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={HERO_CONTENT.whatsapp.href}
            className="site-footer__whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.label}
          </a>
        </div>
      </div>

      <div className="site-footer__bottom">
        <p className="site-footer__copy">
          © {year} {brand}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
