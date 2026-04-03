import React, { useEffect, useRef, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const KitchenSlider = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef();
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();

      // 👉 kitchen related filter
      const kitchenItems = data.products.filter((item) =>
        item.category.includes("kitchen") ||
        item.title.toLowerCase().includes("knife") ||
        item.title.toLowerCase().includes("pan") ||
        item.title.toLowerCase().includes("cook") ||
        item.title.toLowerCase().includes("bottle")
      );

      setProducts(kitchenItems.slice(0, 50)); // 👈 50 products
    };

    fetchData();
  }, []);

  // 👉 Scroll
  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Up to 60% off | Kitchen Products</h5>
        {/* <button className="btn btn-sm btn-outline-dark">See all</button> */}
      </div>

      <div className="position-relative border border-black mb-3 rounded-1">

        {/* Left Button */}
        <button
          className="btn btn-light position-absolute"
          style={{ left: 0, top: "40%", zIndex: 10 }}
          onClick={scrollLeft}
        >
          ◀
        </button>

        {/* Slider */}
        <div
          className="d-flex overflow-auto"
          ref={scrollRef}
          style={{ gap: "25px", scrollBehavior: "smooth",  marginTop:"20px"}}
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

        {/* Right Button */}
        <button
          className="btn btn-light position-absolute"
          style={{ right: 0, top: "40%", zIndex: 10 }}
          onClick={scrollRight}
        >
          ▶
        </button>

      </div>
    </div>
  );
};

export default KitchenSlider;