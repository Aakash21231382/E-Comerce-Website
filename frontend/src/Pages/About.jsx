import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mt-5 pt-5">

      {/* Heading */}
      <motion.div 
        className="text-center mb-5"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="fw-bold">About Us</h2>
        <p className="text-muted">We build modern shopping experience</p>
      </motion.div>

      {/* About Section */}
      <div className="row align-items-center mb-5">

        <motion.div 
          className="col-md-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
            className="img-fluid rounded shadow"
            alt=""
          />
        </motion.div>

        <motion.div 
          className="col-md-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h3>Who We Are</h3>
          <p className="text-muted">
            We are a modern e-commerce platform delivering high-quality
            products at affordable prices with fast delivery and secure
            payments.
          </p>

          <p className="text-muted">
            Our goal is to provide the best online shopping experience.
          </p>
        </motion.div>

      </div>

      {/* Stats Section */}
      <div className="row text-center mb-5">

        {[
          { num: "10K+", text: "Happy Customers" },
          { num: "500+", text: "Products" },
          { num: "4.8⭐", text: "Ratings" },
          { num: "24/7", text: "Support" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="col-md-3 mb-3"
            whileHover={{ scale: 1.1 }}
          >
            <div className="card p-4 shadow h-100">
              <h3 className="text-warning">{item.num}</h3>
              <p>{item.text}</p>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Features */}
      <div className="row text-center mb-5">

        {[
          { icon: "🚚", title: "Fast Delivery" },
          { icon: "💳", title: "Secure Payment" },
          { icon: "⭐", title: "Top Quality" },
        ].map((item, i) => (
          <motion.div 
            key={i}
            className="col-md-4 mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card p-4 shadow h-100">
              <h2>{item.icon}</h2>
              <h5>{item.title}</h5>
            </div>
          </motion.div>
        ))}

      </div>

      {/* Team */}
      <div className="text-center mb-4">
        <h3>Our Team</h3>
      </div>

      <div className="row text-center">

        {[
          { name: "Aakash", role: "Founder", img: "https://randomuser.me/api/portraits/men/32.jpg" },
          { name: "Priya", role: "Designer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
          { name: "Rahul", role: "Marketing", img: "https://randomuser.me/api/portraits/men/65.jpg" },
        ].map((member, i) => (
          <motion.div 
            key={i}
            className="col-md-4 mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="card p-3 shadow">
              <img
                src={member.img}
                className="rounded-circle mx-auto"
                style={{ width: "100px" }}
                alt=""
              />
              <h6 className="mt-3">{member.name}</h6>
              <p className="text-muted">{member.role}</p>
            </div>
          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default About;