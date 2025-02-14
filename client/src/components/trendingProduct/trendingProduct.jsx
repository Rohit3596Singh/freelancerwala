import React, { useEffect, useState } from "react";
import axios from "axios"; // Axios for API calls
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { BackendUrl } from "../../constants";
// import trendingProduct from "./trendingProductCard"; // ✅ Fixed import (uppercase)
import TrendingProductCard from "./trendingProductCard";

const TrendingProduct = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      try {
        const response = await axios.get(`${BackendUrl}api/products`);
        console.log("API Response:", response.data); // Debugging

        if (!Array.isArray(response.data.products)) {
          console.error("Expected an array but got:", response.data);
          return;
        }

        const allProducts = response.data.products;
        // const today = new Date().toISOString().split("T")[0];

        // const todaysProducts = allProducts.filter((product) => {
        //   if (!product.createdAt) return false;
        //   const productDate = new Date(product.createdAt).toISOString().split("T")[0];
        //   return productDate === today;
        // });

        // const displayProduct = 

        setTrendingProducts(allProducts.slice(0, 3));
      } catch (error) {
        console.error("Error fetching latest products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrendingProducts();
  }, []);

  // Show Modal with Product Details
  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  // Add Product to Cart
  // const handleAddToCart = () => {
  //   if (selectedProduct) {
  //     const updatedCart = [...cart, selectedProduct];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save to localStorage
  //   }
  //   handleCloseModal();
  // };


  const handleAddToCart = () => {
    if (selectedProduct) {
      const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
      const updatedCart = [...existingCart, selectedProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    handleCloseModal();
  };

  // const handleAddToCart = () => {
  //   if (selectedProduct) {
  //     const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
  //     const updatedCart = [...existingCart, selectedProduct];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  
  //     // ✅ Manually trigger storage event to update cart badge in Home.jsx
  //     window.dispatchEvent(new Event("storage"));
  //   }
  //   handleCloseModal();
  // };

  // const handleAddToCart = () => {
  //   if (selectedProduct) {
  //     const updatedCart = [...cart, selectedProduct];
  //     setCart(updatedCart);
  //     localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   }
  //   handleCloseModal();
  // };
  
  


  return (
    <div className="m-3">
      {loading ? (
        <p>Loading...</p>
      ) : trendingProducts.length > 0 ? (
        <div className="row g-4">
          {trendingProducts.map((product) => (
            <div key={product._id} className="col-12 col-sm-6 col-md-4">
              <TrendingProductCard product={product} onShowModal={handleShowModal} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No products available for today.</p>
      )}

      {/* Add to Cart Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        {selectedProduct && (
          <Modal.Body>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-100 mb-3"
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
            <h5>{selectedProduct.name}</h5>
            <p>Price: ₹{selectedProduct.price}</p>
            <p>Original Price: ₹{selectedProduct.originalPrice}</p>
            <p>Discount: {selectedProduct.discount}% OFF</p>
            <p>Rating: ⭐ {selectedProduct.rating} ({selectedProduct.reviews} reviews)</p>
            <p>Delivery Date: 🚚 {selectedProduct.deliveryDate}</p>
          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TrendingProduct;
