// import React, { createContext, useState } from "react";

// export const CartContext = createContext();

// const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   // Add to Cart
//   const addToCart = (product) => {
//     const exist = cart.find((item) => item.id === product.id);

//     if (exist) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, qty: item.qty + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, qty: 1 }]);
//     }
//   };

//   // Remove
//   const removeFromCart = (id) => {
//     setCart(cart.filter((item) => item.id !== id));
//   };

//   // Increase qty
//   const increaseQty = (id) => {
//     setCart(
//       cart.map((item) =>
//         item.id === id ? { ...item, qty: item.qty + 1 } : item
//       )
//     );
//   };

//   // Decrease qty
//   const decreaseQty = (id) => {
//     setCart(
//       cart
//         .map((item) =>
//           item.id === id ? { ...item, qty: item.qty - 1 } : item
//         )
//         .filter((item) => item.qty > 0)
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         addToCart,
//         removeFromCart,
//         increaseQty,
//         decreaseQty
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;












import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  // 👉 Load from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // 👉 Save to localStorage (auto)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add to Cart
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  // Remove
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase
  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrease
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;