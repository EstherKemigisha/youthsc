import type { SocialLink } from '../../data/heroContent'
import { SocialIcon } from './SocialIcon'

type SocialLinksProps = {
  links: readonly SocialLink[]
  followLabel?: string
}

export function SocialLinks({ links, followLabel }: SocialLinksProps) {
  return (
    <nav className="hero__social" aria-label="Social media">
      <div className="hero__social-row">
        <ul className="hero__social-list">
          {links.map((link) => (
            <li key={link.platform}>
              <a
                className="hero__social-link hero__circle-btn"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <SocialIcon platform={link.platform} className="hero__social-icon" />
              </a>
            </li>
          ))}
        </ul>
        {followLabel ? (
          <span className="hero__social-follow">{followLabel}</span>
        ) : null}
      </div>
    </nav>
  )
}
