// import React, { useState } from "react";
// import { Form, Button, Container } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
// import { BackendUrl } from "../../constants";
// import { handleSuccess, handleError } from "../../../utils";

// const AdminProductForm = () => {
//   const [product, setProduct] = useState({
//     name: "",
//     price: "",
//     originalPrice: "",
//     discount: "",
//     rating: "",
//     reviews: "",
//     deliveryDate: "",
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setProduct({ ...product, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]); // Store the selected file
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData();
//     Object.keys(product).forEach((key) => {
//       formData.append(key, product[key]);
//     });
//     if (imageFile) {
//       formData.append("image", imageFile); // Append the image file
//     }

//     try {
//       const response = await fetch(`${BackendUrl}admin/products/add`, {
//         method: "POST",
//         body: formData, // Sending formData for file upload
//       });

//       const result = await response.json();
//       if (result.success) {
//         handleSuccess("Product added successfully!");
//         setTimeout(() => navigate("/admin/products"), 1000);
//       } else {
//         handleError(result.message || "Failed to add product");
//       }
//     } catch (error) {
//       handleError("Something went wrong. Try again!");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Container className="mt-4">
//       <h2>Add New Product</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Product Name</Form.Label>
//           <Form.Control type="text" name="name" value={product.name} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Upload Image</Form.Label>
//           <Form.Control type="file" name="image" onChange={handleImageChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Price</Form.Label>
//           <Form.Control type="number" name="price" value={product.price} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Original Price</Form.Label>
//           <Form.Control type="number" name="originalPrice" value={product.originalPrice} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Discount (%)</Form.Label>
//           <Form.Control type="number" name="discount" value={product.discount} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Rating</Form.Label>
//           <Form.Control type="number" step="0.1" name="rating" value={product.rating} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Reviews</Form.Label>
//           <Form.Control type="number" name="reviews" value={product.reviews} onChange={handleChange} required />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Delivery Date</Form.Label>
//           <Form.Control type="text" name="deliveryDate" value={product.deliveryDate} onChange={handleChange} required />
//         </Form.Group>

//         <Button variant="success" type="submit" disabled={loading}>
//           {loading ? "Adding..." : "Add Product"}
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// export default AdminProductForm;





















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
