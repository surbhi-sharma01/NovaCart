import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="page-container">
        <h1 className="cart-heading">Your Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/" className="cart-empty__link">
            Browse products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="cart-heading">Your Cart</h1>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="cart-item__image"
              />

              <div className="cart-item__details">
                <p className="cart-item__title">{item.title}</p>
                <p className="cart-item__price">${item.price.toFixed(2)}</p>
              </div>

              <div className="cart-item__quantity">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => increaseQuantity(item.id)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <p className="cart-item__total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                className="cart-item__remove"
                onClick={() => removeFromCart(item.id)}
                aria-label={`Remove ${item.title} from cart`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <aside className="bill-summary">
          <h2 className="bill-summary__heading">Bill Summary</h2>
          <div className="bill-summary__row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="bill-summary__divider" />
          <div className="bill-summary__row bill-summary__row--total">
            <span>Total Amount</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
