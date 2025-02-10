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
    // <div>
    //   <Header />
    // <div className="container d-flex justify-content-center align-items-center vh-100"
    // style={{
      
    //   backgroundImage: `url(${background})`,
    // backgroundSize: "cover",
    // backgroundPosition: "end",
    // backgroundRepeat: "no-repeat",
    // minHeight: "100vh",
    // }}
    // >
    //   <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
    //     <h2 className="text-center mb-4">Sign Up</h2>
    //     <form onSubmit={handleSubmit}>
    //       {/* Name Input */}
    //       <div className="mb-3">
    //         <label className="form-label">Name</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="name"
    //           value={signupInfo.name}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>

    //       {/* Email Input */}
    //       <div className="mb-3">
    //         <label className="form-label">Email</label>
    //         <input
    //           type="email"
    //           className="form-control"
    //           name="email"
    //           value={signupInfo.email}
    //           onChange={handleChange}
    //           required
    //         />
    //       </div>

    //       {/* Password Input with Toggle */}
    //       <div className="mb-3 position-relative">
    //         <label className="form-label">Password</label>
    //         <input
    //           type={showPassword ? "text" : "password"}
    //           className="form-control pe-5" // Add padding to prevent overlap
    //           name="password"
    //           value={signupInfo.password}
    //           onChange={handleChange}
    //           required
    //         />
    //         <button
    //           type="button"
    //           className="btn position-absolute top-50 end-0 translate-middle-y me-2"
    //           onClick={() => setShowPassword(!showPassword)}
    //         >
    //           {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
    //         </button>
    //       </div>

    //       {/* Submit Button */}
    //       <button type="submit" className="btn btn-primary w-100">
    //         Sign Up
    //       </button>
    //       <p
    //       style={{ cursor: "pointer" }}
    //       onClick={()=>{
    //         navigate("/admin/signup")
    //       }}
    //       >Signup as admin</p>

    //       {/* Login Link */}
    //       <div className="mt-3 text-center">
    //         <span>Already have an account? </span>
    //         <Link to="/login">Login</Link>
    //       </div>
    //     </form>
    //     <ToastContainer />
    //   </div>
    // </div>
    // <Footer />
    // </div>






















<div
  style={{
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    // backgroundPosition: "right",
    backgroundPosition:"center",
    backgroundPositionY:"start",
    backgroundRepeat: "no-repeat",
    Height: "90vh",
    width: "100%",  // Full width to cover the entire screen
    // display: "flex",
    // justifyContent: "flex-start", // Aligns content to the left
  }}
>
  <Header />
  <div className="vh-100 d-flex align-items-center" style={{ width: "90%",height:"92%" }}>
    <div className="container">
      <div className="row">
        
        {/* Left Side: Signup Form */}
        <div className="col-md-4 d-flex justify-content-start align-items-center">
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
