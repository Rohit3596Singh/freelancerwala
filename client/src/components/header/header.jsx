import React, { useState } from "react";
import LOGO from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

const Header = ({ cart = [] }) => {
  const navigate = useNavigate();
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [showDropdown, setShowDropdown] = useState(false);

  // Check if user is logged in
  const user = (localStorage.getItem("token")); // Assuming "user" is stored in localStorage after login

  const goToCart = () => {
    navigate("/addtocart", { state: { cart: storedCart } });
  };

  const handleNavigationHome = () => {
    navigate("/home");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    window.location.reload(); // Refresh page to update UI
  };

  return (
    <div className="w-100 px-4 py-3 bg-white shadow-sm">
      <div className="row align-items-center">
        {/* Left: Logo */}
        <div
          className="col-12 col-md-4 d-flex align-items-center gap-2"
          onClick={handleNavigationHome}
          style={{ cursor: "pointer" }}
        >
          <img src={LOGO} alt="Logo" className="h-8" />
          <span className="h5 font-weight-bold text-primary">
            FREELANCERWALA
          </span>
        </div>

        {/* Navigation */}
        <div className="col-12 col-md-4 text-center">
          <nav className="d-flex justify-content-center">
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2" onClick={handleNavigationHome}>
              <i className="bi bi-house-door-fill"></i> Home
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
              About us
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
              Shop
            </a>
            <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
              Contact us
            </a>
          </nav>
        </div>

        {/* Right: Icons */}
        <div className="col-12 col-md-4 text-end mt-3 mt-md-0 d-flex justify-content-end gap-3">
          <i className="bi bi-search" style={{ fontSize: "1.5rem" }}></i>
          <i className="bi bi-heart-fill" style={{ fontSize: "1.5rem" }}></i>

          {/* Cart Icon with Badge */}
          <div style={{ position: "relative", cursor: "pointer" }} onClick={goToCart}>
            <i className="bi bi-cart-dash" style={{ fontSize: "1.5rem" }}></i>
            {cart.length > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-5px",
                  right: "-10px",
                  background: "red",
                  color: "white",
                  borderRadius: "50%",
                  padding: "2px 6px",
                  fontSize: "0.75rem",
                }}
              >
                {cart.length}
              </span>
            )}
          </div>

          {/* Profile Icon with Dropdown */}
          <div style={{ position: "relative" }}>
            <i
              className="bi bi-person-fill"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={toggleDropdown}
            ></i>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div
                className="position-absolute bg-white shadow rounded p-2"
                style={{
                  top: "120%",
                  right: "0",
                  minWidth: "150px",
                  zIndex: "1000",
                }}
              >
                {user ? (
                  <button
                    className="btn btn-danger w-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                ) : (
                  <button
                    className="btn btn-primary w-100"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;



























// import React, { useState } from "react";
// import LOGO from "../../assets/Logo.png";
// import { useNavigate } from "react-router-dom";

// const Header = ({ cart = [] }) => {
//   // const [storedCart,setStoredCart] =useState(cart)
//   const navigate = useNavigate();
//   const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

//   const goToCart = () => {
//     navigate("/addtocart", { state: { cart:storedCart } });
//   };

//   const handleNavigationHome = () => {
//     navigate("/home");
//   };

//   return (
//     <div className="w-100 px-4 py-3 bg-white shadow-sm">
//       <div className="row align-items-center">
//         {/* Left: Logo */}
//         <div
//           className="col-12 col-md-4 d-flex align-items-center gap-2"
//           onClick={handleNavigationHome}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={LOGO} alt="Logo" className="h-8" />
//           <span className="h5 font-weight-bold text-primary">
//             FREELANCERWALA
//           </span>
//         </div>

//         {/* Navigation */}
//         <div className="col-12 col-md-4 text-center">
//           <nav className="d-flex justify-content-center">
//             <a
//               href="#"
//               className="d-flex align-items-center gap-1 text-decoration-none text-dark hover:text-primary mx-2"
//               onClick={handleNavigationHome}
//             >
//               <i className="bi bi-house-door-fill"></i>Home
//             </a>
//             <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
//               About us
//             </a>
//             <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
//               Shop
//             </a>
//             <a href="#" className="text-decoration-none text-dark hover:text-primary mx-2">
//               Contact us
//             </a>
//           </nav>
//         </div>

//         {/* Right: Icons */}
//         <div className="col-12 col-md-4 text-end mt-3 mt-md-0 d-flex justify-content-end gap-3">
//           <i className="bi bi-search" style={{ fontSize: "1.5rem" }}></i>
//           <i className="bi bi-heart-fill" style={{ fontSize: "1.5rem" }}></i>

//           {/* Cart Icon with Badge */}
//           <div style={{ position: "relative", cursor: "pointer" }} onClick={goToCart}>
//             <i className="bi bi-cart-dash" style={{ fontSize: "1.5rem" }}></i>
//             {cart.length > 0 && (
//               <span
//                 style={{
//                   position: "absolute",
//                   top: "-5px",
//                   right: "-10px",
//                   background: "red",
//                   color: "white",
//                   borderRadius: "50%",
//                   padding: "2px 6px",
//                   fontSize: "0.75rem",
//                 }}
//               >
//                 {cart.length}
//               </span>
//             )}
//           </div>

//           <i className="bi bi-person-fill" style={{ fontSize: "1.5rem" }}
//           ></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;