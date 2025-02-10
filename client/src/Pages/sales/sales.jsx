import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProductCard from "./productCard.jsx";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import { useNavigate } from "react-router-dom";
import { BackendUrl } from "../../constants";

const SalesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  // ✅ Load cart from localStorage when the page loads
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // ✅ Save cart to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BackendUrl}api/products`);
        const data = await response.json();
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
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
  const handleAddToCart = () => {
    if (selectedProduct) {
      const updatedCart=[...cart, selectedProduct];
      // alert(`${selectedProduct.name} added to cart!`);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save to localStorage
      // setShowModal(false);
      
    }
    handleCloseModal();
  };

  return (
    <div>
      <Header cart={cart} />
      <div className="p-3">
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} onAddToCart={handleShowModal} />
            </Col>
          ))}
        </Row>
      </div>

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

      <Footer />
    </div>
  );
};

export default SalesPage;
