import React, { useState } from "react";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // save user in localStorage
    localStorage.setItem("user", JSON.stringify(form));

    alert("Signup Successful ✅");
    window.location.href = "/login";
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        
        <h3 className="text-center mb-3">Create Account</h3>

        <form onSubmit={handleSignup}>

          <input name="name" placeholder="Name" className="form-control mb-3" onChange={handleChange} />
          <input name="phone" placeholder="Phone" className="form-control mb-3" onChange={handleChange} />
          <input name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} />

          <button className="btn btn-warning w-100">Sign Up</button>

        </form>

      </div>
    </div>
  );
};

export default Signup;