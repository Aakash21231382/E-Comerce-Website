import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});
  const [showAll, setShowAll] = useState(false);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Product Error", error);
      }
    };

    fetchProducts();
  }, []);

  // ❤️ Like
  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 👉 Show limited or all
  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="container mt-5 pt-5">

      <h2 className="text-center mb-4">Products</h2>

      <div className="row">
        {visibleProducts.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            
            <div className="card h-100 shadow-sm position-relative">

              {/* ❤️ Like */}
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  cursor: "pointer",
                  fontSize: "20px"
                }}
                onClick={() => handleLike(item.id)}
              >
                {liked[item.id] ? "❤️" : "🤍"}
              </span>

              {/* Image */}
              <img
                  src={item.image || item.thumbnail}
                className="card-img-top p-3"
                alt=""
                style={{ height: "200px", objectFit: "contain" }}
              />

              {/* Body */}
              <div className="card-body d-flex flex-column">
                
                <h6>{item.title}</h6>

                <p className="text-muted small">
                  {item.description.slice(0, 80)}...
                </p>

                <p className="fw-bold text-success">
                  ₹ {item.price}
                </p>

                {/* Add to Cart */}
                <button
                  className="btn btn-warning mt-auto"
                  onClick={() => addToCart({
                    ...item,
                    image: item.thumbnail   // 👈 fix
                  })}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>
        ))}
      </div>


      {!showAll && (
        <div className="text-center mt-3">
          <button
            className="btn btn-success mb-5"
            onClick={() => setShowAll(true)}
          >
            See more
          </button>
        </div>
      )}

    </div>
  );
};

export default Product;