import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader/PageHeader'
import './ThankYouPage.css'

export function ThankYouPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="thank-you-page">
      <PageHeader />
      <div className="thank-you-page__inner">
        <div className="thank-you-page__card">
          <p className="thank-you-page__eyebrow">Message sent</p>
          <h1 className="thank-you-page__title">Thank you</h1>
          <p className="thank-you-page__copy">
            We received your message and will get back to you soon.
          </p>
          <Link to="/#contact" className="thank-you-page__link">
            Back to Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
