import React, { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const JeansSlider = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      // 👉 TRY jeans filter
      let jeansItems = data.products.filter((item) =>
        item.title.toLowerCase().includes("jeans") ||
        item.title.toLowerCase().includes("denim") ||
        item.category.toLowerCase().includes("mens-shirts") ||
        item.category.toLowerCase().includes("tops")
      );

      // 👉 fallback (agar empty ho jaye)
      if (jeansItems.length === 0) {
        jeansItems = data.products.slice(0, 20);
      }

      setProducts(jeansItems);
    };

    fetchData();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Trending Products</h5>
      </div>

      <div className="position-relative border border-black mb-3 rounded-1">

        {/* LEFT BUTTON */}
        <button
          onClick={scrollLeft}
          style={{
            position: "absolute",
            left: "0",
            top: "40%",
            zIndex: 10,
            border: "none",
            background: "none",
            fontSize: "22px",
            cursor: "pointer"
          }}
        >
          {"<"}
        </button>

        {/* SLIDER */}
        <div
          className="d-flex"
          ref={scrollRef}
          style={{
            gap: "25px",
            overflowX: "auto",
            overflowY: "hidden",
            scrollBehavior: "smooth",
            marginTop: "20px"
          }}
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="card p-2"
              style={{ minWidth: "200px", cursor: "pointer" }}
            >
              <img
                src={item.thumbnail}
                style={{ height: "150px", objectFit: "contain" }}
                alt=""
                onClick={() => navigate(`/product/${item.id}`)}
              />

              <h6 className="mt-2">{item.title.slice(0, 30)}</h6>

              <p className="text-success">₹ {item.price}</p>

              <button
                className="btn btn-warning btn-sm"
                onClick={() =>
                  addToCart({ ...item, image: item.thumbnail })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button
          onClick={scrollRight}
          style={{
            position: "absolute",
            right: "0",
            top: "40%",
            zIndex: 10,
            border: "none",
            background: "none",
            fontSize: "22px",
            cursor: "pointer"
          }}
        >
          {">"}
        </button>

      </div>

      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default JeansSlider;