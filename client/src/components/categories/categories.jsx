// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate

// import FRAME1 from "../../assets/WinZip-Enterprise29.webp";
// import FRAME2 from "../../assets/c-1.webp";
// import FRAME3 from "../../assets/CorelPainter-2023-1.webp";
// import FRAME4 from "../../assets/pdf-fusion.webp";

// const Categories = () => {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleSalesNavigation = (category) => {
//     navigate(`/sales?category=${category}`); // Navigate to sales page with category as query param
//   };

//   return (
//     <div className="my-5">
//       <div className="row g-4 justify-content-center">
//         <div
//           className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
//           onClick={() => handleSalesNavigation("premium-software")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={FRAME1} alt="Premium Software" className="img-fluid mb-3" />
//           <h5>Premium Software</h5>
//         </div>

//         <div
//           className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
//           onClick={() => handleSalesNavigation("essential-tools")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={FRAME2} alt="Essential Tools" className="img-fluid mb-3" />
//           <h5>Essential Tools</h5>
//         </div>

//         <div
//           className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
//           onClick={() => handleSalesNavigation("business-software")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={FRAME3} alt="Business Software" className="img-fluid mb-3" />
//           <h5>Business Software</h5>
//         </div>

//         <div
//           className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
//           onClick={() => handleSalesNavigation("developer-tools")}
//           style={{ cursor: "pointer" }}
//         >
//           <img src={FRAME4} alt="Developer Tools" className="img-fluid mb-3" />
//           <h5>Developer Tools</h5>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Categories;























import React from "react";
import { useNavigate } from "react-router-dom";

import FRAME1 from "../../assets/WinZip-Enterprise29.webp";
import FRAME2 from "../../assets/c-1.webp";
import FRAME3 from "../../assets/CorelPainter-2023-1.webp";
import FRAME4 from "../../assets/pdf-fusion.webp";

const categories = [
  { name: "Premium Software", value: "premium-software", image: FRAME1 },
  { name: "Essential Tools", value: "essential-tools", image: FRAME2 },
  { name: "Business Software", value: "business-software", image: FRAME3 },
  { name: "Developer Tools", value: "developer-tools", image: FRAME4 },
];

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="my-5">
      <div className="row g-4 justify-content-center">
        {categories.map((cat) => (
          <div
            key={cat.value}
            className="col-12 col-sm-6 col-md-3 d-flex flex-column align-items-center"
            onClick={() => navigate(`/sales?category=${cat.value}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={cat.image} alt={cat.name} className="img-fluid mb-3" />
            <h5>{cat.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
