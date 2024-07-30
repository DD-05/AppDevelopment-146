// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import './../assets/css/navbar.css'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { faUser } from '@fortawesome/free-solid-svg-icons'

// // const Navbar = () => {
// //   return (
// //     // <div className="home-container">
// //       <header className="header">
// //         <div className="logo">TrackPro</div>
// //         <nav className="nav">
// //         <Link to="/HomePage">Home</Link>
// //         <Link to="/Aboutus">About Us</Link>
// //         <Link to="/Services">Services</Link>
// //         <Link to="/CustomerUsage">Customer_Needs</Link>
// //         <Link to="/Review">Testimonial</Link>
// //         <Link to="/Contacts">Contact</Link>
// //         <Link to='/profile'><FontAwesomeIcon icon={faUser}/></Link>        
// //         </nav>
// //       </header>
// //     //  </div>

// //   )
// // }

// // export default Navbar

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import '../assets/css/navbar.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser } from '@fortawesome/free-solid-svg-icons';

// const Navbar = () => {
//   return (
//     <header className="header">
//       <div className="logo">TrackPro</div>
//       <nav className="nav">
//         <Link to="/HomePage">Home</Link>
//         <Link to="/Aboutus">About Us</Link>
//         <HashLink to="/HomePage#services-section">Services</HashLink>
//         <Link to="/CustomerUsage">Customer_Needs</Link>
//         <Link to="/Review">Testimonial</Link>
//         <Link to="/Contacts">Contact</Link>
//         <Link to='/profile'><FontAwesomeIcon icon={faUser}/></Link>        
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo">TrackPro</div>
      <nav className="nav">
        <Link to="/HomePage">Home</Link>
        <Link to="/Aboutus">About Us</Link>
        <HashLink to="/HomePage#services-section">Services</HashLink>
        <div className="dropdown">
          <Link to="/CustomerUsage">Customer Needs</Link>
          <div className="dropdown-content">
            <Link to="/Orders">Orders</Link>
            <Link to="/Track">Track</Link>
          </div>
        </div>
        <Link to="/Review">Testimonial</Link>
        <Link to="/Contacts">Contact</Link>
        <FontAwesomeIcon icon={faUser} />
        {/* <Link to="/profile"></Link>         */}
      </nav>
    </header>
  );
}

export default Navbar;
