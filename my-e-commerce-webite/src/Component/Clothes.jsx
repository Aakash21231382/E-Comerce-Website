import React, { useEffect, useState } from 'react';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Clothes = () => {
  const [clothes, setClothes] = useState([]);
  const [liked, setLiked] = useState({});
 const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const clothesFetch = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const result = await response.json();
        setClothes(result);
      } catch (error) {
        console.log("Clothes error ", error);
      }
    };
    clothesFetch();
  }, []);
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
    // alert("Item added to cart ");
  };

  const handleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
    alert(" You like this items")
  };

  const visiableProduct = showAll ? clothes :clothes.slice(0,8)

  return (
    <div className="container cloth-card">
      {/* <h1 className="text-center my-4 fs-1 text-black-50">Clothes</h1> */}

      <div className="row ">
        {visiableProduct.map((cloth) => (
          <div className="col-md-3 mb-4 " key={cloth.id}>
            
            <div className="card h-100 shadow-sm card-hover position-relative rounded-4 " >

             
              <span 
                className="like-btn"
                onClick={() => handleLike(cloth.id)}
              >
                {liked[cloth.id] ? "❤️" : "🤍"}
              </span>

              <img 
                src={cloth.image} 
                className="card-img-top p-3" 
                alt={cloth.title}
                style={{ height: "200px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h6 className="card-title">
                  {cloth.title}
                </h6>

                <p className="text-muted small">
                  {cloth.description.slice(0, 80)}...
                </p>

                <p className="text-success fw-bold fs-5">
                  ₹ {cloth.price}
                </p>

                <button 
  className="btn btn-warning mt-auto"
  onClick={() => handleAddToCart(cloth)}
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
            className="btn btn-dark "
            onClick={() => setShowAll(true)}
          >
            Show All 
          </button>
        </div>
      )}
    </div>
  );
};

export default Clothes;