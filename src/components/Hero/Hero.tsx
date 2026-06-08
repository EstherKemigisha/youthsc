import { HERO_CONTENT } from '../../data/heroContent'
import { AnimatedHeadline } from './AnimatedHeadline'
import { HeroActions } from './HeroActions'
import { Header } from './Header'
import { HeroBackground } from './HeroBackground'
import { HeadlineLine } from './HeadlineLine'
import { SocialLinks } from './SocialLinks'
import { VideoSyncedWords } from './VideoSyncedWords'
import './Hero.css'

export function Hero() {
  const {
    headlineSequences,
    heroBadge,
    heroDescription,
    heroSubtitle,
    socialFollowLabel,
    socialLinks,
    ctas,
    videoWordSegments,
  } = HERO_CONTENT

  const mobileHeadline = headlineSequences[0]

  return (
    <section id="home" className="hero" aria-label="Hero">
      <HeroBackground />
      <div className="hero__overlay" role="presentation" />

      <Header />

      <div className="hero__mobile-ui">
        <div className="hero__copy-stack">
          <p className="hero__badge">{heroBadge}</p>

          <div className="headline headline--mobile">
            <h1
              className="headline__mobile-title"
              aria-label={mobileHeadline.titleLines.join(' ')}
            >
              {mobileHeadline.titleLines.map((line) => (
                <HeadlineLine key={line} line={line} />
              ))}
            </h1>
          </div>

          <div className="headline headline--desktop">
            <AnimatedHeadline sequences={headlineSequences} />
          </div>

          <p className="hero__description">{heroDescription}</p>

          <div className="video-words-panel hero__video-words hero__video-words--desktop">
            <VideoSyncedWords segments={videoWordSegments} />
          </div>
        </div>

        <aside className="hero__cta-panel">
          <HeroActions
            ctas={ctas.filter((cta) => cta.label.toLowerCase() !== 'get involved')}
          />
        </aside>

        <div className="hero__footer">
          <p className="hero__footer-tagline">{heroSubtitle}</p>
          <SocialLinks links={socialLinks} followLabel={socialFollowLabel} />
        </div>
      </div>
    </section>
  )
}
