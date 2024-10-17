import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Navbar({ onLoginClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
    onLoginClick(); // Open the login modal at the same time
  };

  return (
    <header className="navbar-container">
      <div className="navbar-brand">KINGDOMS FINANCIAL</div>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleNavbar}
      >
        {isOpen ? '✖' : '☰'}
      </button>
      <nav className={`navbar-menu ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#services">SERVICES</a></li>
          <li><a href="#why-us">WHY US</a></li>
          <li><a href="#enquiry">ENQUIRY</a></li>
          <li>
            {/* Close navbar and trigger login modal */}
            <button onClick={closeNavbar} className="login-button">LOGIN</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;