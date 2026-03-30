import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from "react-router";
import { CartContext } from "../context/CartContext";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-dark px-4 fixed-top   shadow ">
      {/* Logo */}
      {/* <a className="navbar-brand fw-bold" href="#">
        Aak<span className="text-warning fs-2">a</span>sh
      </a> */}

      <NavLink className="navbar-brand fw-bold">
        Aak<span className="text-warning fs-2">a</span>sh{" "}
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
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">
          <li className="nav-item">
            <NavLink className="nav-link active" href="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/product">
              Shop
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/service">
              Service
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link" to="/product">
              Product
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Search */}
        <form className="d-flex me-3">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search product"
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>

        {/* Icons */}
        <div className="d-flex align-items-center gap-3 text-white me-3">
          <NavLink
            to="/profile"
            className="d-flex align-items-center gap-3 text-white me-3"  
            onClick={() => navigate("/profile")}
          >
            <FaUser size={18} />
          </NavLink>

          {/* <NavLink className="d-flex align-items-center gap-3 text-white me-3" to="/cart"> <CiShoppingCart size={22}  /> </NavLink> */}

          <NavLink to="/cart" className="position-relative text-white">
            <CiShoppingCart size={24} />
            <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
              {cart.length}
            </span>
          </NavLink>
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <NavLink to="/login" className="btn btn-outline-light">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn 
          btn-warning
          ">
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
