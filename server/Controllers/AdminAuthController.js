const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../models/user");

// Admin Signup
const adminSignup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log("📩 Admin Signup Data:", { name, email, password });

        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'Admin already exists, please login', success: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newAdmin = new UserModel({ name, email, password: hashedPassword, isAdmin: true });
        await newAdmin.save();

        console.log("✅ Admin Created:", newAdmin);
        res.status(201).json({ message: "Admin signup successful", success: true });

    } catch (err) {
        console.error("❌ Admin Signup Error:", err);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

// Admin Login
const adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🔑 Admin Login Attempt:", { email });

        const user = await UserModel.findOne({ email, isAdmin: true });
        if (!user) {
            return res.status(403).json({ message: "Authentication failed: Admin not found", success: false });
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if (!isPasswordEqual) {
            return res.status(403).json({ message: "Authentication failed: Email or password is incorrect", success: false });
        }

        const jwtToken = jwt.sign({ email: user.email, _id: user._id, isAdmin: true }, process.env.JWT_SECRET, { expiresIn: "24h" });

        console.log("✅ Admin Login Successful:", email);
        res.status(200).json({ message: "Admin login successful", success: true, jwtToken, email, name: user.name });

    } catch (err) {
        console.error("❌ Admin Login Error:", err);
        res.status(500).json({ message: "Internal Server Error", success: false });
    }
};

module.exports = { adminSignup, adminLogin };
