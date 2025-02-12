import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import { BackendUrl } from "../../constants.jsx";
import {ToastContainer } from "react-toastify";

const CheckoutPage = () => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [userInfo, setUserInfo] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0);
  };

  const taxRate = 0.129;
  const subtotal = calculateSubtotal();
  const taxAmount = subtotal * taxRate;
  const totalAmount = subtotal + taxAmount;

  const handlePayment = async () => {
    const token = localStorage.getItem("token")
    try {
      // Send Order Data to Backend
      const response = await fetch(`${BackendUrl}api/order/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userInfo,
          cart,
          totalAmount,
          token:token,
        }),
      });
  
      const orderData = await response.json();
  
      if (!response.ok) {
        throw new Error(orderData.error || `Failed to create order (Status: ${response.status})`);
      }

      toast.success("Order saved successfully! Proceeding to payment...",{
        position: "top-right",
        autoclose:3000,
      });
      
  
    //   // Proceed with Razorpay Payment
    //   const options = {
    //     key: "your_razorpay_key",
    //     amount: totalAmount * 100, 
    //     currency: "INR",
    //     name: "Your Website",
    //     description: "Payment for your order",
    //     handler: function (response) {
    //       alert("Payment Successful!");
    //       console.log(response);
    //     },
    //     prefill: {
    //       name: userInfo.name,
    //       email: userInfo.email,
    //       contact: userInfo.phone,
    //     },
    //     theme: { color: "#3399cc" },
    //   };
      
    //   const razorpay = new window.Razorpay(options);
    //   razorpay.open();
    } 
    // catch (error) {
    //   console.error("Error processing payment:", error);
    //   alert("Error processing payment!");
    // }
    catch(error){
        alert("error")
    }
    
  };

  return (
    <div>
      <Header cart={cart} />
      <div className="p-3">
        <h2 className="text-center mb-4">Checkout</h2>
        <Row>
          {/* Left: User Details Form */}
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h4>Billing Details</h4>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={userInfo.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={userInfo.phone}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={userInfo.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="success" className="w-100 mt-3" onClick={handlePayment}>
                  Proceed to Payment
                </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Order Summary */}
          <Col md={6}>
            <Card className="p-4 shadow-sm">
              <Card.Body>
                <h4>Order Summary</h4>
                <hr />
                {cart.map((product, index) => (
                  <div key={index} className="d-flex align-items-center mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="rounded me-3"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{product.name}</h6>
                      <small>Qty: {product.quantity || 1}</small>
                    </div>
                    <strong>₹{(product.price * (product.quantity || 1)).toFixed(2)}</strong>
                  </div>
                ))}
                <hr />
                <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
                <p><strong>Tax (12.9%):</strong> ₹{taxAmount.toFixed(2)}</p>
                <h5 className="text-primary"><strong>Total: ₹{totalAmount.toFixed(2)}</strong></h5>
                
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
