import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import { Eye, EyeOff } from "lucide-react";
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import background from "../../assets/signupbackground.jpg" 

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
    <div
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundPositionY: "-200px", // Adjust this value as needed
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
    // overflow:"hidden"
  }}
>
  <Header />
  <div className=" d-flex align-items-center" style={{ width: "90%",height:"100vh" }}>
    <div className="container">
      <div className="row">
        
        {/* Left Side: Signup Form */}
        <div className="col-md-4 m-3 d-flex justify-content-start align-items-center">
          <div className="card p-4 shadow-lg" style={{ width: "400px", background: "white" }}>
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
    className="form-control pe-5"
    name="password"
    value={signupInfo.password}
    onChange={handleChange}
    required
    style={{ paddingRight: "40px" }} // Adjust padding to prevent overlap
  />
  <button
    type="button"
    className="btn position-absolute"
    style={{
      top: "50%",
      right: "10px", // Adjust as needed
      transform: "translateY(-12%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
    }}
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
  </button>
</div>


              {/* Submit Button */}
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
              <p style={{ cursor: "pointer" }} onClick={() => navigate("/admin/signup")}>
                Signup as admin
              </p>

              {/* Login Link */}
              <div className="mt-3 text-center">
                <span>Already have an account? </span>
                <Link to="/login">Login</Link>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>

      </div>
    </div>
  </div>
  <Footer />
</div>



  );
};

export default SignUp;
