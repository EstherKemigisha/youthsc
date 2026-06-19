import type { CollectionProduct } from '../../data/collectionContent'

type CollectionShopCardProps = {
  product: CollectionProduct
  brandLine: string
  onOrder: (productId: string) => void
}

export function CollectionShopCard({ product, brandLine, onOrder }: CollectionShopCardProps) {
  return (
    <article className="shop-card">
      <button
        type="button"
        className="shop-card__media"
        onClick={() => onOrder(product.id)}
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

      <div className="shop-card__panel">
        <div className="shop-card__head">
          <h3 className="shop-card__name">{product.name}</h3>
          <span className="shop-card__badge" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="7" fill="currentColor" />
              <path
                d="M4 7.2l2 2 4-4.2"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <p className="shop-card__brand">{brandLine}</p>
        <p className="shop-card__desc">{product.description}</p>

        <div className="shop-card__footer">
          <div className="shop-card__meta">
            {product.onSale && product.compareAtPrice && (
              <span className="shop-card__compare">{product.compareAtPrice}</span>
            )}
            <span className="shop-card__price">{product.price}</span>
          </div>
          <button
            type="button"
            className="shop-card__pill"
            onClick={() => onOrder(product.id)}
          >
            Add to order
          </button>
        </div>
      </div>
    </article>
  )
}
