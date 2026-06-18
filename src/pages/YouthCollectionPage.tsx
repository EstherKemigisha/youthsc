import { useEffect, useState, type CSSProperties, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { COLLECTION_CONTENT } from '../data/collectionContent'
import { useInView } from '../hooks/useInView'
import { useSectionScroll } from '../hooks/useSectionScroll'
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

function SplitWords({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  return (
    <>
      {text.split(' ').map((word, index) => (
        <span
          key={`${word}-${index}`}
          className={className}
          style={
            {
              '--word-i': index,
              '--word-dir': index % 2 === 0 ? -1 : 1,
            } as CSSProperties
          }
        >
          {word}
        </span>
      ))}
    </>
  )
}

export function YouthCollectionPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState<OrderForm>(emptyOrderForm)
  const heroRef = useSectionScroll({ cssVar: '--collection-scroll' })
  const shopScrollRef = useSectionScroll({ cssVar: '--shop-scroll' })
  const { ref: shopViewRef, isInView: shopVisible } = useInView({ threshold: 0.08 })
  const { ref: shippingRef, isInView: shippingVisible } = useInView({ threshold: 0.2 })
  const { ref: orderRef, isInView: orderVisible } = useInView({ threshold: 0.12 })
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

  const setShopSectionRef = (element: HTMLElement | null) => {
    shopScrollRef.current = element
    shopViewRef.current = element
  }

  return (
    <div className="collection-page">
      <PageHeader />

      <section
        ref={heroRef}
        className="collection-hero"
        aria-labelledby="collection-hero-title"
      >
        <div
          className="collection-hero__media"
          style={{ backgroundImage: "url('/events/youth-collection-hero.png')" }}
          aria-hidden="true"
        />
        <div className="collection-hero__overlay" aria-hidden="true" />

        <div className="collection-hero__content">
          <p className="collection-hero__eyebrow">
            <SplitWords text={brandLine} className="collection-hero__word" />
          </p>
          <h1 id="collection-hero-title" className="collection-hero__title">
            <span className="collection-hero__title-line">
              <SplitWords text={heroSeason} className="collection-hero__word" />
            </span>
            <span className="collection-hero__year">{heroYear}</span>
          </h1>
          <p className="collection-hero__intro">
            <SplitWords text={intro} className="collection-hero__word collection-hero__word--intro" />
          </p>
          <button type="button" className="collection-hero__shop" onClick={scrollToShop}>
            Shop
          </button>
        </div>
      </section>

      <section
        id="collection-shop"
        ref={setShopSectionRef}
        className={`collection-shop${shopVisible ? ' collection-shop--visible' : ''}`}
        aria-labelledby="collection-shop-title"
      >
        <div className="collection-shop__head">
          <h2 id="collection-shop-title" className="collection-shop__title">
            <SplitWords text="Shop the collection" className="collection-shop__word" />
          </h2>
          <p className="collection-shop__count">{products.length} items</p>
        </div>

        <ul className="collection-shop__grid">
          {products.map((product, index) => (
            <li
              key={product.id}
              style={{ '--card-i': index } as CSSProperties}
            >
              <article className="shop-card">
                <button
                  type="button"
                  className="shop-card__image-wrap"
                  onClick={() => openOrder(product.id)}
                  aria-label={`View ${product.name}`}
                >
                  <img
                    className="shop-card__image"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                  />
                </button>

                <div className="shop-card__body">
                  <h3 className="shop-card__name">{product.name}</h3>
                  <p className="shop-card__brand">{brandLine}</p>
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

      <section
        ref={shippingRef}
        className={`collection-shipping${shippingVisible ? ' collection-shipping--visible' : ''}`}
        aria-label={fulfillment.title}
      >
        <h2 className="collection-shipping__title">{fulfillment.title}</h2>
        <ul className="collection-shipping__list">
          {fulfillment.options.map((option) => (
            <li key={option}>{option}</li>
          ))}
        </ul>
      </section>

      <section
        id="collection-order"
        ref={orderRef}
        className={`collection-order${orderVisible ? ' collection-order--visible' : ''}`}
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
              <Link to="/#home" className="collection-order__home" aria-label="Back home">
                ←
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
