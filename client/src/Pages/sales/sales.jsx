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
  const [products, setProducts] = useState([]); // Fetch products from backend

  const navigate = useNavigate();

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${BackendUrl}api/products`);
        const data = await response.json();
        if (data.success) {
          setProducts(data.products); // ✅ Store products in state
        } else {
          console.error("Failed to fetch products:", data.message);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);
  

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    setCart([...cart, selectedProduct]);
    setShowModal(false);
  };

  return (
    <div>
      <Header cart={cart} />
      <Container className="p-3">
        <Row>
          {products.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <ProductCard product={product} onAddToCart={handleShowModal} />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default SalesPage;
