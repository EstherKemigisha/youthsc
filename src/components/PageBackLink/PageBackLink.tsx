import { Link } from 'react-router-dom'
import './PageBackLink.css'

type PageBackLinkProps = {
  to?: string
  label?: string
  tone?: 'default' | 'on-dark'
}

export function PageBackLink({
  to = '/#home',
  label = '← Back home',
  tone = 'default',
}: PageBackLinkProps) {
  return (
    <Link
      to={to}
      className={`page-back-link${tone === 'on-dark' ? ' page-back-link--on-dark' : ''}`}
    >
      {label}
    </Link>
  )
}
