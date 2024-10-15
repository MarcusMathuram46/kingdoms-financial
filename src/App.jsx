import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './Components/Login';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const handleLoginClick=()=>{
    setShowLogin(true);
    setIsOpen(false);
  }
  return (
    <div className="App bg-primary vh-100 text-white">
      <header className="d-flex justify-content-between align-items-center p-3">
        <h1 className="fs-5 fw-bold">KINGDOMS FINANCIAL</h1>
        <button 
          className="navbar-toggler text-white border-0" 
          type="button" 
          onClick={toggleNavbar}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </header>

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

      {!showLogin ? (
        <main className="text-center mt-5">
        <h2 className="display-4 fw-bold">COMPLETE INSURANCE COVERAGE</h2>
        <p className="lead">
          Protect what matters most with our comprehensive insurance solutions.
          From health and life insurance to property and auto coverage, we offer
          plans to safeguard your assets and provide peace of mind.
        </p>
        <button className="btn btn-info btn-lg text-white">Read More</button>
      </main>
      ):(
        <Login />
      )}
    </div>
  );
}

export default App;


