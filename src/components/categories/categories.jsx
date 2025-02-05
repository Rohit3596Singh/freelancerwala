import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

import FRAME1 from "../../assets/Frame85.png";
import FRAME2 from "../../assets/Frame86.png";
import FRAME3 from "../../assets/Frame88.png";
import FRAME4 from "../../assets/Frame89.png";

const Categories = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleSalesNavigation = (category) => {
    navigate(`/sales?category=${category}`); // Navigate to sales page with category as query param
  };

  return (
    <div className="my-5">
      <div className="row g-4 justify-content-center">
        <div
          className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
          onClick={() => handleSalesNavigation("premium-software")}
          style={{ cursor: "pointer" }}
        >
          <img src={FRAME1} alt="Premium Software" className="img-fluid mb-3" />
          <h5>Premium Software</h5>
        </div>

        <div
          className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
          onClick={() => handleSalesNavigation("essential-tools")}
          style={{ cursor: "pointer" }}
        >
          <img src={FRAME2} alt="Essential Tools" className="img-fluid mb-3" />
          <h5>Essential Tools</h5>
        </div>

        <div
          className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
          onClick={() => handleSalesNavigation("business-software")}
          style={{ cursor: "pointer" }}
        >
          <img src={FRAME3} alt="Business Software" className="img-fluid mb-3" />
          <h5>Business Software</h5>
        </div>

        <div
          className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
          onClick={() => handleSalesNavigation("developer-tools")}
          style={{ cursor: "pointer" }}
        >
          <img src={FRAME4} alt="Developer Tools" className="img-fluid mb-3" />
          <h5>Developer Tools</h5>
        </div>
      </div>
    </div>
  );
};

export default Categories;
