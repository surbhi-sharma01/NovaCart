import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

function Navbar() {
  const { cartCount: totalItems } = useCart();

  return (
    <header className="navbar">
      <Link className="navbar__brand" to="/">
        NovaCart
      </Link>

      <Link className="navbar__cart-link" to="/cart">
        Cart
        <span className="navbar__cart-count">{totalItems}</span>
      </Link>
    </header>
  );
}

export default Navbar;