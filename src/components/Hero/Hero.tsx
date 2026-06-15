import { HERO_CONTENT } from '../../data/heroContent'
import { HeroActions } from './HeroActions'
import { HeroBlocks } from './HeroBlocks'
import { Header } from './Header'
import { HeadlineLine } from './HeadlineLine'
import './Hero.css'
import './HeroEditorial.css'

export function Hero() {
  const {
    headlineSequences,
    heroBadge,
    heroDescription,
    heroPrimaryCta,
    ctas,
  } = HERO_CONTENT

  const mobileHeadline = headlineSequences[0]

  return (
    <section id="home" className="hero hero--editorial" aria-label="Hero">
      <HeroBlocks />

      <Header />

      <div className="hero__stage">
        <div className="hero__stage-inner">
          <p className="hero__eyebrow">{heroBadge}</p>

          <h1
            className="hero__editorial-headline"
            aria-label={mobileHeadline.titleLines.join(' ')}
          >
            <span className="hero__editorial-line hero__editorial-line--generation">
              <HeadlineLine line="A GENERATION" />
            </span>
            <span className="hero__editorial-line hero__editorial-line--satisfied">
              <HeadlineLine line="SATISFIED" />
            </span>
            <span className="hero__editorial-line hero__editorial-line--script">
              <HeadlineLine line="in Christ" />
            </span>
          </h1>

          <p className="hero__description">{heroDescription}</p>

          <aside className="hero__cta-panel">
            <HeroActions
              primaryCta={heroPrimaryCta}
              desktopCtas={ctas.filter(
                (cta) => cta.label.toLowerCase() !== 'get involved',
              )}
            />
          </aside>
        </div>
      </div>

      <div className="hero__seam" aria-hidden="true">
        <div className="hero__seam-fade" />
        <div className="hero__seam-rule">
          <span className="hero__seam-wing hero__seam-wing--left" />
          <span className="hero__seam-mark" />
          <span className="hero__seam-wing hero__seam-wing--right" />
        </div>
      </div>
    </section>
  )
}
