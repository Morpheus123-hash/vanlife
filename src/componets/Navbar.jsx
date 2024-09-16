import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="title">
        #CarRental
      </Link>
      <div className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
        <Link to="/Host">Host</Link>
      </div>
    </nav>
  );
};


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// export const Navbar = () => {
//   const [showHostLink, setShowHostLink] = useState(false);

//   const handleRentThisVanClick = () => {
//     setShowHostLink(true);
//   };

//   return (
//     <nav className="navbar">
//       <Link to="/" className="title">
//         #CarRental
//       </Link>
//       <div className="nav-links">
//         <Link to="/about">About</Link>
//         <Link to="/vans">Vans</Link>
//         {showHostLink && (
//           <>
//             <Link to="/host">Host</Link>
//             <Link to="/signup">
//               <img src="path/to/your/icon" alt="Icon" />
//             </Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };