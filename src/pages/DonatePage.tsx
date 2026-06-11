import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { DONATE_CONTENT } from '../data/donateContent'
import './DonatePage.css'

type DonateForm = {
  fullName: string
  email: string
  phone: string
  optionId: string
  amount: string
  message: string
}

const emptyDonateForm = (optionId?: string): DonateForm => ({
  fullName: '',
  email: '',
  phone: '',
  optionId: optionId ?? DONATE_CONTENT.options[0].id,
  amount: '',
  message: '',
})

export function DonatePage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<DonateForm>(emptyDonateForm)
  const {
    eyebrow,
    titleLine1,
    titleLine2,
    intro,
    waysTitle,
    waysSubtitle,
    purpose,
    whatToGive,
    options,
    ctaNote,
  } = DONATE_CONTENT

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const updateField = (field: keyof DonateForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const scrollToForm = (optionId?: string) => {
    if (optionId) {
      setForm((prev) => ({ ...prev, optionId }))
    }
    document.getElementById('donate-form')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="donate-page">
      <PageHeader />

      <section className="donate-hero" aria-labelledby="donate-hero-title">
        <div className="donate-hero__backdrop" aria-hidden="true" />
        <div className="donate-hero__overlay" aria-hidden="true" />

        <div className="donate-hero__inner">
          <p className="donate-hero__eyebrow">{eyebrow}</p>
          <h1 id="donate-hero-title" className="donate-hero__title">
            <span>{titleLine1}</span>
            <span>{titleLine2}</span>
          </h1>
          <p className="donate-hero__intro">{intro}</p>

          <div className="donate-hero__actions">
            <button
              type="button"
              className="donate-hero__cta donate-hero__cta--primary"
              onClick={() => scrollToForm()}
            >
              Give now
            </button>
            <Link to="/youth-collection" className="donate-hero__cta donate-hero__cta--ghost">
              Youth collection
            </Link>
          </div>
        </div>
      </section>

      <section className="donate-ways" aria-labelledby="donate-ways-title">
        <div className="donate-ways__head">
          <h2 id="donate-ways-title" className="donate-ways__title">
            {waysTitle}
          </h2>
          <p className="donate-ways__subtitle">{waysSubtitle}</p>
        </div>

        <ul className="donate-ways__grid">
          {options.map((option, index) => (
            <li key={option.id}>
              <article className="donate-ways__card">
                <div
                  className="donate-ways__visual"
                  style={{ backgroundImage: `url('${option.image}')` }}
                  aria-hidden="true"
                />
                <div className="donate-ways__body">
                  <p className="donate-ways__amount">
                    {option.suggestedAmount ?? option.amountLabel}
                  </p>
                  <h3 className="donate-ways__card-title">{option.title}</h3>
                  <p className="donate-ways__card-desc">{option.description}</p>
                  <button
                    type="button"
                    className={`donate-ways__btn${index === 1 ? ' donate-ways__btn--fill' : ''}`}
                    onClick={() => scrollToForm(option.id)}
                  >
                    Give today
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="donate-trust" aria-label="Why your gift matters">
        <div className="donate-trust__panel donate-trust__panel--purpose">
          <h2 className="donate-trust__title">{purpose.title}</h2>
          <ul className="donate-trust__list">
            {purpose.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="donate-trust__panel donate-trust__panel--give">
          <h2 className="donate-trust__title">{whatToGive.title}</h2>
          <ul className="donate-trust__list">
            {whatToGive.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="donate-form" className="donate-form-section" aria-labelledby="donate-form-title">
        <div className="donate-form-section__inner">
          <header className="donate-form-section__head">
            <p className="donate-form-section__eyebrow">Partner with YSC</p>
            <h2 id="donate-form-title" className="donate-form-section__title">
              Complete your gift
            </h2>
            <p className="donate-form-section__note">{ctaNote}</p>
          </header>

          {submitted ? (
            <div className="donate-form-section__success" role="status">
              <h3>Thank you for giving!</h3>
              <p>
                We received your pledge. A YSC leader will reach out shortly with
                payment details (mobile money or in-person).
              </p>
              <Link to="/#home" className="donate-form-section__home-link" aria-label="Back home">
                ←
              </Link>
            </div>
          ) : (
            <form className="donate-form" onSubmit={handleSubmit}>
              <div className="donate-form__row">
                <label className="donate-form__field">
                  <span>Full name</span>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                  />
                </label>
                <label className="donate-form__field">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                  />
                </label>
              </div>

              <label className="donate-form__field">
                <span>Phone / WhatsApp</span>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                />
              </label>

              <div className="donate-form__row">
                <label className="donate-form__field">
                  <span>Donation type</span>
                  <select
                    value={form.optionId}
                    onChange={(e) => updateField('optionId', e.target.value)}
                  >
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.title}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="donate-form__field">
                  <span>Amount (optional)</span>
                  <input
                    type="text"
                    placeholder="e.g. $50"
                    value={form.amount}
                    onChange={(e) => updateField('amount', e.target.value)}
                  />
                </label>
              </div>

              <label className="donate-form__field">
                <span>Message (optional)</span>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => updateField('message', e.target.value)}
                />
              </label>

              <button type="submit" className="donate-form__submit">
                Send donation request
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}
