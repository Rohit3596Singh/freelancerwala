import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import './App.css'
import Home from "./components/home";

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
      </Routes>
    </Router>
    </>
  )
}

export default App
