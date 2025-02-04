import React from 'react';

const Delivery = () => {
  return (
    <div className="w-100" style={{ height: "20vh", backgroundColor: "#f8f9fa" }}>
      <div className=" h-100">
        <div className="row h-100 align-items-center text-center" style={{backgroundColor:"#f0f8ff"}}>
          {/* Delivery Items */}
          <div className="col-12 col-sm-6 col-md-3">
            <i className="bi bi-truck display-4"></i>
            <h4 className="mt-2">Free Delivery</h4>
            <p>Orders from all items</p>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <i className="bi bi-credit-card display-4"></i>
            <h4 className="mt-2">Secure Payment</h4>
            <p>100% secure payment</p>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <i className="bi bi-clock-history display-4"></i>
            <h4 className="mt-2">24/7 Support</h4>
            <p>Call us anytime</p>
          </div>

          <div className="col-12 col-sm-6 col-md-3">
            <i className="bi bi-tag display-4"></i>
            <h4 className="mt-2">Best Prices</h4>
            <p>Guaranteed low prices</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
