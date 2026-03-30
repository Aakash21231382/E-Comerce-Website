import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  // Total price
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="container mt-5 pt-5">
      <h2>Your Cart </h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="card p-3 mb-3 d-flex flex-row align-items-center justify-content-between"
            >
              {/* Image */}
              <img
                src={item.image}
                style={{ height: "80px", width: "80px", objectFit: "contain" }}
                alt=""
              />

              {/* Details */}
              <div className="ms-3 flex-grow-1">
                <h6>{item.title}</h6>
                <p>₹ {item.price}</p>
              </div>

              {/* Quantity */}
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  className="btn btn-outline-success btn-sm"
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div className="ms-3">
                <strong>₹ {(item.price * item.qty).toFixed(2)}</strong>
              </div>

              {/* Remove */}
              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="text-end mt-4">
            <h4>Total: ₹ {totalPrice.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;