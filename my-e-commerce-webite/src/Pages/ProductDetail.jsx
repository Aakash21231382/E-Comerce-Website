import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="container mt-5 pt-5 ">
      
      <div className="row">

        <div className="col-md-6 border border-black rounded-5">
          <img
            src={product.thumbnail || product.image}
            className="img-fluid"  //src={item.image || item.thumbnail}
            alt=""
          />
        </div>

        <div className="col-md-6">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4 className="text-success">₹ {product.price}</h4>

          <button
            className="btn btn-warning"
            onClick={() =>
              addToCart({ ...product, image: product.thumbnail })
            }
          >
            Add to Cart
          </button>
        </div>

      </div>

    </div>
  );
};

export default ProductDetail;