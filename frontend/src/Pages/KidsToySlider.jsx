import React, { useRef, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const KidsSlider = () => {
  const [products] = useState([
    { id: 1, thumbnail: "https://m.media-amazon.com/images/I/71oLyiFeseL._AC_SX322_CB1169409_QL70_.jpg" 
      


    },
    { id: 2, thumbnail: "https://m.media-amazon.com/images/I/51KEnfMvEFL._SY300_SX300_QL70_FMwebp_.jpg" },
    { id: 3, thumbnail: "https://m.media-amazon.com/images/I/71D7gxy6ojL._AC_UF480,480_SR480,480_.jpg" },
    { id: 4, thumbnail: "https://m.media-amazon.com/images/I/41UbqtnGdVL._AC_UF480,480_SR480,480_.jpg" },
    { id: 5, thumbnail: "https://m.media-amazon.com/images/I/71-wn23TdWL._AC_UL320_.jpg" },
    { id: 6, thumbnail: "https://m.media-amazon.com/images/I/71jVWy1TukL._AC_UL320_.jpg" },
    { id: 7, thumbnail: "https://m.media-amazon.com/images/I/6135iFd+KvL._AC_UL320_.jpg" },
    { id: 8, thumbnail: "https://m.media-amazon.com/images/I/61U8+Ee2-cL._AC_UL320_.jpg" },
    { id: 9, thumbnail: "https://m.media-amazon.com/images/I/718vJN4+nML._AC_UL320_.jpg" },
    { id: 10, thumbnail: "https://m.media-amazon.com/images/I/71FWtF9UcTL._AC_UL320_.jpg" },
    { id: 11, thumbnail: "https://m.media-amazon.com/images/I/61jA-v+qZ6L._AC_UL320_.jpg" },
    { id: 12, thumbnail: "https://m.media-amazon.com/images/I/61MaXYRGQeL._AC_UL320_.jpg" },
    { id: 13, thumbnail: "https://m.media-amazon.com/images/I/61-31DPnzIL._AC_UL320_.jpg" },
    { id: 14, thumbnail: "https://m.media-amazon.com/images/I/61SrBkiTm+L._AC_UL320_.jpg" },
    { id: 15, thumbnail: "https://m.media-amazon.com/images/I/51uGSYQhftL._AC_UL320_.jpg" },
    { id: 16, thumbnail: "https://m.media-amazon.com/images/I/71bYsMfWV1L._AC_UL320_.jpg" },
    { id: 17, thumbnail: "https://m.media-amazon.com/images/I/61LnIC2TShL._AC_UL320_.jpg" },
    { id: 18, thumbnail: "https://m.media-amazon.com/images/I/71fb9DnRwQS._AC_UL320_.jpg" },
    { id: 19, thumbnail: "https://m.media-amazon.com/images/I/51uB7i1cw+L._AC_UL320_.jpg" },
    { id: 20, thumbnail: "https://m.media-amazon.com/images/I/61othGB17iL._AC_UL320_.jpg" },
    { id: 21, thumbnail: "https://m.media-amazon.com/images/I/61OVEWnV6zL._AC_UL320_.jpg" },
    { id: 22, thumbnail: "https://m.media-amazon.com/images/I/61b8kxgpo7L._AC_UL320_.jpg" },
    { id: 23, thumbnail: "https://m.media-amazon.com/images/I/61wng8lkAHL._AC_UL320_.jpg" },
    { id: 24, thumbnail: "https://m.media-amazon.com/images/I/81S00b+-XML._AC_UL320_.jpg" },
    { id: 25, thumbnail: "https://m.media-amazon.com/images/I/61jiRVMQw4L._AC_UL320_.jpg" },
    { id: 26, thumbnail: "https://m.media-amazon.com/images/I/61wL0jg7QbL._AC_UL320_.jpg" },
    { id: 27, thumbnail: "https://m.media-amazon.com/images/I/71jy2YDuVQL._AC_UL320_.jpg" },
    { id: 28, thumbnail: "https://m.media-amazon.com/images/I/71ylnyUcG9L._AC_UL320_.jpg" },
    { id: 29, thumbnail: "https://m.media-amazon.com/images/I/71+uc5eLkyL._AC_UL320_.jpg" },
    { id: 30, thumbnail: "https://m.media-amazon.com/images/I/61ScH+KUaeL._AC_UL320_.jpg" }
  ]);

  const scrollRef = useRef();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className="container mt-5">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5>Kids Toys</h5>
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
              style={{ minWidth: "200px", cursor: "pointer", overflow: "hidden" }}
            >
             <img
  src={item.thumbnail}
  style={{
    height: "150px",
    objectFit: "contain",
    transition: "0.3s"
  }}
  className="toy-img"
  onClick={() =>
    navigate(`/product/${item.id}`, { state: item }) // ✅ FIX
  }
/>

              <h6 className="mt-2">Toy Product {item.id}</h6>

              <p className="text-success">₹ {100 + item.id * 10}</p>

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

      {/* CSS */}
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }

          .card:hover .toy-img {
            transform: scale(1.15);
          }
        `}
      </style>

    </div>
  );
};

export default KidsSlider;