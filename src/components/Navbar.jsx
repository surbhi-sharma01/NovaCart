import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="navbar__brand">
        NovaCart
      </Link>
      <Link to="/cart" className="navbar__cart-link">
        Cart
        <span className="navbar__cart-count">{cartCount}</span>
      </Link>
    </header>
  );
};

export default Navbar;
