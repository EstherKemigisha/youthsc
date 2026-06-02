import { useEffect, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageBackLink } from '../components/PageBackLink/PageBackLink'
import { COLLECTION_CONTENT } from '../data/collectionContent'
import './YouthCollectionPage.css'

type OrderForm = {
  fullName: string
  email: string
  phone: string
  productId: string
  size: string
  quantity: string
  fulfillment: 'pickup' | 'delivery' | 'shipping'
  address: string
  notes: string
}

const emptyOrderForm = (productId?: string): OrderForm => ({
  fullName: '',
  email: '',
  phone: '',
  productId: productId ?? COLLECTION_CONTENT.products[0].id,
  size: '',
  quantity: '1',
  fulfillment: 'pickup',
  address: '',
  notes: '',
})

function StarRating({ count }: { count: number }) {
  return (
    <div className="shop-card__stars" aria-label={`${count} reviews`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="shop-card__star" aria-hidden="true">
          ★
        </span>
      ))}
      <span className="shop-card__review-count">{count} reviews</span>
    </div>
  )
}

export function YouthCollectionPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<OrderForm>(emptyOrderForm)
  const {
    brandLine,
    heroSeason,
    heroYear,
    intro,
    fulfillment,
    products,
    orderNote,
  } = COLLECTION_CONTENT

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const updateField = <K extends keyof OrderForm>(field: K, value: OrderForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const scrollToShop = () => {
    document.getElementById('collection-shop')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const openOrder = (productId: string) => {
    setForm(emptyOrderForm(productId))
    document.getElementById('collection-order')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="collection-page">
      <PageBackLink />
      <header className="collection-topbar">
        <Link to="/#home" className="collection-topbar__logo" aria-label="YSC Home">
          YSC
        </Link>
        <Link to="/donate" className="collection-topbar__link">
          Donate
        </Link>
      </header>

      <section className="collection-hero" aria-labelledby="collection-hero-title">
        <div
          className="collection-hero__media"
          style={{ backgroundImage: "url('/events/youth-collection-hero.png')" }}
          aria-hidden="true"
        />
        <div className="collection-hero__overlay" aria-hidden="true" />

        <div className="collection-hero__content">
          <p className="collection-hero__eyebrow">{brandLine}</p>
          <h1 id="collection-hero-title" className="collection-hero__title">
            {heroSeason}
            <span>{heroYear}</span>
          </h1>
          <p className="collection-hero__intro">{intro}</p>
          <button type="button" className="collection-hero__shop" onClick={scrollToShop}>
            Shop
          </button>
        </div>
      </section>

      <section
        id="collection-shop"
        className="collection-shop"
        aria-labelledby="collection-shop-title"
      >
        <div className="collection-shop__head">
          <h2 id="collection-shop-title" className="collection-shop__title">
            Shop the collection
          </h2>
          <p className="collection-shop__count">{products.length} items</p>
        </div>

        <ul className="collection-shop__grid">
          {products.map((product) => (
            <li key={product.id}>
              <article className="shop-card">
                <button
                  type="button"
                  className="shop-card__image-wrap"
                  onClick={() => openOrder(product.id)}
                  aria-label={`View ${product.name}`}
                >
                  {product.onSale && (
                    <span className="shop-card__badge">Sale</span>
                  )}
                  <span
                    className="shop-card__image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  />
                </button>

                <div className="shop-card__body">
                  <h3 className="shop-card__name">{product.name}</h3>
                  <p className="shop-card__brand">{brandLine}</p>
                  {product.reviewCount != null && product.reviewCount > 0 && (
                    <StarRating count={product.reviewCount} />
                  )}
                  <div className="shop-card__pricing">
                    {product.onSale && product.compareAtPrice && (
                      <span className="shop-card__compare">{product.compareAtPrice}</span>
                    )}
                    <span className="shop-card__price">{product.price}</span>
                  </div>
                  <p className="shop-card__desc">{product.description}</p>
                  <button
                    type="button"
                    className="shop-card__cta"
                    onClick={() => openOrder(product.id)}
                  >
                    Add to order
                  </button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="collection-shipping" aria-label={fulfillment.title}>
        <h2 className="collection-shipping__title">{fulfillment.title}</h2>
        <ul className="collection-shipping__list">
          {fulfillment.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </section>

      <section
        id="collection-order"
        className="collection-order"
        aria-labelledby="collection-order-title"
      >
        <div className="collection-order__inner">
          {submitted ? (
            <div className="collection-order__success" role="status">
              <p className="collection-order__success-eyebrow">Thank you</p>
              <h2>Order received!</h2>
              <p>
                Thanks! We will confirm your items, total, and pickup or delivery
                details soon.
              </p>
              <Link to="/#home" className="collection-order__home">
                Back to home
              </Link>
            </div>
          ) : (
            <>
              <header className="collection-order__head">
                <p className="collection-order__eyebrow">Checkout request</p>
                <h2 id="collection-order-title" className="collection-order__title">
                  Place your order
                </h2>
                <p className="collection-order__note">{orderNote}</p>
              </header>

              <form
                className="collection-order__form"
                onSubmit={handleSubmit}
                aria-label="Youth collection order request"
              >
                <div className="collection-order__group">
                  <p className="collection-order__group-label">Your details</p>
                  <div className="collection-order__row">
                    <label className="collection-order__field">
                      <span>Full name</span>
                      <input
                        type="text"
                        required
                        autoComplete="name"
                        value={form.fullName}
                        onChange={(e) => updateField('fullName', e.target.value)}
                      />
                    </label>
                    <label className="collection-order__field">
                      <span>Email</span>
                      <input
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                      />
                    </label>
                  </div>
                  <label className="collection-order__field collection-order__field--full">
                    <span>Phone / WhatsApp</span>
                    <input
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                    />
                  </label>
                </div>

                <div className="collection-order__group">
                  <p className="collection-order__group-label">Your order</p>
                  <label className="collection-order__field collection-order__field--full">
                    <span>Item</span>
                    <select
                      value={form.productId}
                      onChange={(e) => updateField('productId', e.target.value)}
                    >
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>
                          {product.name} — {product.price}
                        </option>
                      ))}
                    </select>
                  </label>
                  <div className="collection-order__row">
                    <label className="collection-order__field">
                      <span>Quantity</span>
                      <input
                        type="number"
                        min={1}
                        required
                        value={form.quantity}
                        onChange={(e) => updateField('quantity', e.target.value)}
                      />
                    </label>
                    <label className="collection-order__field">
                      <span>Size (if applicable)</span>
                      <input
                        type="text"
                        placeholder="S, M, L, XL…"
                        value={form.size}
                        onChange={(e) => updateField('size', e.target.value)}
                      />
                    </label>
                  </div>
                </div>

                <fieldset className="collection-order__group collection-order__fieldset">
                  <legend className="collection-order__group-label">Fulfillment</legend>
                  <div className="collection-order__options">
                    <label
                      className={`collection-order__option${form.fulfillment === 'pickup' ? ' collection-order__option--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="fulfillment"
                        checked={form.fulfillment === 'pickup'}
                        onChange={() => updateField('fulfillment', 'pickup')}
                      />
                      <span className="collection-order__option-text">
                        Pick up at YSC gathering
                      </span>
                    </label>
                    <label
                      className={`collection-order__option${form.fulfillment === 'delivery' ? ' collection-order__option--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="fulfillment"
                        checked={form.fulfillment === 'delivery'}
                        onChange={() => updateField('fulfillment', 'delivery')}
                      />
                      <span className="collection-order__option-text">Local delivery</span>
                    </label>
                    <label
                      className={`collection-order__option${form.fulfillment === 'shipping' ? ' collection-order__option--active' : ''}`}
                    >
                      <input
                        type="radio"
                        name="fulfillment"
                        checked={form.fulfillment === 'shipping'}
                        onChange={() => updateField('fulfillment', 'shipping')}
                      />
                      <span className="collection-order__option-text">Ship to me</span>
                    </label>
                  </div>
                </fieldset>

                {(form.fulfillment === 'delivery' || form.fulfillment === 'shipping') && (
                  <div className="collection-order__group">
                    <label className="collection-order__field collection-order__field--full">
                      <span>Delivery address</span>
                      <textarea
                        rows={3}
                        required
                        value={form.address}
                        onChange={(e) => updateField('address', e.target.value)}
                      />
                    </label>
                  </div>
                )}

                <div className="collection-order__group collection-order__group--last">
                  <label className="collection-order__field collection-order__field--full">
                    <span>Notes (optional)</span>
                    <textarea
                      rows={3}
                      placeholder="Color preference, gift message, questions…"
                      value={form.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                    />
                  </label>
                </div>

                <footer className="collection-order__footer">
                  <button type="submit" className="collection-order__submit">
                    Submit order request
                  </button>
                </footer>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
