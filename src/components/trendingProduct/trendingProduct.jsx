import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// import img1 from "../assets/image1.png"; 
// import img2 from "../assets/image2.png"; 
// import img3 from "../assets/image3.png"; 
// import img4 from "../assets/image4.png"; 
// import img5 from "../assets/image5.png"; 
// import img6 from "../assets/image6.png"; 



const products = [
  {
    id: 1,
    image: "https://via.placeholder.com/150", // Replace with actual image path
    company: "Company name",
    description: "Product description",
    rating: 3,
    price: "$1234",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/150",
    company: "Company name",
    description: "Product description",
    rating: 4,
    price: "$1234",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/150",
    company: "Company name",
    description: "Product description",
    rating: 5,
    price: "$1234",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/150",
    company: "Company name",
    description: "Product description",
    rating: 3,
    price: "$1234",
  },
  {
    id: 5,
    image: "https://via.placeholder.com/150",
    company: "Company name",
    description: "Product description",
    rating: 4,
    price: "$1234",
  },
  {
    id: 6,
    image: "https://via.placeholder.com/150",
    company: "Company name",
    description: "Product description",
    rating: 3,
    price: "$1234",
  },
];

const ProductCard = () => {
  return (
    <div className="m-3">
      {/* <h2 className="fw-bold text-primary text-center mb-4">Trending Products</h2> */}
      
      <div className="row g-4">
        {products.map((product) => (
          <div key={product.id} className="col-12 col-sm-6 col-md-4">
            <div className="card border-0 shadow-sm">
              <div className="position-relative">
                <img src={product.image} alt="Product" className="card-img-top p-3" />
                <i className="bi bi-heart position-absolute top-0 end-0 p-3"></i>
              </div>

              <div className="card-body">
                <p className="text-muted m-0">{product.company}</p>
                <h5 className="fw-bold">{product.description}</h5>

                {/* Star Rating */}
                <div className="mb-2">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className={`bi bi-star${index < product.rating ? "-fill text-warning" : ""}`}></i>
                  ))}
                </div>

                {/* Price */}
                <div className="fw-bold text-dark">
                  <span className="text-black">${product.price}</span>{" "}
                  <span className="text-muted text-decoration-line-through">${product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
