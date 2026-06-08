import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { JOIN_US_CONTENT } from '../data/joinUsContent'
import './JoinUsPage.css'

type JoinForm = {
  fullName: string
  email: string
  phone: string
  ageRange: string
  location: string
  interests: string[]
  message: string
}

const emptyForm = (): JoinForm => ({
  fullName: '',
  email: '',
  phone: '',
  ageRange: '',
  location: '',
  interests: [],
  message: '',
})

export function JoinUsPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<JoinForm>(emptyForm)
  const {
    eyebrow,
    title,
    subtitle,
    submitLabel,
    ageRanges,
    interests,
    placeholders,
    fieldHints,
  } = JOIN_US_CONTENT

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const updateField = <K extends keyof JoinForm>(field: K, value: JoinForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((item) => item !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="join-page">
      <PageHeader />
      <div className="join-page__glow join-page__glow--1" aria-hidden="true" />
      <div className="join-page__glow join-page__glow--2" aria-hidden="true" />

      <header className="join-page__header">
        <p className="join-page__eyebrow">{eyebrow}</p>
        <h1 className="join-page__title">{title}</h1>
        <p className="join-page__subtitle">{subtitle}</p>
      </header>

      <div className="join-page__inner">
        {submitted ? (
          <div className="join-page__success" role="status">
            <p className="join-page__success-eyebrow">You are welcome</p>
            <h2>Thank you for reaching out!</h2>
            <p>
              Thanks, {form.fullName.split(' ')[0] || 'friend'}. Someone from YSC will
              connect with you soon.
            </p>
            <Link to="/#home" className="join-page__home-link">
              Back to home
            </Link>
          </div>
        ) : (
          <form
            className="join-page__form"
            onSubmit={handleSubmit}
            aria-label="Join YSC community"
          >
            <div className="join-page__group">
              <p className="join-page__group-label">About you</p>
              <label className="join-page__field join-page__field--full">
                <span>Full name</span>
                <input
                  type="text"
                  required
                  autoComplete="name"
                  placeholder={placeholders.fullName}
                  value={form.fullName}
                  onChange={(e) => updateField('fullName', e.target.value)}
                />
              </label>
              <div className="join-page__row">
                <label className="join-page__field">
                  <span>Email address</span>
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={placeholders.email}
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </label>
                <label className="join-page__field">
                  <span>Phone / WhatsApp</span>
                  <input
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder={placeholders.phone}
                    value={form.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                  />
                </label>
              </div>
              <p className="join-page__hint">{fieldHints.phone}</p>
            </div>

            <div className="join-page__group">
              <p className="join-page__group-label">A little more</p>
              <div className="join-page__row">
                <label className="join-page__field">
                  <span>Age range</span>
                  <select
                    required
                    value={form.ageRange}
                    onChange={(e) => updateField('ageRange', e.target.value)}
                  >
                    <option value="" disabled>
                      Select…
                    </option>
                    {ageRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="join-page__field">
                  <span>Location</span>
                  <input
                    type="text"
                    required
                    placeholder={placeholders.location}
                    value={form.location}
                    onChange={(e) => updateField('location', e.target.value)}
                  />
                </label>
              </div>
              <p className="join-page__hint">{fieldHints.location}</p>
            </div>

            <fieldset className="join-page__group join-page__fieldset">
              <legend className="join-page__group-label">
                What are you hoping to gain from YSC?
              </legend>
              <div className="join-page__checks">
                {interests.map((interest) => {
                  const checked = form.interests.includes(interest)
                  return (
                    <label
                      key={interest}
                      className={`join-page__check${checked ? ' join-page__check--active' : ''}`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleInterest(interest)}
                      />
                      <span>{interest}</span>
                    </label>
                  )
                })}
              </div>
            </fieldset>

            <div className="join-page__group join-page__group--last">
              <label className="join-page__field join-page__field--full">
                <span>Short message</span>
                <textarea
                  rows={4}
                  placeholder={placeholders.message}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </label>
            </div>

            <footer className="join-page__footer">
              <button type="submit" className="join-page__submit">
                {submitLabel}
              </button>
            </footer>
          </form>
        )}
      </div>
    </div>
  )
}
