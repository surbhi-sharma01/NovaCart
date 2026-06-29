import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../api/products";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [justAdded, setJustAdded] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setActiveImage(data.images?.[0] || data.thumbnail);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Could not load this product. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1800);
  };

  if (isLoading) return <Loader label="Loading product…" />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return null;

  const images = product.images?.length ? product.images : [product.thumbnail];

  return (
    <div className="page-container">
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="product-details">
        <div className="product-details__gallery">
          <div className="product-details__main-image-wrap">
            <img
              src={activeImage}
              alt={product.title}
              className="product-details__main-image"
            />
          </div>
          {images.length > 1 && (
            <div className="product-details__thumbnails">
              {images.map((img, index) => (
                <button
                  key={index}
                  className={`product-details__thumb-btn ${
                    img === activeImage ? "is-active" : ""
                  }`}
                  onClick={() => setActiveImage(img)}
                  aria-label={`View image ${index + 1} of ${product.title}`}
                >
                  <img src={img} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-details__info">
          <h1 className="product-details__title">{product.title}</h1>
          <p className="product-details__price">${product.price}</p>
          <p className="product-details__description">{product.description}</p>

          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {justAdded ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
