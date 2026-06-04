import { HERO_CONTENT } from '../../data/heroContent'
import { AnimatedHeadline } from './AnimatedHeadline'
import { HeroActions } from './HeroActions'
import { Chevrons } from './Chevrons'
import { Header } from './Header'
import { HeroVideo } from './HeroVideo'
import { LConnector } from './LConnector'
import { SocialLinks } from './SocialLinks'
import { VideoSyncedWords } from './VideoSyncedWords'
import './Hero.css'

export function Hero() {
  const {
    headlineSequences,
    heroBadge,
    heroSubtitle,
    socialFollowLabel,
    socialLinks,
    ctas,
    backgroundVideo,
    mobileBackgroundVideo,
    videoWordSegments,
  } = HERO_CONTENT

  return (
    <section id="home" className="hero" aria-label="Hero">
      <HeroVideo src={backgroundVideo} mobileSrc={mobileBackgroundVideo} />
      <div className="hero__overlay" role="presentation" />

      <Chevrons />
      <LConnector />
      <Header />

      <div className="hero__mobile-ui">
        <div className="video-words-panel hero__video-words">
          <VideoSyncedWords segments={videoWordSegments} />
        </div>

        <div className="hero__copy-stack">
          <p className="hero__badge">{heroBadge}</p>

          <div className="headline headline--mobile">
            <h1 className="headline__mobile-title" aria-label="The culture for Jesus">
              <span className="headline__line headline__line--the">THE</span>
              <span className="headline__line headline__line--gold">CULTURE</span>
              <span className="headline__line headline__line--title">FOR JESUS</span>
            </h1>
          </div>

          <div className="headline headline--desktop">
            <AnimatedHeadline sequences={headlineSequences} />
          </div>

          <p className="hero__subtitle-mobile">{heroSubtitle}</p>
        </div>

        <div className="hero__footer">
          <p className="hero__footer-tagline">{heroSubtitle}</p>
          <SocialLinks links={socialLinks} followLabel={socialFollowLabel} />
        </div>

        <aside className="hero__cta-panel">
          <HeroActions
            ctas={ctas.filter((cta) => cta.label.toLowerCase() !== 'get involved')}
          />
        </aside>
      </div>
    </section>
  )
}
