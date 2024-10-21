import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './styles/App.css';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Why from './components/Why';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import Admin from './components/Admin';

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false); // Track if an admin has logged in
    const [activeSection, setActiveSection] = useState('home');

    const handleLoginClick = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);

    const handleSectionChange = (section) => setActiveSection(section);

    const handleLoginSuccess = () => {
        console.log("Admin logged in successfully");
        setIsAdmin(true); // Mark admin as logged in
        setActiveSection('admin'); // Switch to the admin section
        closeLogin(); // Close the login modal
    };

    const handleLogout = () => {
        setIsAdmin(false);
        setActiveSection('home'); // Redirect to home after logout
    };

    const renderComponent = () => {
        console.log("Rendering component. Active Section:", activeSection, "Is Admin:", isAdmin);
        
        switch (activeSection) {
            case 'home':
                return (
                    <>
                        <Home />
                        <Services />
                        <About />
                        <Why />
                    </>
                );
            case 'enquiry':
                return <Enquiry />;
            case 'admin':
                return <Admin />;
            default:
                return <Home />; // Fallback
        }
    };

    return (
        <div className="App">
            <Navbar 
                isAdmin={isAdmin} 
                onLoginClick={handleLoginClick} 
                onSectionChange={handleSectionChange} 
                onLogout={handleLogout} 
            />
            <div>{renderComponent()}</div>
            <Footer />
            <Login show={showLogin} onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default App;
