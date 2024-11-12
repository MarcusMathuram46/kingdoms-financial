import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar({ isAdmin, onLoginClick, onLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);
  const closeNavbar = () => setIsOpen(false);

  const handleLoginClick = () => {
    closeNavbar();
    onLoginClick();
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
        aria-label="Toggle navigation"
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <nav className={`navbar-menu ${isOpen ? "active" : ""}`} id="navbarMenu">
        <ul className="text-white nav-cursor">
          {isAdmin ? (
            <>
              <li>
                <Link to="/admin/slider-list">Slider List</Link>
              </li>
              <li>
                <Link to="/admin/service-list">Service</Link>
              </li>
              <li>
                <Link to="/admin/visitor-list">Visitor List</Link>
              </li>
              <li>
                <Link to="/admin/enquiry-list">Enquiry List</Link>
              </li>
              <li>
                <a onClick={onLogout}>LOGOUT</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/services">OUR SERVICES</Link>
              </li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>
                <Link to="/why">WHY CHOOSE US</Link>
              </li>
              <li>
                <Link to="/enquiry">ENQUIRY</Link>
              </li>
              <li className="login-button">
                <a onClick={handleLoginClick}>
                  <i className="fas fa-sign-in-alt"></i> LOGIN
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
