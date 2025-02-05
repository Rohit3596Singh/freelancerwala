import React from 'react';

import Header from "./header/header";
import Delivery from "./delivery/delivery"
import TrensingProduct from "./trendingProduct/trendingProduct"
import ShopNow from "./shopNow/shopNow"
import LatestProduct from "./latestProduct/latestProduct"
import Describtion from "./describtion/describtion"
import Footer from "./footer/footer"
import "./home.css"

import MEET from "../assets/team.jpg";
import FRAME1 from "../assets/Frame85.png";
import FRAME2 from "../assets/Frame86.png";
import FRAME3 from "../assets/Frame88.png";
import FRAME4 from "../assets/Frame89.png";

const Home = () => {
  return (
    <>
      <div>
        <Header />

        {/* Hero Section */}
        <div className="position-relative w-100" style={{ height: "500px", backgroundImage: `url(${MEET})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          {/* Overlay for better text visibility */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>

          {/* Text Content with Semi-Transparent Background */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center px-4">
            <div className=" bg-opacity-60 p-4 rounded">
              <h1 className="display-4 text-white mb-4">
                ELEVATE YOUR EXPERIENCE WITH AFFORDABLE DIGITAL PRODUCTS
              </h1>
              <p className="text-lg text-light max-w-2xl mx-auto">
                Digital Innovation Within Reach - Quality You Deserve, Prices You'll Love!
              </p>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="my-5">
          {/* <div className="container"> */}
            <div className="row g-4 justify-content-center">
              <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                <img src={FRAME1} alt="Premium Software" className="img-fluid mb-3" />
                <h5>Premium Software</h5>
              </div>

              <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                <img src={FRAME2} alt="Premium Software" className="img-fluid mb-3" />
                <h5>Premium Software</h5>
              </div>

              <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                <img src={FRAME3} alt="Premium Software" className="img-fluid mb-3" />
                <h5>Premium Software</h5>
              </div>

              <div className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center">
                <img src={FRAME4} alt="Premium Software" className="img-fluid mb-3" />
                <h5>Premium Software</h5>
              </div>
            </div>
          {/* </div> */}
        </div>

        {/* <Delivery/> */}

        {/* Trending product */}
        <div className="d-flex justify-content-center m-5">
          <h1 className="fw-bold text-primary" style={{ color: "#0A58CA" }}>
            Trending Product
          </h1>
        </div>

        <TrensingProduct/>

        <ShopNow/>

        <LatestProduct/>

        {/*Why Choose FreelancerWala*/}
        <div className="d-flex justify-content-center m-5">
          <h1 className="fw-bold text-primary" style={{ color: "#0A58CA" }}>
            Why Choose Freelancerwala ?
          </h1>
        </div>

        <Describtion/>

        <Footer/>

        <div className="text-center border-top mb-0" style={{backgroundColor:"#D3D3D3", marginBottom:"0%"}}>
          <p>All rights reserved | <a href="#" className="">Privacy policy</a></p>
        </div>

      </div>
    </>
  );
};

export default Home;
