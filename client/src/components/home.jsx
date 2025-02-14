import React from 'react';
import { useState,useEffect } from 'react';
import Header from "./header/header";
import Delivery from "./delivery/delivery"
import TrensingProduct from "./trendingProduct/trendingProduct"
import ShopNow from "./shopNow/shopNow"
import LatestProduct from "./latestProduct/latestProduct"
import Describtion from "./describtion/describtion"
import Footer from "./footer/footer"
import Categories from "./categories/categories"
import "./home.css"

import MEET from "../assets/team.jpg";

const Home = () => {
  const [cart, setCart] = useState([]);
  // ✅ Load cart from localStorage when the page loads
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []);
  return (
    <>
      <div>
      <Header cart={cart} />

        {/* Hero Section */}
        <div className="position-relative w-100" style={{ height: "500px", backgroundImage: `url(${MEET})`, backgroundSize: "cover", backgroundPosition: "center" }}>
          {/* Overlay for better text visibility */}
          <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-75"></div>

          {/* Text Content with Semi-Transparent Background */}
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-center px-4">
  <div className="bg-opacity-60 p-4 rounded">
    <h1 className="display-4 text-white mb-4 fw-bold">
      ELEVATE YOUR EXPERIENCE WITH{" "}
      <span style={{ color: "#0d6efd" }}>AFFORDABLE</span> DIGITAL PRODUCTS
    </h1>
    <p className="text-lg text-light max-w-2xl mx-auto fw-bold">
      Digital Innovation Within Reach - Quality You Deserve, Prices You'll Love!
    </p>
  </div>
</div>

        </div>

        <Categories/>

        <div className="p-3 my-4">
          <Delivery />
        </div>


        {/* Trending product */}
        <div className="d-flex justify-content-center m-5">
          <h1 className="fw-bold text-primary" style={{ color: "#0A58CA" }}>
            Trending Product
          </h1>
        </div>

        <TrensingProduct/>

        <ShopNow/>

        {/* Latest product */}
        <div className="d-flex justify-content-center m-5">
          <h1 className="fw-bold text-primary" style={{ color: "#0A58CA" }}>
            Latest Product
          </h1>
        </div>

        <LatestProduct/>

        {/*Why Choose FreelancerWala*/}
        <div className="d-flex justify-content-center m-5">
          <h1 className="fw-bold text-primary" style={{ color: "#0A58CA" }}>
            Why Choose Freelancerwala ?
          </h1>
        </div>

        <Describtion/>

        <Footer/>

        <div id="policy" className="text-center border-top mb-0" style={{backgroundColor:"#D3D3D3", marginBottom:"0"}}>
          <p>All rights reserved | <a href="#" className="">Privacy policy</a></p>
        </div>

      </div>
    </>
  );
};

export default Home;
