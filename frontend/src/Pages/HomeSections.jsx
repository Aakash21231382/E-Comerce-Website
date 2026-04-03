import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const HomeSections = () => {
  const [laptops, setLaptops] = useState([]);
  const [fragrances, setFragrances] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [decor, setDecor] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then(res => res.json())
      .then(data => setLaptops(data.products));

    fetch("https://dummyjson.com/products/category/fragrances")
      .then(res => res.json())
      .then(data => setFragrances(data.products));

    fetch("https://dummyjson.com/products/category/groceries")
      .then(res => res.json())
      .then(data => setGroceries(data.products));

    fetch("https://dummyjson.com/products/category/home-decoration")
      .then(res => res.json())
      .then(data => setDecor(data.products));
  }, []);

  const renderBox = (title, data) => (
    <div className="col-md-3 mb-4">
      <div className="bg-white p-3 shadow-sm h-100 border border-2 rounded-3">
        
        <h5 className="fw-bold mb-3">{title}</h5>
  
        <div className="row">
          {data.slice(0, 4).map((item) => (
            
            <div 
              className="col-6 mb-3"
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}  // ✅ FIX
              style={{ cursor: "pointer" }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="img-fluid"
                style={{ height: "100px", objectFit: "contain" }}
              />
  
              <p className="small mt-1">
                {item.title.slice(0, 20)}
              </p>
            </div>
  
          ))}
        </div>
  
        {/* See More */}
        <Link 
          to={`/category/${title.toLowerCase().replace(" ", "-")}`} 
          className="text-primary small"
        >
          See more
        </Link>
  
      </div>
    </div>
  );

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        {renderBox("Laptops", laptops)}
        {renderBox("Fragrances", fragrances)}
        {renderBox("Groceries", groceries)}
        {renderBox("Home Decoration", decor)}
      </div>
    </div>
  );
};

export default HomeSections;