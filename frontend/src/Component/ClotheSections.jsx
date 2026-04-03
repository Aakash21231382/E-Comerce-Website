import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ClothSections = () => {
  const [mens, setMens] = useState([]);
  const [womens, setWomens] = useState([]);
  const [kids, setKids] = useState([]);
  const [others, setOthers] = useState([]);
  const [filter, setFilter] = useState("all");

  const navigate = useNavigate();
  // const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/mens-shirts")
      .then(res => res.json())
      .then(data => setMens(data.products));

    fetch("https://dummyjson.com/products/category/womens-dresses")
      .then(res => res.json())
      .then(data => setWomens(data.products));

    fetch("https://dummyjson.com/products/category/womens-shoes")
      .then(res => res.json())
      .then(data => setKids(data.products));

    fetch("https://dummyjson.com/products/category/mens-shoes")
      .then(res => res.json())
      .then(data => setOthers(data.products));
  }, []);

  const getFiltered = (data) => {
    if (filter === "low") return [...data].sort((a, b) => a.price - b.price);
    if (filter === "high") return [...data].sort((a, b) => b.price - a.price);
    return data;
  };

  const renderBox = (title, data, category) => (
    <div className="col-md-3 mb-4">
      
      <div className="bg-white p-3 shadow-sm h-100 border border-2 rounded-3">
            
        <h5 className="fw-bold mb-3">{title}</h5>

        <div className="row">
          {getFiltered(data).slice(0, 4).map((item) => (

            <div
              className="col-6 mb-3 zoom-box"
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              style={{ cursor: "pointer", overflow: "hidden" }} // 🔥 added
            >
              <img
                src={item.thumbnail}
                className="img-fluid zoom-img"
                style={{
                  height: "100px",
                  objectFit: "contain",
                  transition: "transform 0.3s ease" // 🔥 added
                }}
                alt={item.title}
              />

              <p className="small">{item.title.slice(0, 18)}</p>

            </div>

          ))}
        </div>

        <div
          className="text-primary small mt-2"
          style={{ cursor: "pointer" }}
          onClick={() => navigate(`/category/${category}`)}
        >
          See more →
        </div>

      </div>
    </div>
  );

  return (
    <div className="container mt-5">

      {/* FILTER */}
      <div className="d-flex justify-content-end mb-3">
     
        <select
          className="form-select w-auto"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>
      </div>

      <div className="row">
        {renderBox("Men", mens, "mens-shirts")}
        {renderBox("Women", womens, "womens-dresses")}
        {renderBox("Kids", kids, "womens-shoes")}
        {renderBox("Others", others, "mens-shoes")}
      </div>

      {/* 🔥 ZOOM CSS */}
      <style>
        {`
          .zoom-box:hover .zoom-img {
            transform: scale(1.2);
          }
        `}
      </style>

    </div>
  );
};

export default ClothSections;