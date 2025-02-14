// import React, { useState } from "react";
// import axios from "axios";
// import { Form, Button, Container } from "react-bootstrap";
// import { BackendUrl } from "../../constants";

// const AdminPanel = () => {
//   const [categories] = useState(["premium-software",
//     "essential-tools",
//     "business-software",
//     "developer-tools"]); // Example categories
// const [formData, setFormData] = useState({
//   name: "",
//   price: "",
//   originalPrice: "",
//   discount: "",
//   rating: "",
//   reviews: "",
//   deliveryDate: "",
//   category: "",
//   image: null,
// });

// // Handle dropdown change
// const handleCategoryChange = (e) => {
//   setFormData({ ...formData, category: e.target.value });
// };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleFileChange = (e) => {
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataObj = new FormData();
//     for (const key in formData) {
//       formDataObj.append(key, formData[key]);
//     }
  
//     try {
//       const response = await axios.post(`${BackendUrl}api/admin/products/add`, formDataObj, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//       // const response = await axios.post("http://localhost:8080/admin/products/add", formDataObj, {
//       //   headers: { "Content-Type": "multipart/form-data" },
//       // });
  
//       alert(response.data.message);
//       console.log("Uploaded Product:", response.data.product); // Debugging
//     } catch (error) {
//       console.error("Error adding product:", error);
//       alert("Failed to add product");
//     }
//   };
  

//   return (
//     <Container>
//       <h2 className="mt-4">Admin Panel - Add Product</h2>
//       <Form onSubmit={handleSubmit} encType="multipart/form-data">
//         <Form.Group>
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control type="text" name="name" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Category</Form.Label>
//           <Form.Select name="category" onChange={handleCategoryChange} required>
//             <option value="">Select Category</option>
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>{cat}</option>
//             ))}
//           </Form.Select>
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Price</Form.Label>
//           <Form.Control type="number" name="price" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Original Price</Form.Label>
//           <Form.Control type="number" name="originalPrice" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Discount (%)</Form.Label>
//           <Form.Control type="number" name="discount" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Rating</Form.Label>
//           <Form.Control type="number" step="0.1" name="rating" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Reviews</Form.Label>
//           <Form.Control type="number" name="reviews" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Delivery Date</Form.Label>
//           <Form.Control type="text" name="deliveryDate" onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group>
//           <Form.Label>Product Image</Form.Label>
//           <Form.Control type="file" name="image" onChange={handleFileChange} required />
//         </Form.Group>

//         <Button variant="primary" type="submit" className="mt-3">
//           Add Product
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default AdminPanel;
































import React, { useState } from "react";
import axios from "axios";
import { Form, Button, Container, Card, Row, Col } from "react-bootstrap";
import { BackendUrl } from "../../constants";
import Header from "../../components/header/header.jsx";
import Footer from "../../components/footer/footer.jsx";

const AdminPanel = () => {
  const [categories] = useState([
    "premium-software",
    "essential-tools",
    "business-software",
    "developer-tools",
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    originalPrice: "",
    discount: "",
    rating: "",
    reviews: "",
    deliveryDate: "",
    category: "",
    image: null,
  });

  const handleCategoryChange = (e) => {
    setFormData({ ...formData, category: e.target.value });
  };

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
      const response = await axios.post(
        `${BackendUrl}api/admin/products/add`,
        formDataObj,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      alert(response.data.message);
      console.log("Uploaded Product:", response.data.product);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  return (
    <div>
      <Header />
      <div className="p-3 mt-5">
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="p-4 shadow-lg border-0">
              <h2 className="text-center text-primary mb-4">Admin Panel - Add Product</h2>
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Category</Form.Label>
                      <Form.Select
                        name="category"
                        onChange={handleCategoryChange}
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat, index) => (
                          <option key={index} value={cat}>
                            {cat.replace("-", " ").toUpperCase()}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Price (₹)</Form.Label>
                      <Form.Control
                        type="number"
                        name="price"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Original Price (₹)</Form.Label>
                      <Form.Control
                        type="number"
                        name="originalPrice"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Discount (%)</Form.Label>
                      <Form.Control
                        type="number"
                        name="discount"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Rating</Form.Label>
                      <Form.Control
                        type="number"
                        step="0.1"
                        name="rating"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Reviews</Form.Label>
                      <Form.Control
                        type="number"
                        name="reviews"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group>
                      <Form.Label>Delivery Date</Form.Label>
                      <Form.Control
                        type="text"
                        name="deliveryDate"
                        placeholder="E.g. 2-3 days"
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <Button variant="primary" type="submit" className="w-50 mt-2">
                    Add Product
                  </Button>
                </div>

              </Form>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPanel;

