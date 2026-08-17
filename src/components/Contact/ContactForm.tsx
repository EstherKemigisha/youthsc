import { useMemo } from 'react'
import './ContactForm.css'

/** Inbox for all contact-form messages (set this as the Formspree notification email). */
const CONTACT_EMAIL = 'kemigishaesther07@gmail.com'

/** Formspree form endpoint — submissions notify kemigishaesther07@gmail.com */
const FORMSPREE_ACTION = 'https://formspree.io/f/mqpzzejy'

export function ContactForm() {
  const thankYouUrl = useMemo(() => {
    if (typeof window === 'undefined') return '/thank-you'
    return `${window.location.origin}/thank-you`
  }, [])

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <header className="contact__header">
          <p className="contact__eyebrow">Get in touch</p>
          <h2 id="contact-title" className="contact__title">
            Contact YSC
          </h2>
          <p className="contact__subtitle">
            Send us a note — we would love to hear from you.
          </p>
        </header>

        <form
          className="contact__card"
          action={FORMSPREE_ACTION}
          method="POST"
        >
          <input
            type="hidden"
            name="_subject"
            value="New message from website"
          />
          <input type="hidden" name="_cc" value={CONTACT_EMAIL} />
          <input type="hidden" name="_next" value={thankYouUrl} />

          <label className="contact__field">
            <span className="contact__label">Your Email</span>
            <input
              className="contact__input"
              type="email"
              name="email"
              required
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">Message</span>
            <textarea
              className="contact__textarea"
              name="message"
              required
              rows={5}
              placeholder="How can we help?"
            />
          </label>

          <button type="submit" className="contact__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
