import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (
      user &&
      user.email === form.email &&
      user.password === form.password
    ) {
      localStorage.setItem("isLogin", true);
      alert("Login Successful ✅");
      window.location.href = "/";
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        
        <h3 className="text-center mb-3">Login</h3>

        <form onSubmit={handleLogin}>

          <input name="email" placeholder="Email" className="form-control mb-3" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" className="form-control mb-3" onChange={handleChange} />

          <button className="btn btn-success w-100">Login</button>

        </form>

      </div>
    </div>
  );
};

export default Login;