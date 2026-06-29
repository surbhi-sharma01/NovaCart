import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/products";
import { useCart } from "../context/CartContext";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [productData, setProductData] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductById(id);

        setProductData(data);
        setSelectedImage(data.images?.[0] || data.thumbnail);
        setFetchError(null);
      } catch (error) {
        console.error(error);
        setFetchError("Unable to load product details.");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  function addItem() {
    addToCart(productData);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1800);
  }

  if (loading) {
    return <Loader label="Loading product..." />;
  }

  if (fetchError) {
    return <ErrorMessage message={fetchError} />;
  }

  if (!productData) return null;

  const gallery =
    productData.images?.length > 0
      ? productData.images
      : [productData.thumbnail];

  return (
    <div className="page-container">
      <button
        className="back-link"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="product-details">
        <div className="product-details__gallery">
          <div className="product-details__main-image-wrap">
            <img
              src={selectedImage}
              alt={productData.title}
              className="product-details__main-image"
            />
          </div>

          {gallery.length > 1 && (
            <div className="product-details__thumbnails">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  className={`product-details__thumb-btn ${
                    selectedImage === image ? "is-active" : ""
                  }`}
                  onClick={() => setSelectedImage(image)}
                  aria-label={`Product image ${index + 1}`}
                >
                  <img src={image} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-details__info">
          <h1 className="product-details__title">
            {productData.title}
          </h1>

          <p className="product-details__price">
            ${productData.price}
          </p>

          <p className="product-details__description">
            {productData.description}
          </p>

          <button
            className="add-to-cart-btn"
            onClick={addItem}
          >
            {added ? "Added to Cart ✓" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;