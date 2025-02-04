import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInfinity, FaShippingFast, FaBell, FaPhone, FaBoxes, FaSmile } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    { id: 1, icon: <FaInfinity />, title: "Lifetime Access", desc: "Endless possibilities with lifetime access—unlock a world of perpetual value effortlessly." },
    { id: 2, icon: <FaShippingFast />, title: "Instant Delivery", desc: "Access your products instantly on your mail." },
    { id: 3, icon: <FaBell />, title: "Regular Updates", desc: "Stay fresh with regular updates—ensuring your digital journey evolves with the latest innovations." },
    { id: 4, icon: <FaPhone />, title: "24/7 Support", desc: "Anytime, anywhere support—our 24/7 commitment to your success and satisfaction." },
    { id: 5, icon: <FaBoxes />, title: "Fully Organized Products", desc: "Effortless organization for a clutter-free digital experience—navigate seamlessly and find what matters." },
    { id: 6, icon: <FaSmile />, title: "10,000+ Happy Customers", desc: "Over 10,000 Happy Customers who have experienced the transformative power of our digital products." },
  ];

  return (
    <div className="p-3">
      {/* <h2 className="text-center fw-bold mb-4" style={{ color: "#001f61" }}>
        Why Choose Freelancerwala ?
      </h2> */}
      <div className="row g-4">
        {features.map((feature) => (
          <div key={feature.id} className="col-md-4">
            <div className="p-4 rounded-3 shadow-sm" style={{ backgroundColor: "#E3F2FD" }}>
              <div className="d-flex align-items-center mb-3">
                <div className="icon-container d-flex align-items-center justify-content-center me-3" 
                     style={{ width: "50px", height: "50px", backgroundColor: "#001f61", borderRadius: "50%" }}>
                  <span className="text-white fs-4">{feature.icon}</span>
                </div>
                <h5 className="fw-bold">{feature.title}</h5>
              </div>
              <p className="mb-0">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
