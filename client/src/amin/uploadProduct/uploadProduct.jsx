import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { BackendUrl } from "../../constants";
import { handleSuccess, handleError } from "../../../utils";

const AdminProductForm = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: "",
    originalPrice: "",
    discount: "",
    rating: "",
    reviews: "",
    deliveryDate: "",
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${BackendUrl}admin/products/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      
      const result = await response.json();
      if (result.success) {
        handleSuccess("Product added successfully!");
        setTimeout(() => navigate("/admin/products"), 1000);
      } else {
        handleError(result.message || "Failed to add product");
      }
    } catch (error) {
      handleError("Something went wrong. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-4">
      <h2>Add New Product</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" name="image" value={product.image} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Original Price</Form.Label>
          <Form.Control type="number" name="originalPrice" value={product.originalPrice} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Discount (%)</Form.Label>
          <Form.Control type="number" name="discount" value={product.discount} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" step="0.1" name="rating" value={product.rating} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Reviews</Form.Label>
          <Form.Control type="number" name="reviews" value={product.reviews} onChange={handleChange} required />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Delivery Date</Form.Label>
          <Form.Control type="text" name="deliveryDate" value={product.deliveryDate} onChange={handleChange} required />
        </Form.Group>

        <Button variant="success" type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </Button>
      </Form>
    </Container>
  );
};

export default AdminProductForm;
