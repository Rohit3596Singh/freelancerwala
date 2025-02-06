import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Home from "./components/home";
import Sales from "./Pages/sales/sales";
import AddToCart from "./Pages/addToCart/addToCart"

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
      </Routes>
    </Router>
    </>
  )
}

export default App
