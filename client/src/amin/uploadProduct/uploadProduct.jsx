import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container } from "react-bootstrap";
import { BackendUrl } from "../../constants";

const AdminPanel = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    discount: "",
    rating: "",
    reviews: "",
    deliveryDate: "",
    image: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }
  
    try {
      const response = await axios.post(`${BackendUrl}api/admin/products/add`, formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // const response = await axios.post("http://localhost:8080/admin/products/add", formDataObj, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
  
      alert(response.data.message);
      console.log("Uploaded Product:", response.data.product); // Debugging
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };
  

  return (
    <Container>
      <h2 className="mt-4">Admin Panel - Add Product</h2>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" name="name" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Original Price</Form.Label>
          <Form.Control type="number" name="originalPrice" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Discount (%)</Form.Label>
          <Form.Control type="number" name="discount" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" step="0.1" name="rating" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Reviews</Form.Label>
          <Form.Control type="number" name="reviews" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Delivery Date</Form.Label>
          <Form.Control type="text" name="deliveryDate" onChange={handleChange} required />
        </Form.Group>

        <Form.Group>
          <Form.Label>Product Image</Form.Label>
          <Form.Control type="file" name="image" onChange={handleFileChange} required />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default AdminPanel;
