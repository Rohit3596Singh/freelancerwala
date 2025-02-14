// const express = require("express");
// const router = express.Router();
// const Product = require("../models/products"); // Import Product model
// const upload = require("../cloudinary/multerConfig"); // Cloudinary Multer Config

// // ✅ Add Product (Uploads Image to Cloudinary)
// router.post("/admin/products/add", upload.single("image"), async (req, res) => {
//   try {
//     const { name, price, originalPrice, discount, rating, reviews, deliveryDate, category } = req.body;
//     const image = req.file ? req.file.path : "";

//     const newProduct = new Product({ name, image, price, originalPrice, discount, rating, reviews, deliveryDate, category });
//     await newProduct.save();

//     res.json({ success: true, message: "Product added successfully!", product: newProduct });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error", error });
//   }
// });

// // ✅ Get All Products
// router.get("/products", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json({ success: true, products });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// module.exports = router;





















const express = require("express");
const router = express.Router();
const Product = require("../models/products"); 
const upload = require("../cloudinary/multerConfig"); 

// ✅ Add Product (Uploads Image to Cloudinary)
router.post("/admin/products/add", upload.single("image"), async (req, res) => {
  try {
    const { name, price, originalPrice, discount, rating, reviews, deliveryDate, category } = req.body;
    const image = req.file ? req.file.path : ""; 

    if (!category) {
      return res.status(400).json({ success: false, message: "Category is required" });
    }

    const newProduct = new Product({ name, image, price, originalPrice, discount, rating, reviews, deliveryDate, category });
    await newProduct.save();

    res.json({ success: true, message: "Product added successfully!", product: newProduct });
  } catch (error) {
    console.error("❌ MongoDB Save Error:", error);
    res.status(500).json({ success: false, message: "Server error", error });
  }
});

// ✅ Get Products by Category
router.get("/products", async (req, res) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const products = await Product.find(query);

    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
