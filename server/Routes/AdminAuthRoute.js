const express = require("express");
const { adminSignup, adminLogin } = require("../Controllers/AdminAuthController");
const { adminSignupValidation, adminLoginValidation } = require("../Middlewares/AdminAuthValidation");

const router = express.Router();

router.post("/signup", adminSignupValidation, adminSignup);
router.post("/login", adminLoginValidation, adminLogin);



module.exports = router;


