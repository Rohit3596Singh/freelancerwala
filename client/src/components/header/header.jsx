// Header.jsx
import React from "react";
import LOGO from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom"; // Use this hook to navigate

const Header = ({ cart }) => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const goToCart = () => {
    navigate("/addtocart", { state: { cart } }); // Pass cart state via React Router's state
  };

  const handleNavigationHome =() =>{
    navigate("/home");
  }

  return (
    <div className="w-100 px-4 py-3 bg-white shadow-sm">
      <div className="row align-items-center">
        {/* Left: Logo */}
        <div
          className="col-12 col-md-4 d-flex align-items-center gap-2"
          onClick={handleNavigationHome}
          style={{ cursor: 'pointer' }}
        >
          <img src={LOGO} alt="Logo" className="h-8" />
          <span className="h5 font-weight-bold text-primary">FREELANCERWALA</span>
        </div>

        {/* Navigation */}
        <div className="col-12 col-md-4 text-center">
          <nav className="d-flex justify-content-center">
            <a href="#" className="d-flex align-items-center gap-1 text-decoration-none text-dark hover:text-primary mx-2" onClick={handleNavigationHome}>
              <i className="bi bi-house-door-fill"></i>Home
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">About us</a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">Shop</a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">Contact us</a>
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="col-12 col-md-4 text-end mt-3 mt-md-0 d-flex justify-content-end gap-3">
          <i className="bi bi-search" style={{ fontSize: "1.5rem" }}></i>
          <i className="bi bi-heart-fill" style={{ fontSize: "1.5rem" }}></i>
          <i className="bi bi-cart-dash" style={{ fontSize: "1.5rem" }} onClick={goToCart}></i>
          <i className="bi bi-person-fill" style={{ fontSize: "1.5rem" }}></i>
        </div>
      </div>
    </div>
  );
};

export default Header;