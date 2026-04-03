import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { cart, search, setSearch } = useContext(CartContext);

  // 🔥 MENU CLOSE FUNCTION
  const closeMenu = () => {
    const menu = document.getElementById("navbarContent");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-lg-4 fixed-top shadow">
      
      {/* Logo */}
      <NavLink to="/" className="navbar-brand fw-bold" onClick={closeMenu}>
        Aak<span className="text-warning fs-2">a</span>sh
      </NavLink>

      {/* Mobile Toggle */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Content */}
      <div className="collapse navbar-collapse" id="navbarContent">

        {/* Menu */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-2 gap-lg-3 text-center">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/about" onClick={closeMenu}>About</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/Services" onClick={closeMenu}>Services</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/contact" onClick={closeMenu}>Contact</NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/order" onClick={closeMenu}>Order History</NavLink>
          </li>
        </ul>

        {/* 🔥 SEARCH */}
        <form 
          className="d-flex my-2 my-lg-0 me-lg-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search product..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-warning" type="button">
            Search
          </button>
        </form>

        {/* Icons */}
        <div className="d-flex justify-content-center align-items-center gap-4 text-white my-2 my-lg-0 me-lg-3">
          
          <NavLink to="/profile" className="text-white" onClick={closeMenu}>
            <FaUser size={20} />
          </NavLink>

          <NavLink to="/cart" className="position-relative text-white" onClick={closeMenu}>
            <CiShoppingCart size={26} />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              {cart.length}
            </span>
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="d-flex flex-column flex-lg-row gap-2 text-center">
          <NavLink to="/login" className="btn btn-outline-light" onClick={closeMenu}>
            Login
          </NavLink>
          <NavLink to="/signup" className="btn btn-warning" onClick={closeMenu}>
            Sign Up
          </NavLink>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;





// import React, { useContext } from "react";
// import { FaUser } from "react-icons/fa";
// import { CiShoppingCart } from "react-icons/ci";
// import { NavLink } from "react-router-dom";
// import { CartContext } from "../context/CartContext";

// const Navbar = () => {
//   const { cart, search, setSearch } = useContext(CartContext);

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top shadow">
      
//       {/* Logo */}
//       <NavLink to="/" className="navbar-brand fw-bold">
//         Aak<span className="text-warning fs-2">a</span>sh
//       </NavLink>

//       {/* Mobile Toggle */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarContent"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       {/* Navbar Content */}
//       <div className="collapse navbar-collapse" id="navbarContent">

//         {/* Menu */}
//         <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
//           <li className="nav-item">
//             <NavLink className="nav-link" to="/">Home</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/about">About</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/service">Service</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/contact">Contact</NavLink>
//           </li>

//           <li className="nav-item">
//             <NavLink className="nav-link" to="/order">Order History</NavLink>
//           </li>
//         </ul>

//         {/* 🔥 SEARCH (WORKING) */}
//         <form 
//           className="d-flex me-3"
//           onSubmit={(e) => e.preventDefault()}   // ❌ reload stop
//         >
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search product..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//           <button className="btn btn-warning" type="button">
//             Search
//           </button>
//         </form>

//         {/* Icons */}
//         <div className="d-flex align-items-center gap-3 text-white me-3">
          
//           <NavLink to="/profile" className="text-white">
//             <FaUser size={18} />
//           </NavLink>

//           <NavLink to="/cart" className="position-relative text-white">
//             <CiShoppingCart size={24} />
//             <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
//               {cart.length}
//             </span>
//           </NavLink>
          

//         </div>

//         {/* Buttons */}
//         <div className="d-flex gap-2">
//           <NavLink to="/login" className="btn btn-outline-light">
//             Login
//           </NavLink>
//           <NavLink to="/signup" className="btn btn-warning">
//             Sign Up
//           </NavLink>
//         </div>

//       </div>
//     </nav>
//   );
// };

// export default Navbar;
