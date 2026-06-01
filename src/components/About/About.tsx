import { ABOUT_CONTENT } from '../../data/aboutContent'
import { useInView } from '../../hooks/useInView'
import './About.css'

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.15 })
  const { eyebrow, title, paragraphs, highlights } = ABOUT_CONTENT

  return (
    <section
      ref={ref}
      id="about"
      className={`about${isInView ? ' about--visible' : ''}`}
      aria-labelledby="about-title"
    >
      <div className="about__backdrop" aria-hidden="true">
        <div className="about__seam-blend" />
        <div className="about__base-tint" />
      </div>

      <div className="about__shell">
        <div className="about__lines" aria-hidden="true">
          <span className="about__line about__line--left" />
          <span className="about__line about__line--top" />
          <span className="about__node about__node--eyebrow" />
        </div>

        <header className="about__header">
          <p className="about__eyebrow">{eyebrow}</p>
        </header>

        <div className="about__layout">
          <div className="about__main">
            <h2 id="about-title" className="about__title">
              {title}
            </h2>
            <div className="about__copy">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <aside className="about__panel" aria-label="Highlights">
            <ul className="about__highlights">
              {highlights.map((item) => (
                <li key={item.label} className="about__highlight">
                  <span className="about__highlight-label">{item.label}</span>
                  <span className="about__highlight-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
