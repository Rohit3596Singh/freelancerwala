import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product, onAddToCart }) => {

  const navigate = useNavigate();
  return (
    <Card className="shadow-sm p-2 rounded">
      {/* Product Image */}
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="p-3"
        style={{ height: "200px", objectFit: "contain" }}
      />

      {/* Product Details */}
      <Card.Body>
        <Card.Title className="fw-bold">{product.name}</Card.Title>

        {/* Rating and Reviews */}
        <div className="d-flex align-items-center">
          <span className="text-warning me-2">⭐ {product.rating}</span>
          <small className="text-muted">({product.reviews} reviews)</small>
        </div>

        {/* Discount Badge */}
        <div className="mt-2">
          <Badge bg="danger">Limited Time Deal</Badge>
        </div>

        {/* Price Section */}
        <h5 className="mt-2 text-danger">
          ₹{product.price} <small className="text-muted"><s>₹{product.originalPrice}</s></small>
          <span className="text-success ms-2">({product.discount}% OFF)</span>
        </h5>

        {/* Delivery Information */}
        <p className="text-muted mb-1">
          🚚 <strong>FREE delivery</strong> {product.deliveryDate}
        </p>

        {/* Add to Cart & Buy Now Buttons */}
        <div className="d-flex justify-content-between mt-3">
          <Button variant="warning" className="fw-bold" onClick={() => onAddToCart(product)}>
            🛒 Add to Cart
          </Button>
          <button className="btn btn-primary"
          onClick={()=>{
            navigate("/signup")
          }}
          >⚡ Buy Now</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
