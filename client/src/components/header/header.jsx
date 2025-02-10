import React, { useState } from "react";
import LOGO from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ cart = [] }) => {
  // const [storedCart,setStoredCart] =useState(cart)
  const navigate = useNavigate();
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  const goToCart = () => {
    navigate("/addtocart", { state: { cart:storedCart } });
  };

  const handleNavigationHome = () => {
    navigate("/home");
  };

  return (
    <div className="w-100 px-4 py-3 bg-white shadow-sm">
      <div className="row align-items-center">
        {/* Left: Logo */}
        <div
          className="col-12 col-md-4 d-flex align-items-center gap-2"
          onClick={handleNavigationHome}
          style={{ cursor: "pointer" }}
        >
          <img src={LOGO} alt="Logo" className="h-8" />
          <span className="h5 font-weight-bold text-primary">
            FREELANCERWALA
          </span>
        </div>

        {/* Navigation */}
        <div className="col-12 col-md-4 text-center">
          <nav className="d-flex justify-content-center">
            <a
              href="#"
              className="d-flex align-items-center gap-1 text-decoration-none text-dark hover:text-primary mx-2"
              onClick={handleNavigationHome}
            >
              <i className="bi bi-house-door-fill"></i>Home
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
              About us
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
              Shop
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
              Contact us
            </a>
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="col-12 col-md-4 text-end mt-3 mt-md-0 d-flex justify-content-end gap-3">
          <i className="bi bi-search" style={{ fontSize: "1.5rem" }}></i>
          <i className="bi bi-heart-fill" style={{ fontSize: "1.5rem" }}></i>

          {/* Cart Icon with Badge */}
          <div style={{ position: "relative", cursor: "pointer" }} onClick={goToCart}>
            <i className="bi bi-cart-dash" style={{ fontSize: "1.5rem" }}></i>
            {cart.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.75rem",
                }}
              >
                {cart.length}
              </span>
            )}
          </div>

          <i className="bi bi-person-fill" style={{ fontSize: "1.5rem" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;