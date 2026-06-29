import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  const {
    id,
    title,
    thumbnail,
    category,
    rating,
    price,
  } = product;

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={thumbnail}
          alt={title}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <div className="product-card__body">
        <span className="product-card__category">
          {category.toUpperCase()}
        </span>

        <h3 className="product-card__title">{title}</h3>

        <p className="product-card__rating">
          ⭐ {rating}
        </p>

        <strong className="product-card__price">
          ${price}
        </strong>
      </div>
    </Link>
  );
}

export default ProductCard;