import type { CollectionProduct } from '../../data/collectionContent'
import { CardReveal } from '../ScrollReveal/ScrollReveal'

type CollectionShopCardProps = {
  product: CollectionProduct
  brandLine: string
  onOrder: (productId: string) => void
  index?: number
}

export function CollectionShopCard({
  product,
  brandLine,
  onOrder,
  index = 0,
}: CollectionShopCardProps) {
  return (
    <CardReveal as="article" className="shop-card" index={index}>
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
        </div>

        <p className="shop-card__brand">{brandLine}</p>
        <p className="shop-card__desc">{product.description}</p>

        <div className="shop-card__footer">
          <div className="shop-card__meta">
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
    </CardReveal>
  )
}
