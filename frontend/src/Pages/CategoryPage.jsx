import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CategoryPage = () => {
  const { name } = useParams();
  const [products, setProducts] = useState([]);

  const { addToCart } = useContext(CartContext); // ✅ ADD
const navigate= useNavigate()
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${name}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [name]);

  return (
    <div className="container mt-5 pt-5  " >
      <h2 className="mb-4 text-capitalize ">{name}</h2>

      <div className="row" >
        {products.map((item) => (
          <div className="col-md-3 mb-4" key={item.id} >
            {/* <div className="card p-3 h-100 shadow-sm d-flex flex-column"> */}
            <div 
  className="card p-3 h-100 shadow-sm d-flex flex-column"
  onClick={() => navigate(`/product/${item.id}`)}
  style={{ cursor: "pointer" }}
>

              <img
                src={item.thumbnail || item.images?.[0]}
                alt={item.title}
                className="img-fluid"
                style={{ height: "150px", objectFit: "contain" }}
              />

              <h6 className="mt-2">{item.title}</h6>

              <p className="text-success fw-bold">₹ {item.price}</p>

              {/* ✅ ADD TO CART BUTTON */}
              <button
  className="btn btn-warning mt-auto"
  onClick={(e) => {
    e.stopPropagation();   // ❌ navigation stop
    addToCart(item);
  }}
>
  Add to Cart
</button>


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;