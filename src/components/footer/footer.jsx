import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaInstagram } from "react-icons/fa";
import LOGO from "../../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="footer bg-white py-5 border-top">
      <div className="p-3">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
  <h5 className="fw-bold d-flex align-items-center">
    <img
      src={LOGO} // Replace with actual logo path
      alt="Freelancerwala Logo"
      width={30}
      className="me-2"
    />
    FREELANCERWALA
  </h5>
  <p className="text-muted mt-3">
    Effortless organization for a clutter-free digital experience—
    navigate seamlessly and find what matters.
  </p>
  <div className="d-flex gap-3">
    <a href="#" className="text-dark"><FaEnvelope size={24} /></a>
    <a href="#" className="text-dark"><FaPhone size={24} /></a>
    <a href="#" className="text-dark"><FaWhatsapp size={24} /></a>
    <a href="#" className="text-dark"><FaInstagram size={24} /></a>
  </div>
</div>

          {/* Middle Section */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
  <h6 className="fw-bold mb-3">Quick Links</h6>
  <ul className="list-unstyled">
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Track Orders</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Shipping</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Wishlist</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">My Account</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Order History</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Returns</a></li>
  </ul>
</div>


          {/* Middle Section */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
  <h6 className="fw-bold mb-3">Quick Links</h6>
  <ul className="list-unstyled">
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Track Orders</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Shipping</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Wishlist</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">My Account</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Order History</a></li>
    <li className="mb-2"><a href="#" className="text-decoration-none text-muted">Returns</a></li>
  </ul>
</div>

          {/* Right Section */}
          <div className="col-12 col-md-3 d-flex flex-column align-items-center justify-content-center text-center">
  <h6 className="fw-bold mb-3">Talk To Us</h6>
  <p className="text-muted">Got Questions? Call us</p>
  <p className="mb-2">
    <a href="tel:+67041390762" className="text-decoration-none text-muted">+670 413 90 762</a>
  </p>
  <p className="mb-2">
    <a href="mailto:support@shofy.com" className="text-decoration-none text-muted">support@shofy.com</a>
  </p>
  <p className="mb-0">
    <a href="#" className="text-decoration-none text-muted">
      79 Sleepy Hollow St.<br />Jamaica, New York 1432
    </a>
  </p>
</div>

        </div>

        {/* Bottom Section */}
        
      </div>
    </footer>
  );
};

export default Footer;