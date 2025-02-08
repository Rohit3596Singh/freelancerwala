import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff } from "lucide-react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

import { BackendUrl } from "../../constants";
import { handleSuccess, handleError } from "../../../utils";

const AdminSignup = () => {
  const [adminInfo, setAdminInfo] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setAdminInfo({ ...adminInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = adminInfo;
    if (!name || !password || !email) {
      return handleError("Name, email, and password are required!");
    }

    try {
      const url = `${BackendUrl}admin/auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...adminInfo, isAdmin: true }), // Ensure admin role
      });

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => navigate("/admin/login"), 1000);
      } else {
        handleError(result.error?.details[0]?.message || message);
      }
    } catch (err) {
      handleError("Admin signup failed. Please try again.");
    }
  };

  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
          <h2 className="text-center mb-4">Admin Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={adminInfo.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={adminInfo.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 position-relative">
              <label className="form-label">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control pe-5"
                name="password"
                value={adminInfo.password}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                className="btn position-absolute top-50 end-0 translate-middle-y me-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            <p
          style={{ cursor: "pointer" }}
          onClick={()=>{
            navigate("/signup")
          }}
          >Signup as user</p>

            <div className="mt-3 text-center">
              <span>Already an admin? </span>
              <Link to="/admin/login">Login</Link>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminSignup;
