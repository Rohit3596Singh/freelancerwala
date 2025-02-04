import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "../../assets/Frame89.png"

const Banner = () => {
  return (
    <div className="p-3 my-5  rounded-5" style={{backgroundColor:"#A4D4FF"}}>
      <div className="row align-items-center justify-content-around banner">

        {/* Left Side: Text */}
        <div className="col-md-6 p-5">
          <p className="short-text">Short text here,</p>
          <h2 className="fw-bold">
            Put the long text here, <br />
            put the another long text here
          </h2>
          <button 
                className="btn btn-dark-blue mt-3" 
                style={{ background: "#043866", color: "white" }}
                >
                Shop Now
            </button>

        </div>

        {/* Right Side: Image Section */}
        <div className="col-md-6 d-flex justify-content-center">
          <div className="image-box">
            <img src={img} alt="Main Product" className="main-image" />
            {/* <img src="/assets/logo1.png" alt="Logo 1" className="overlay-image logo1" />
            <img src="/assets/logo2.png" alt="Logo 2" className="overlay-image logo2" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
