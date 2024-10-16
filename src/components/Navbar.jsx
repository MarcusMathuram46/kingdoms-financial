import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import Home from './Home'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App bg-primary vh-100 text-white">
        <Home isOpen={isOpen} toggleNavbar={toggleNavbar} />
      {isOpen && (
        <nav className="navbar-menu">
          <ul className="list-unstyled text-center">
            <li><a href="#home" className="text-white text-decoration-none">HOME</a></li>
            <li><a href="#about" className="text-white text-decoration-none">ABOUT</a></li>
            <li><a href="#services" className="text-white text-decoration-none">SERVICES</a></li>
            <li><a href="#why-us" className="text-white text-decoration-none">WHY US</a></li>
            <li><a href="#enquiry" className="text-white text-decoration-none">ENQUIRY</a></li>
            <li><a href="#login" className="text-white text-decoration-none">LOGIN</a></li>
          </ul>
        </nav>
      )}        
    </div>
  )
}

export default Navbar
