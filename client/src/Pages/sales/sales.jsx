// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Modal, Button } from "react-bootstrap";
// import ProductCard from "./productCard.jsx";
// import Footer from "../../components/footer/footer.jsx";
// import Header from "../../components/header/header.jsx";
// import { useNavigate } from "react-router-dom";
// import { BackendUrl } from "../../constants";

// // import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom"; 
// import axios from "axios";
// // import ProductCard from "./productCard";
// // import { BackendUrl } from "../../constants";

// const SalesPage = () => {
//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category");
//   // const [products, setProducts] = useState([]);

//   const [showModal, setShowModal] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [cart, setCart] = useState([]);
//   const [products, setProducts] = useState([]);

//   const navigate = useNavigate();

//   // ✅ Load cart from localStorage when the page loads
//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   // ✅ Save cart to localStorage whenever it updates
//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   // useEffect(() => {
//   //   if (category) {
//   //     axios.get(`${BackendUrl}api/products?category=${category}`)
//   //       .then(response => setProducts(response.data.products))
//   //       .catch(error => console.error("Error fetching products:", error));
//   //   }
//   // }, [category]);

//   // Fetch products from backend
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         // const response = await fetch(`${BackendUrl}api/products`);
//         // const data = await response.json();
//         // if (data.success) {
//         //   setProducts(data.products);
//         // } else {
//         //   console.error("Failed to fetch products:", data.message);
//         // }

//         if (category) {
//           axios.get(`${BackendUrl}api/products?category=${category}`)
//             .then(response => setProducts(response.data.products))
//             .catch(error => console.error("Error fetching products:", error));
//         }

//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     fetchProducts();
//   }, [category]);

//   // Show Modal with Product Details
//   const handleShowModal = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   // Close Modal
//   const handleCloseModal = () => {
//     setShowModal(false);
//     setSelectedProduct(null);
//   };

//   // Add Product to Cart
//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       const existingCart = JSON.parse(localStorage.getItem("cart")) || []; // ✅ Get existing cart
//       const updatedCart = [...existingCart, selectedProduct]; // ✅ Merge new product
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart)); // ✅ Save merged cart
//     }
//     handleCloseModal();
//   };
  


//   return (
//     <div>
//       <Header cart={cart} />
//       {/* <div className="p-3">
//         <Row>
//           {products.map((product) => (
//             <Col key={product._id} xs={12} sm={6} md={4} lg={3} className="mb-4">
//               <ProductCard product={product} onAddToCart={handleShowModal} />
//             </Col>
//           ))}
//         </Row>
//       </div> */}

// <div className="container">
//       <h2>{category.replace("-", " ").toUpperCase()}</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div key={product._id} className="col-md-4">
//             <ProductCard product={product} onAddToCart={() => handleShowModal(product)} />

//           </div>
//         ))}
//       </div>
//     </div>

//       {/* Add to Cart Modal */}
//       <Modal show={showModal} onHide={handleCloseModal} centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Product Details</Modal.Title>
//         </Modal.Header>
//         {selectedProduct && (
//           <Modal.Body>
//             <img
//               src={selectedProduct.image}
//               alt={selectedProduct.name}
//               className="w-100 mb-3"
//               style={{ maxHeight: "250px", objectFit: "contain" }}
//             />
//             <h5>{selectedProduct.name}</h5>
//             <p>Price: ₹{selectedProduct.price}</p>
//             <p>Original Price: ₹{selectedProduct.originalPrice}</p>
//             <p>Discount: {selectedProduct.discount}% OFF</p>
//             <p>Rating: ⭐ {selectedProduct.rating} ({selectedProduct.reviews} reviews)</p>
//             <p>Delivery Date: 🚚 {selectedProduct.deliveryDate}</p>
//           </Modal.Body>
//         )}
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//           <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
//         </Modal.Footer>
//       </Modal>

//       <Footer />
//     </div>
//   );
// };

// export default SalesPage;


























import React, { useState, useEffect } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import ProductCard from "./productCard.jsx";
import Footer from "../../components/footer/footer.jsx";
import Header from "../../components/header/header.jsx";
import { useNavigate, useSearchParams } from "react-router-dom";
import { BackendUrl } from "../../constants";
import axios from "axios";

const SalesPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });
  

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (category) {
          axios
            .get(`${BackendUrl}api/products?category=${category}`)
            .then((response) => setProducts(response.data.products))
            .catch((error) => console.error("Error fetching products:", error));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  const handleAddToCart = () => {
    if (selectedProduct) {
      const updatedCart = [...cart, selectedProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
    handleCloseModal();
  };

  return (
    <div>
      <Header cart={cart} />
      <div className="p-3 mt-4">
        <h2 className="text-center text-uppercase text-primary fw-bold mb-4">{category.replace("-", " ")}</h2>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard product={product} onAddToCart={() => handleShowModal(product)} />
            </Col>
          ))}
        </Row>
      </div>

      {/* Add to Cart Modal */}
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title className="text-primary">Product Details</Modal.Title>
        </Modal.Header>
        {selectedProduct && (
          <Modal.Body className="text-center">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="img-fluid mb-3 rounded"
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
            <h5 className="fw-bold">{selectedProduct.name}</h5>
            <p className="text-success fw-bold fs-5">₹{selectedProduct.price} <span className="text-muted text-decoration-line-through">₹{selectedProduct.originalPrice}</span></p>
            <p className="text-warning">⭐ {selectedProduct.rating} ({selectedProduct.reviews} reviews)</p>
            <p className="text-info">🚚 Delivery: {selectedProduct.deliveryDate}</p>
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

