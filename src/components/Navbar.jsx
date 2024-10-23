import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';

function Navbar({ isAdmin, onLoginClick, onSectionChange, onLogout }) {
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
                aria-label="Toggle navigation" // Added aria-label for accessibility
            >
                {isOpen ? '✖' : '☰'}
            </button>
            <nav className={`navbar-menu ${isOpen ? 'active' : ''}`} id="navbarMenu">
                <ul className='text-white nav-cursor'>
                    <li>
                        <a onClick={() => handleSectionClick('home')}>HOME</a>
                    </li>
                    <li>
                        <a onClick={() => handleSectionClick('services')}>OUR SERVICES</a>
                    </li>
                    <li>
                        <a onClick={() => handleSectionClick('about')}>ABOUT US</a>
                    </li>
                    <li>
                        <a onClick={() => handleSectionClick('why')}>WHY CHOOSE US</a>
                    </li>
                    <li>
                        <a onClick={() => handleSectionClick('enquiry')}>ENQUIRY</a>
                    </li>
                    {isAdmin && (
                        <li>
                            <a onClick={() => handleSectionClick('admin')}>ADMIN</a>
                        </li>
                    )}
                    {isAdmin ? (
                        <li>
                            <a onClick={onLogout}>LOGOUT</a>
                        </li>
                    ) : (
                        <li className="login-button">
                            <a onClick={handleLoginClick}>
                                <i className="fas fa-sign-in-alt"></i> LOGIN
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
