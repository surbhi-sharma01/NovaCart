import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const {
    cartItems: items,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    subtotal,
  } = useCart();

  if (!items.length) {
    return (
      <div className="page-container">
        <h1 className="cart-heading">Your Cart</h1>

        <div className="cart-empty">
          <p>Your cart is empty.</p>

          <Link className="cart-empty__link" to="/">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container">
      <h1 className="cart-heading">Your Cart</h1>

      <div className="cart-layout">
        <section className="cart-items">
          {items.map((product) => {
            const totalPrice = product.price * product.quantity;

            return (
              <div className="cart-item" key={product.id}>
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="cart-item__image"
                />

                <div className="cart-item__details">
                  <p className="cart-item__title">{product.title}</p>
                  <p className="cart-item__price">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                <div className="cart-item__quantity">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() => decreaseQuantity(product.id)}
                  >
                    −
                  </button>

                  <span>{product.quantity}</span>

                  <button
                    aria-label="Increase quantity"
                    onClick={() => increaseQuantity(product.id)}
                  >
                    +
                  </button>
                </div>

                <p className="cart-item__total">
                  ${totalPrice.toFixed(2)}
                </p>

                <button
                  className="cart-item__remove"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}
        </section>

        <aside className="bill-summary">
          <h2 className="bill-summary__heading">
            Order Summary
          </h2>

          <div className="bill-summary__row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="bill-summary__divider" />

          <div className="bill-summary__row bill-summary__row--total">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Cart;