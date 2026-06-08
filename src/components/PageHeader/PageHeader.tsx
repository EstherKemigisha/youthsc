import { Link } from 'react-router-dom'
import { HERO_CONTENT } from '../../data/heroContent'
import { ThemeToggle } from '../ThemeToggle/ThemeToggle'
import './PageHeader.css'

type PageHeaderProps = {
  backTo?: string
  backLabel?: string
  tone?: 'default' | 'on-dark'
}

export function PageHeader({
  backTo = '/#home',
  backLabel = '← Back home',
  tone = 'default',
}: PageHeaderProps) {
  const { logo } = HERO_CONTENT

  return (
    <header
      className={`page-header site-header-bar${
        tone === 'on-dark' ? ' site-header-bar--on-dark' : ''
      }`}
    >
      <div className="site-header-bar__inner">
        <Link to="/#home" className="page-header__logo" aria-label="YSC Home">
          <img
            className="page-header__logo-img site-logo-img"
            src={logo.src}
            alt=""
            width={144}
            height={144}
            decoding="async"
          />
        </Link>

        <div className="page-header__actions">
          <ThemeToggle variant={tone === 'on-dark' ? 'hero' : 'default'} />
          <Link
            to={backTo}
            className={`page-header__back${
              tone === 'on-dark' ? ' page-header__back--on-dark' : ''
            }`}
          >
            {backLabel}
          </Link>
        </div>
      </div>
      <span className="site-header-bar__accent" aria-hidden="true" />
    </header>
  )
}
