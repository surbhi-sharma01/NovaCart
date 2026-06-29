import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-card__image"
          loading="lazy"
        />
      </div>

      <div className="product-card__body">

        <p className="product-card__category">
          {product.category.toUpperCase()}
        </p>

        <h3 className="product-card__title">
          {product.title}
        </h3>

        <p className="product-card__rating">
          ⭐ {product.rating}
        </p>

        <p className="product-card__price">
          ${product.price}
        </p>

      </div>
    </Link>
  );
};

export default ProductCard;