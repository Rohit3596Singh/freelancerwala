import React, { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProductCard from "./productCard.jsx";
import products from "./product.js";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import { useNavigate } from "react-router-dom"; // Use this hook to navigate

const SalesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    setCart([...cart, selectedProduct]); // Add selected product to cart
    setShowModal(false);
  };

  const goToCart = () => {
    navigate("/addtocart", { state: { cart } }); // Pass cart state via React Router's state
  };

  return (
    <div>
      <Header cart={cart} />

      <div className="p-3">
        <Row>
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} onAddToCart={handleShowModal} />
            </Col>
          ))}
        </Row>
      </div>

      <Footer />

      {/* Modal for Product Details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.name}
            className="img-fluid mb-3"
            style={{ height: "200px", objectFit: "contain" }}
          />
          <h5 className="text-danger">
            ₹{selectedProduct?.price}{" "}
            <small className="text-muted">
              <s>₹{selectedProduct?.originalPrice}</s>
            </small>
            <span className="text-success ms-2">({selectedProduct?.discount}% OFF)</span>
          </h5>
          <p className="text-muted mb-1">
            🚚 <strong>FREE delivery</strong> {selectedProduct?.deliveryDate}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddToCart}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Cart Page Link */}
      {/* <div className="text-center mt-3">
        <Button variant="info" onClick={goToCart}>
          Go to Cart ({cart.length})
        </Button>
      </div> */}

      <div className="text-center border-top mb-0" style={{ backgroundColor: "#D3D3D3", marginBottom: "0%" }}>
        <p>All rights reserved | <a href="#">Privacy policy</a></p>
      </div>
    </div>
  );
};

export default SalesPage;