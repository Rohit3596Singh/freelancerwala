import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

import { BackendUrl } from "../../constants";
import { handleSuccess, handleError } from "../../../utils";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      return handleError("Email and password are required");
    }

    try {
      const url = `${BackendUrl}admin/auth/login`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      const { success, message, jwtToken, name, error } = result;

      if (success) {
        handleSuccess(message);
        localStorage.setItem("adminToken", jwtToken);
        localStorage.setItem("adminName", name);
        setTimeout(() => navigate("/admin/uploadproduct"), 1000);
      } else if (error) {
        handleError(error?.details[0]?.message || message);
      } else {
        handleError(message);
      }
    } catch (err) {
      handleError("Login failed. Please try again later.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Admin Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">Login</button>
            <p
          style={{ cursor: "pointer" }}
          onClick={()=>{
            navigate("/login")
          }}
          >Login as user</p>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLogin;
