import React from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light pt-5">

      <div className="container">
        <div className="row">

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h4 className="text-white"><a className="navbar-brand fw-bold" href="#">
        Aak<span className="text-warning fs-2">a</span>sh
      </a>
</h4>
            <p className="small">
              We are dedicated to providing the best service to our customers.
              Our mission is to create innovative solutions.
            </p>

            <div className="d-flex gap-2 mt-3">
              {/* <FaFacebookF className="icon" /> */}
              <FaFacebookF  />
              <FaTwitter />
              <FaInstagram />
              <FaLinkedin />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li className=""><Link className="footer-link text-decoration-none text-white">Home</Link></li>
              <li className=""><Link className="footer-link text-decoration-none text-white">Shop</Link></li>
              <li className=""><Link className="footer-link text-decoration-none text-white">About</Link></li>
              <li className=""><Link className="footer-link text-decoration-none text-white">Service</Link></li>
              <li className=""><Link className="footer-link text-decoration-none text-white">Product</Link></li>
              <li className=""><Link className="footer-link text-decoration-none text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><Link  className="footer-link text-decoration-none text-white">FAQ</Link></li>
              <li><Link  className="footer-link text-decoration-none text-white">Help Center</Link></li>
              <li><Link  className="footer-link text-decoration-none text-white ">Privacy Policy</Link></li>
              <li><Link  className="footer-link text-decoration-none text-white">Terms of Service</Link></li>
              <li><Link  className="footer-link text-decoration-none text-white">Contact Support</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5>Newsletter</h5>
            <p className="small">
              Subscribe to our newsletter for updates and news.
            </p>

            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
              <button className="btn btn-warning">➤</button>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-top mt-4 pt-3 small">
        <p className="mb-1">
          Privacy Policy | Terms of Service | Cookie Policy
        </p>
        <p>© 2024 CompanyName. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;