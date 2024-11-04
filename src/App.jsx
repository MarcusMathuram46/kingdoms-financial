import React, { useState, useEffect } from 'react';
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
import axios from 'axios'; // Import axios for API calls

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(() => {
        // Check localStorage for admin state
        const savedIsAdmin = localStorage.getItem('isAdmin');
        return savedIsAdmin === 'true'; // Return true or false based on localStorage
    });
    const [activeSection, setActiveSection] = useState('home');
    const [advertisements, setAdvertisements] = useState([]);

    // Fetch advertisements on component mount
    useEffect(() => {
        const fetchAdvertisements = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/advertisements');
                setAdvertisements(response.data); // Set the advertisements in state
            } catch (error) {
                console.error('Error fetching advertisements:', error);
            }
        };

        fetchAdvertisements(); // Call the function on component mount
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    // Show login modal
    const handleLoginClick = () => setShowLogin(true);

    // Close login modal
    const closeLogin = () => setShowLogin(false);

    // Handle successful login (admin access granted)
    const handleLoginSuccess = () => {
        setIsAdmin(true);
        localStorage.setItem('isAdmin', 'true'); // Persist admin state in localStorage
        setActiveSection('admin');
        closeLogin();
    };

    // Add advertisements sent from Admin component
    const handleAddAdvertisement = (ad) => {
        setAdvertisements((prevAds) => [...prevAds, ad]);
    };

    // Handle logout: clear admin access and redirect to home
    const handleLogout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin'); // Remove admin state from localStorage
        setActiveSection('home');
    };

    // Function to render the selected section's component
    const renderComponents = () => {
        switch (activeSection) {
            case 'home':
                return (
                    <>
                        <Home advertisements={advertisements} />
                        <Services />
                        <About />
                        <Why />
                    </>
                );
            case 'services':
                return <Services />;
            case 'about':
                return <About />;
            case 'why':
                return <Why />;
            case 'enquiry':
                return <Enquiry />;
            case 'admin':
                return isAdmin ? <Admin onAddAdvertisement={handleAddAdvertisement} /> : null; // Only render Admin if isAdmin is true
            default:
                return (
                    <>
                        <Home advertisements={advertisements} />
                        <Services />
                        <About />
                        <Why />
                    </>
                );
        }
    };

    return (
        <div className="App">
            {/* Navbar with admin and section navigation control */}
            <Navbar
                isAdmin={isAdmin}
                onLoginClick={handleLoginClick}
                onSectionChange={setActiveSection}
                onLogout={handleLogout} // Updated logout handler
            />

            {/* Render selected section */}
            <div>{renderComponents()}</div>

            {/* Render Footer on every page */}
            <Footer />

            {/* Login modal */}
            <Login show={showLogin} onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default App;
