import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader/PageHeader'
import {
  EVENTS_CONTENT,
  getEventBySlug,
  type EventItem,
} from '../data/eventsContent'
import './EventRegistrationPage.css'

type FormState = {
  fullName: string
  email: string
  phone: string
  eventSlug: string
  notes: string
}

const emptyForm = (eventSlug: string): FormState => ({
  fullName: '',
  email: '',
  phone: '',
  eventSlug,
  notes: '',
})

export function EventRegistrationPage() {
  const { eventSlug } = useParams<{ eventSlug?: string }>()
  const eventFromUrl = getEventBySlug(eventSlug)
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<FormState>(() =>
    emptyForm(eventFromUrl?.slug ?? EVENTS_CONTENT.events[0].slug),
  )

  const selectedEvent = useMemo(
    () => getEventBySlug(form.eventSlug) ?? EVENTS_CONTENT.events[0],
    [form.eventSlug],
  )

  useEffect(() => {
    window.scrollTo(0, 0)
    if (eventFromUrl) {
      setForm(emptyForm(eventFromUrl.slug))
      setSubmitted(false)
    }
  }, [eventFromUrl])

  if (eventSlug && !eventFromUrl) {
    return <Navigate to="/register" replace />
  }

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="register-page">
      <PageHeader backTo="/#events" backLabel="← Back to events" />
      <div className="register-page__glow register-page__glow--1" aria-hidden="true" />
      <div className="register-page__glow register-page__glow--2" aria-hidden="true" />

      <header className="register-page__header">
        <p className="register-page__eyebrow">YSC Events</p>
        <h1 className="register-page__title">Register for an event</h1>
        <p className="register-page__subtitle">
          Save your spot — we will confirm your registration by email.
        </p>
      </header>

      <div className="register-page__layout">
        <aside className="register-page__event-card">
          <EventPreview event={selectedEvent} />
        </aside>

        <div className="register-page__form-wrap">
          {submitted ? (
            <div className="register-page__success" role="status">
              <h2>You are registered!</h2>
              <p>
                Thanks, {form.fullName.split(' ')[0] || 'friend'}. We have your spot for{' '}
                <strong>{selectedEvent.title}</strong> on {selectedEvent.date} at{' '}
                {selectedEvent.time}.
              </p>
              <Link to="/#events" className="register-page__submit">
                Back to events
              </Link>
            </div>
          ) : (
            <form className="register-page__form" onSubmit={handleSubmit}>
              <label className="register-page__field">
                <span>Full name</span>
                <input
                  type="text"
                  name="fullName"
                  required
                  autoComplete="name"
                  value={form.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                />
              </label>

              <label className="register-page__field">
                <span>Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </label>

              <label className="register-page__field">
                <span>Phone (optional)</span>
                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </label>

              <label className="register-page__field">
                <span>Event</span>
                <select
                  name="event"
                  required
                  value={form.eventSlug}
                  onChange={(e) => updateField('eventSlug', e.target.value)}
                  disabled={Boolean(eventFromUrl)}
                >
                  {EVENTS_CONTENT.events.map((item) => (
                    <option key={item.id} value={item.slug}>
                      {item.title} — {item.date}
                    </option>
                  ))}
                </select>
              </label>

              <label className="register-page__field">
                <span>Anything we should know? (optional)</span>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  placeholder="First time visiting, bringing friends, accessibility needs…"
                />
              </label>

              <button type="submit" className="register-page__submit">
                Complete registration
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function EventPreview({ event }: { event: EventItem }) {
  return (
    <>
      <div className="register-page__event-media">
        <img src={event.image} alt={event.imageAlt} />
      </div>
      <div className="register-page__event-body">
        <p className="register-page__event-date">
          {event.date} · {event.time}
        </p>
        <h2 className="register-page__event-title">{event.title}</h2>
        <p className="register-page__event-location">{event.location}</p>
        <p className="register-page__event-description">{event.description}</p>
      </div>
    </>
  )
}
