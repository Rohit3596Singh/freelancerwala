const mongoose = require("mongoose");

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Will store the image path
    required: true,
  },
  category:{
    type:String,
    required:true,
  },
  price: {
    type: Number,
    required: true,
  },
  originalPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: Number,
    required: true,
  },
  deliveryDate: {
    type: String,
    required: true,
  },
}, { timestamps: true }); // Auto-add createdAt and updatedAt fields

// Create Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
