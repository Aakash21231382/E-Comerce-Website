





import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container mt-5 pt-5 mb-5">
      <div className="card shadow-lg p-4 rounded-4 border-0">
        <div className="row">

          {/* 🔥 IMAGE SECTION */}
          <div className="col-md-6 text-center">
            <div className="bg-light p-3 rounded-4">
              <img
                src={product.thumbnail || product.images?.[0]}
                alt={product.title}
                className="img-fluid"
                style={{
                  height: "300px",
                  objectFit: "contain"
                }}
              />
            </div>
          </div>

          {/* 🔥 DETAILS SECTION */}
          <div className="col-md-6 d-flex flex-column justify-content-center">

            <h2 className="fw-bold">{product.title}</h2>

            <p className="text-muted mt-2">
              {product.description}
            </p>

            <h3 className="text-success fw-bold mt-2">
              ₹ {product.price}
            </h3>

            {/* ⭐ Rating */}
            <p className="text-warning">
              ⭐ {product.rating} / 5
            </p>

            {/* Buttons */}
            <div className="d-flex gap-3 mt-3">

              {/* 🛒 Add to Cart */}
              <button
                className="btn btn-warning px-4"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

              {/* ⚡ Buy Now */}
              <button
                className="btn btn-success px-4"
                onClick={() => {
                  addToCart(product);
                
                  navigate("/cart", {
                    state: { openPayment: true }  // 🔥 MAGIC
                  });
                }}
              >
                Buy Now
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;





// import React, { useEffect, useState, useContext } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const ProductDetail = () => {
//   const { state } = useLocation(); // ✅ data from click
//   const { id } = useParams(); // ✅ URL id
//   const { addToCart } = useContext(CartContext);

//   const [product, setProduct] = useState(state || null);

//   // 👉 fallback (agar direct URL open ho)
//   useEffect(() => {
//     if (!state) {
//       fetch(`https://dummyjson.com/products/${id}`)
//         .then(res => res.json())
//         .then(data => setProduct(data));
//     }
//   }, [id, state]);

//   if (!product) return <h3 className="text-center mt-5">Loading...</h3>;

//   return (
//     <div className="container mt-5 pt-5">

//       <div className="row">
        
//         <div className="col-md-5">
//           <img
//             src={product.thumbnail || product.images?.[0]}
//             className="img-fluid"
//             alt={product.title}
//           />
//         </div>

//         <div className="col-md-7">
//           <h3>{product.title}</h3>

//           <p className="text-muted">{product.description}</p>

//           <h4 className="text-success">₹ {product.price}</h4>

//           <button
//             className="btn btn-warning mt-3"
//             onClick={() => addToCart(product)}
//           >
//             Add to Cart
//           </button>
//         </div>

//       </div>

//     </div>
//   );
// };

// export default ProductDetail;