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
    footerTagline,
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

      <div className="hero__copy-stack">
        <div className="video-words-panel">
          <VideoSyncedWords segments={videoWordSegments} />
        </div>

        <div className="headline">
          <AnimatedHeadline sequences={headlineSequences} />
        </div>
      </div>

      <div className="hero__footer">
        <p className="hero__footer-tagline">{footerTagline}</p>
        <SocialLinks links={socialLinks} />
      </div>

      <aside className="hero__cta-panel">
        <HeroActions
          ctas={ctas.filter((cta) => cta.label.toLowerCase() !== 'get involved')}
        />
      </aside>
    </section>
  )
}
