// import React, { useEffect, useState, useContext } from 'react';
// import { CartContext } from '../context/CartContext';
// import { useNavigate } from 'react-router';

// const Clothes = () => {
//   const [clothes, setClothes] = useState([]);
//   const [liked, setLiked] = useState({});
//   const [showAll, setShowAll] = useState(false);
// const navigate=useNavigate();
//   useEffect(() => {
//     const clothesFetch = async () => {
//       try {
//         const response = await fetch("https://dummyjson.com/products/category/smartphones");
//         const result = await response.json();
//         setClothes(result.products);
//       } catch (error) {
//         console.log("Clothes error ", error);
//       }
//     };
//     clothesFetch();
//   }, []);

//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = (item) => {
//     addToCart(item);
//   };

//   const handleLike = (id) => {
//     setLiked((prev) => ({
//       ...prev,
//       [id]: !prev[id]
//     }));
//   };

//   const visibleProduct = showAll ? clothes : clothes.slice(0, 8);

//   return (
//     <div className="container cloth-card">
//       <div className="row">
//         {visibleProduct.map((cloth) => (
//           <div className="col-md-3 mb-4" key={cloth.id}>
            
//             {/* <div className="card h-100 shadow-sm card-hover position-relative rounded-4"> */}
//             <div 
//   className="card p-3 h-100 shadow-sm d-flex flex-column"
//   onClick={() => navigate(`/product/${item.id}`)}
//   style={{ cursor: "pointer" }}
// >

//               <span 
//                 className="like-btn"
//                 onClick={() => handleLike(cloth.id)}
//               >
//                 {liked[cloth.id] ? "❤️" : "🤍"}
//               </span>

//               {/* ✅ FIX HERE */}
//               <img 
//                 src={cloth.thumbnail || cloth.images[0]} 
//                 className="card-img-top p-3" 
//                 alt={cloth.title}
//                 style={{ height: "200px", objectFit: "contain" }}
//               />

//               <div className="card-body d-flex flex-column">
//                 <h6 className="card-title">
//                   {cloth.title}
//                 </h6>

//                 <p className="text-muted small">
//                   {cloth.description?.slice(0, 80)}...
//                 </p>

//                 <p className="text-success fw-bold fs-5">
//                   ₹ {cloth.price}
//                 </p>

//                 <button
//   className="btn btn-warning mt-auto"
//   onClick={(e) => {
//     e.stopPropagation();   // ❌ navigation stop
//     addToCart(item);
//   }}
// >
//   Add to Cart
// </button>
//               </div>

//             </div>

//           </div>
//         ))}
//       </div>

//       {!showAll && (
//         <div className="text-center mt-3">
//           <button
//             className="btn btn-dark"
//             onClick={() => setShowAll(true)}
//           >
//             Show All
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Clothes;






import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Phone = () => {
  const [clothes, setClothes] = useState([]);
  const [liked, setLiked] = useState({});
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const clothesFetch = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products/category/smartphones");
        const result = await response.json();
        setClothes(result.products);
      } catch (error) {
        console.log("Clothes error ", error);
      }
    };
    clothesFetch();
  }, []);

  const { addToCart } = useContext(CartContext);

  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const visibleProduct = showAll ? clothes : clothes.slice(0, 8);

  return (
    <div className="container cloth-card"> 
    <h1 className='text-danger text-center mb-2'>Phone</h1>
      <div className="row">
        {visibleProduct.map((cloth) => (
          <div className="col-md-3 mb-4" key={cloth.id}>
            
            <div 
              className="card p-3 h-100 shadow-sm d-flex flex-column"
              onClick={() => navigate(`/product/${cloth.id}`)} 
              style={{ cursor: "pointer" }}
            >

              {/* ❤️ Like */}
              <span 
                className="like-btn"
                onClick={(e) => {
                  e.stopPropagation(); // ❌ navigation stop
                  handleLike(cloth.id);
                }}
              >
                {liked[cloth.id] ? "❤️" : "🤍"}
              </span>

              <img 
                src={cloth.thumbnail || cloth.images?.[0]} 
                className="card-img-top p-3" 
                alt={cloth.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h6>{cloth.title}</h6>

                <p className="text-muted small">
                  {cloth.description?.slice(0, 80)}...
                </p>

                <p className="text-success fw-bold fs-5">
                  ₹ {cloth.price}
                </p>

                <button
                  className="btn btn-warning mt-auto"
                  onClick={(e) => {
                    e.stopPropagation(); // ❌ prevent navigation
                    addToCart(cloth);
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
            className="btn btn-dark"
            onClick={() => setShowAll(true)}
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default Phone;