import type { CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { EVENTS_CONTENT } from '../../data/eventsContent'
import { useInView } from '../../hooks/useInView'
import './UpcomingEvents.css'

export function UpcomingEvents() {
  const { ref, isInView } = useInView({ threshold: 0.12 })
  const { eyebrow, title, registerCta, events } = EVENTS_CONTENT

  return (
    <section
      ref={ref}
      id="events"
      className={`events${isInView ? ' events--visible' : ''}`}
      aria-labelledby="events-title"
    >
      <div className="events__backdrop" aria-hidden="true">
        <div className="events__glow events__glow--1" />
        <div className="events__glow events__glow--2" />
        <div className="events__mesh" />
      </div>

      <div className="events__inner">
        <div className="events__seam" aria-hidden="true">
          <span className="events__seam-line" />
        </div>

        <header className="events__header">
          <div className="events__header-lines" aria-hidden="true">
            <span className="events__header-line" />
            <span className="events__header-node" />
          </div>
          <p className="events__eyebrow">{eyebrow}</p>
          <h2 id="events-title" className="events__title">
            {title}
          </h2>
          <p className="events__intro">
            Find your place in what God is doing — worship, word, and community.
          </p>
          <Link to="/register" className="events__register-banner">
            {registerCta}
          </Link>
        </header>

        <ul className="events__grid">
          {events.map((event, index) => (
            <li
              key={event.title}
              className="events__card"
              style={{ '--card-i': index } as CSSProperties}
            >
              <div className="events__card-media">
                <img
                  className="events__card-image"
                  src={event.image}
                  alt={event.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="events__card-shine" aria-hidden="true" />
                <div className="events__card-overlay" aria-hidden="true" />
                <div className="events__card-badge">
                  <time className="events__date">{event.date}</time>
                  <span className="events__time">{event.time}</span>
                </div>
              </div>

              <div className="events__card-body">
                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__location">{event.location}</p>
                <p className="events__description">{event.description}</p>
                <Link
                  to={`/register/${event.slug}`}
                  className="events__card-cta"
                  onClick={(e) => e.stopPropagation()}
                >
                  View details
                  <span className="events__card-cta-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
