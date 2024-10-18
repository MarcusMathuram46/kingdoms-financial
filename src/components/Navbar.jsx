import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Navbar({ onLoginClick, onSectionChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    closeNavbar(); // Close the navbar
    onLoginClick(); // Open the login modal
  };

  const handleSectionClick = (section) => {
    closeNavbar(); // Close the navbar
    onSectionChange(section); // Notify the App component
  };

  return (
    <header className="navbar-container">
      <div className="navbar-brand">KINGDOMS FINANCIAL</div>
      <button 
        className="navbar-toggler" 
        type="button" 
        onClick={toggleNavbar}
        aria-expanded={isOpen}
        aria-controls="navbarMenu"
      >
        {isOpen ? '✖' : '☰'}
      </button>
      <nav className={`navbar-menu ${isOpen ? 'active' : ''}`} id="navbarMenu">
        <ul>
          <li>
            <a href="#home" onClick={() => handleSectionClick('home')}>HOME</a>
          </li>
          <li>
            <a href="#about" onClick={() => handleSectionClick('about')}>ABOUT</a>
          </li>
          <li>
            <a href="#services" onClick={() => handleSectionClick('services')}>SERVICES</a>
          </li>
          <li>
            <a href="#why-us" onClick={() => handleSectionClick('why-us')}>WHY US</a>
          </li>
          <li>
            <a href="#enquiry" onClick={() => handleSectionClick('enquiry')}>ENQUIRY</a>
          </li>
          <li className="login-button">
            <a href="#login" onClick={handleLoginClick}>
              <i className="fas fa-sign-in-alt"></i> LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
