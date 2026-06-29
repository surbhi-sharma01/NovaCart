import { useEffect, useState } from "react";
import { getAllProducts } from "../api/products";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import "./ProductListing.css";

function ProductListing() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);

      try {
        const products = await getAllProducts();
        setProductList(products);
        setErrorMessage("");
      } catch (error) {
        console.error(error);
        setErrorMessage("Could not load products. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <Loader label="Loading products..." />;
  }

  if (errorMessage) {
    return <ErrorMessage message={errorMessage} />;
  }

  return (
    <div className="page-container">
      <h1 className="listing-heading">Shop Our Collection</h1>

      <div className="product-grid">
        {productList.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;