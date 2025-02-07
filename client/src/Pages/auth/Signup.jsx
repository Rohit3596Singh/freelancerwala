import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff } from "lucide-react";

import { BackendUrl } from "../../constants";
import { handleSuccess } from "../../../utils";

const SignUp = () => {
  const [signupInfo, setSignupInfo] = useState({ name: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);


    const navigate= useNavigate();
  const handleChange = (e) => {
    setSignupInfo({ ...signupInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(signupInfo);

    const { name, email, password } = signupInfo;
    if (!name || !password || !email) {
      return alert("Name, email, and password are required!");
    }

    try {
      const url = `${BackendUrl}auth/signup`;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      });

      const result = await response.json();
      // console.log(result);
      const {success,message} = result;
      if (success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate("/login")
        },1000)
      }
    } catch (err) {
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={signupInfo.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={signupInfo.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="mb-3 position-relative">
            <label className="form-label">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="form-control pe-5" // Add padding to prevent overlap
              name="password"
              value={signupInfo.password}
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

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>

          {/* Login Link */}
          <div className="mt-3 text-center">
            <span>Already have an account? </span>
            <Link to="/login">Login</Link>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUp;
