import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useLocation,useNavigate } from "react-router-dom"; // Hook to access state passed through router

import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";

const CartPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialCart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage
  const [updatedCart, setUpdatedCart] = useState(initialCart);

  // Update localStorage when cart changes
  useEffect(() => {
    if (updatedCart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  }, [updatedCart]);

  // Handle quantity change
  const handleQuantityChange = (index, event) => {
    const newCart = [...updatedCart];
    newCart[index].quantity = parseInt(event.target.value) || 1;
    setUpdatedCart(newCart);
  };

  // Handle removing item from the cart
  const handleRemoveItem = (index) => {
    const newCart = updatedCart.filter((_, i) => i !== index);
    setUpdatedCart(newCart);
  };

  // ✅ Correct Total Calculation
  const calculateTotal = () => {
    return updatedCart.reduce(
      (total, product) => total + (product.price * (product.quantity || 1)), // Default quantity to 1
      0
    );
  };

  return (
    <div className="">
      <Header cart={updatedCart} />
      <h2 className="p-3 my-4">Shopping Cart</h2>
      <div className="p-3">
        <Row>
          <Col md={8}>
            {updatedCart.length === 0 ? (
              <h4>Your cart is empty</h4>
            ) : (
              updatedCart.map((product, index) => (
                <Card className="mb-4 shadow-sm" key={index}>
                  <Card.Body>
                    <Row>
                      <Col xs={12} md={3}>
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.name}
                          className="p-3"
                          style={{
                            height: "150px",
                            objectFit: "contain",
                            maxWidth: "100%",
                          }}
                        />
                      </Col>
                      <Col xs={12} md={7}>
                        <Card.Title className="fw-bold">{product.name}</Card.Title>
                        <h5 className="text-danger">
                          ₹{product.price}{" "}
                          <small className="text-muted">
                            <s>₹{product.originalPrice}</s>
                          </small>{" "}
                          <span className="text-success ms-2">
                            ({product.discount}% OFF)
                          </span>
                        </h5>
                        <div className="d-flex align-items-center">
                          <Form.Group controlId={`quantity-${index}`}>
                            <Form.Label>Quantity:</Form.Label>
                            <Form.Control
                              as="select"
                              value={product.quantity || 1} // Default to 1
                              onChange={(event) => handleQuantityChange(index, event)}
                            >
                              {[...Array(10).keys()].map((num) => (
                                <option key={num} value={num + 1}>
                                  {num + 1}
                                </option>
                              ))}
                            </Form.Control>
                          </Form.Group>
                        </div>
                      </Col>
                      <Col xs={12} md={2} className="d-flex align-items-center">
                        <Button
                          variant="link"
                          className="text-danger p-0"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <i className="bi bi-trash" style={{ fontSize: "20px" }}></i>
                        </Button>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              ))
            )}
          </Col>

          {/* ✅ Order Summary */}
          <Col md={4}>
            <Card className="shadow-sm p-3 rounded">
              <Card.Body>
                <h4>Order Summary</h4>
                <hr />
                <p>
                  <strong>Items: </strong>
                  {updatedCart.length}
                </p>
                <p>
                  <strong>Total: </strong>₹{calculateTotal()}
                </p>
                <Button variant="primary" className="w-100"
                onClick={()=>navigate("/checkout")}
                >
                  Proceed to Checkout
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
      <div className="text-center border-top mb-0" style={{ backgroundColor: "#D3D3D3", marginBottom: "0%" }}>
        <p>All rights reserved | <a href="#">Privacy policy</a></p>
      </div>
    </div>
  );
};

export default CartPage;