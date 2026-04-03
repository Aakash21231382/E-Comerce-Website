import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const data = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(data);
  }, []);

  // ❌ DELETE ORDER
  const handleDelete = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  // 🔥 CANCEL ORDER
  const handleCancel = (id) => {
    const updatedOrders = orders.map((order) =>
      order.id === id
        ? { ...order, status: "Cancelled" }
        : order
    );

    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="container mt-5 pt-5">
      <h2 className="mb-4 text-center">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center"><p className="text-center">No orders found</p>
        <Link to="/" className="btn btn-warning  text-decoration-none text-black mb-3 mt-2 ">Continue Shooping</Link>
        </div>

       
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="card p-3 mb-4 shadow-lg rounded-4"
          >

            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mb-3">
              
              <div>
                <h6 className="mb-1">Order ID: {order.id}</h6>
                <small className="text-muted">{order.date}</small>
              </div>

              <div className="d-flex gap-2 mt-2 mt-md-0">

                {/* ✅ STATUS BADGE */}
                <span
                  className={`badge p-2  ${
                    order.status === "Cancelled"
                      ? "bg-danger"
                      : "bg-success"
                  }`}
                >
                  {order.status || "Placed"}
                </span>

                {/* ❌ CANCEL BUTTON */}
                {order.status !== "Cancelled" && (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleCancel(order.id)}
                  >
                    Cancel
                  </button>
                )}

                {/* 🗑 DELETE */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(order.id)}
                >
                  Delete
                </button>

              </div>
            </div>

            <p><strong>Payment:</strong> {order.payment}</p>
            <p><strong>Address:</strong> {order.address}</p>

            {/* Items */}
            <div className="row">
            {order.items?.map((item) => (
                <div className="col-md-6 mb-3" key={item.id}>
                  <div
                    className="d-flex align-items-center gap-3 border p-2 rounded-3 shadow-sm"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img
                      src={item.thumbnail || item.images?.[0] || item.image}
                      style={{
                        width: "70px",
                        height: "70px",
                        objectFit: "contain"
                      }}
                      alt={item.title}
                    />

                    <div>
                      <h6 className="mb-1">{item.title}</h6>
                      <p className="mb-0 small text-muted">
                        ₹ {item.price} × {item.qty}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <h5 className="text-end mt-3">
  Total: ₹ {Number(order.total || 0).toFixed(2)}
</h5>

          </div>
        ))
      )}
    </div>
  );
};

export default OrderHistory;