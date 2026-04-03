// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";

// const Cart = () => {
//   const { cart, removeFromCart, increaseQty, decreaseQty } =
//     useContext(CartContext);

//   // Total price
//   const totalPrice = cart.reduce(
//     (acc, item) => acc + item.price * item.qty,
//     0
//   );

//   return (
//     <div className="container mt-5 pt-5">
//       <h2>Your Cart </h2>

//       {cart.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="card p-3 mb-3 d-flex flex-row align-items-center justify-content-between"
//             >
//               {/* Image */}
//               <img
//                 src={item.image}
//                 style={{ height: "80px", width: "80px", objectFit: "contain" }}
//                 alt=""
//               />

//               {/* Details */}
//               <div className="ms-3 flex-grow-1">
//                 <h6>{item.title}</h6>
//                 <p>₹ {item.price}</p>
//               </div>

//               {/* Quantity */}
//               <div className="d-flex align-items-center gap-2">
//                 <button
//                   className="btn btn-outline-danger btn-sm"
//                   onClick={() => decreaseQty(item.id)}
//                 >
//                   -
//                 </button>

//                 <span>{item.qty}</span>

//                 <button
//                   className="btn btn-outline-success btn-sm"
//                   onClick={() => increaseQty(item.id)}
//                 >
//                   +
//                 </button>
//               </div>

//               {/* Item Total */}
//               <div className="ms-3">
//                 <strong>₹ {(item.price * item.qty).toFixed(2)}</strong>
//               </div>

//               {/* Remove */}
//               <button
//                 className="btn btn-danger btn-sm ms-3"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Total Price */}
//           <div className="text-end mt-4">
//             <h4>Total: ₹ {totalPrice.toFixed(2)}</h4>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;


















import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useLocation } from "react-router";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } =
    useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [paymentType, setPaymentType] = useState("");
  const [address, setAddress] = useState("");
 const location = useLocation();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleBuy = () => {
    if (cart.length === 0) {
      toast.success("Cart is empty ❌");
      return;
    }
    setShowModal(true);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (location.state?.openPayment) {
      setShowModal(true);
    }
  }, [location.state]);

  const handleConfirm = () => {
    if (!paymentType || !address) {
      toast.error("Please select payment & enter address ❌");
    
      return;
    }
  
    // 👉 Create order object
    const newOrder = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      payment: paymentType,
      address: address,
      date: new Date().toLocaleString(),
    };
  
    // 👉 Save to localStorage
    const oldOrders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([newOrder, ...oldOrders]));
  
    toast.success("Order placed successfully 🎉");
  
    setShowModal(false);
    setAddress("");
    setPaymentType("");
    clearCart();
  };

  return (
    <div className="container mt-5 pt-5 text-center">
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center mb-3">
          <p className="fs-2">No Add items in cart</p>
          <Link to="/" className="text-black btn btn-warning">Continue Shooping</Link>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="card p-3 mb-3 d-flex flex-column flex-md-row align-items-center justify-content-between gap-3"
            >
             <img
  src={item.thumbnail || item.images?.[0]}
  style={{ height: "80px", width: "80px", objectFit: "contain" }}
  alt={item.title}
/>
              <div className="ms-3 flex-grow-1">
                <h6>{item.title}</h6>
                <p>₹ {item.price}</p>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-2">
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

              <div className="ms-3">
                <strong>₹ {(item.price * item.qty).toFixed(2)}</strong>
              </div>

              <button
                className="btn btn-danger btn-sm ms-3"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-end mt-4">
            <h4>Total: ₹ {totalPrice.toFixed(2)}</h4>

            <button className="btn btn-success mt-2 mb-5" onClick={handleBuy}>
              Buy Now
            </button>
          </div>
        </>
      )}

      {/* 👉 PAYMENT MODAL */}
      {showModal && (
        <div className="modal d-block">
          <div className="modal-dialog">
            <div className="modal-content">

              {/* Header */}
              <div className="modal-header">
                <h5>Checkout</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              {/* Body */}
              <div className="modal-body">

                {/* Address */}
                <div className="mb-3">
                  <label>Delivery Address</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter full address..."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>

                {/* Payment */}
                <label className="mb-2">Select Payment Method</label>

                <div className="form-check">
                  <input
                    type="radio"
                    name="payment"
                    className="form-check-input"
                    onChange={() => setPaymentType("Cash on Delivery")}
                  />
                  <label className="form-check-label">
                    Cash on Delivery
                  </label>
                </div>

                <div className="form-check mt-2">
                  <input
                    type="radio"
                    name="payment"
                    className="form-check-input"
                    onChange={() => setPaymentType("Online Payment")}
                  />
                  <label className="form-check-label">
                    Online Payment (Demo)
                  </label>
                </div>

                {/* Summary */}
                <div className="mt-3">
                  <h6>Total Amount: ₹ {totalPrice.toFixed(2)}</h6>
                </div>

              </div>

              {/* Footer */}
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-success"
                  onClick={handleConfirm}
                >
                  Place Order
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Cart;