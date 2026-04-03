import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [liked, setLiked] = useState({});
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const { addToCart } = useContext(CartContext);



  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const visibleProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="container mt-5 pt-5">

      <h2 className="text-center mb-4">Products</h2>

      <div className="row">
        {visibleProducts.map((item) => (
          <div className="col-md-3 mb-4" key={item.id}>
            
            <div 
              className="card h-100 shadow-sm position-relative"
              onClick={() => navigate(`/product/${item.id}`)} // ✅ CLICK
              style={{ cursor: "pointer" }}
            >

              {/* ❤️ Like */}
              <span
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                  cursor: "pointer",
                  fontSize: "20px"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleLike(item.id);
                }}
              >
                {liked[item.id] ? "❤️" : "🤍"}
              </span>

              {/* Image */}
              <img
                src={item.thumbnail || item.images?.[0]}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                
                <h6>{item.title}</h6>

                <p className="text-muted small">
                  {item.description?.slice(0, 80)}...
                </p>

                <p className="fw-bold text-success">
                  ₹ {item.price}
                </p>

                {/* Add to Cart */}
                <button
                  className="btn btn-warning mt-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(item);
                  }}
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














// import React, { useEffect, useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const Product = () => {
//   const [products, setProducts] = useState([]);
//   const [liked, setLiked] = useState({});
//   const [showAll, setShowAll] = useState(false);
//   const navigate = useNavigate();

//   const { addToCart } = useContext(CartContext);

//   useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then(res => res.json())
//       .then(data => setProducts(data.products));
//   }, []);

//   const handleLike = (id) => {
//     setLiked((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const visibleProducts = showAll ? products : products.slice(0, 8);

//   return (
//     <div className="container mt-5 pt-5">

//       <h2 className="text-center mb-4">Products</h2>

//       <div className="row">
//         {visibleProducts.map((item) => (
//           <div className="col-md-3 mb-4" key={item.id}>
            
//             <div 
//               className="card h-100 shadow-sm position-relative"
//               onClick={() =>
//                 navigate(`/product/${item.id}`, { state: item }) // ✅ FIX
//               }
//               style={{ cursor: "pointer" }}
//             >

//               {/* ❤️ Like */}
//               <span
//                 style={{
//                   position: "absolute",
//                   right: "10px",
//                   top: "10px",
//                   cursor: "pointer",
//                   fontSize: "20px"
//                 }}
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   handleLike(item.id);
//                 }}
//               >
//                 {liked[item.id] ? "❤️" : "🤍"}
//               </span>

//               {/* Image */}
//               <img
//                 src={item.thumbnail || item.images?.[0]}
//                 className="card-img-top p-3"
//                 alt={item.title}
//                 style={{ height: "200px", objectFit: "contain" }}
//               />

//               <div className="card-body d-flex flex-column">
                
//                 <h6>{item.title}</h6>

//                 <p className="text-muted small">
//                   {item.description?.slice(0, 80)}...
//                 </p>

//                 <p className="fw-bold text-success">
//                   ₹ {item.price}
//                 </p>

//                 {/* Add to Cart */}
//                 <button
//                   className="btn btn-warning mt-auto"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     addToCart(item);
//                   }}
//                 >
//                   Add to Cart
//                 </button>

//               </div>

//             </div>

//           </div>
//         ))}
//       </div>

//       {!showAll && (
//         <div className="text-center mt-3">
//           <button
//             className="btn btn-success mb-5"
//             onClick={() => setShowAll(true)}
//           >
//             See more
//           </button>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Product;