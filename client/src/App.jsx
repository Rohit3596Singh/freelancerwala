import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Home from "./components/home";
import Sales from "./Pages/sales/sales";
import AddToCart from "./Pages/addToCart/addToCart"
import Login from "./Pages/auth/Login"
import Signup from "./Pages/auth/Signup"
import AdminLogin from "./Pages/auth/AdminLogin"
import AdminSignup from "./Pages/auth/AdminSignup"
import UploadProduct from "../src/amin/uploadProduct/uploadProduct"
import CheckoutPage from './Pages/checkout/checkout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
      <Routes>
        {/* Redirect from root path "/" to "/home" */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home route */}
        <Route path="/home" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/addtocart" element={<AddToCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/uploadproduct" element={<UploadProduct />} />
        <Route path="/checkout" element={<CheckoutPage />} />

      </Routes>
    </Router>
    </>
  )
}

export default App
