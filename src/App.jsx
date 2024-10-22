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
    const [isAdmin, setIsAdmin] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [advertisements, setAdvertisements] = useState([]);

    const handleLoginClick = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);

    const handleLoginSuccess = () => {
        setIsAdmin(true);
        setActiveSection('admin');
        closeLogin();
    };

    const handleAddAdvertisement = (ad) => {
        setAdvertisements((prevAds) => [...prevAds, ad]);
    };

    const renderComponents = () => {
        if (activeSection === 'home') {
            return (
                <>
                    <Home advertisements={advertisements} />
                    <Services />
                    <About />
                    <Why />
                    <Footer />
                </>
            );
        }

        switch (activeSection) {
            case 'services':
                return (
                    <>
                        <Services />
                        <Footer />
                    </>
                );
            case 'about':
                return (
                    <>
                        <About />
                        <Footer />
                    </>
                );
            case 'why':
                return (
                    <>
                        <Why />
                        <Footer />
                    </>
                );
            case 'enquiry':
                return (
                    <>
                        <Enquiry />
                        <Footer />
                    </>
                );
            case 'admin':
                return <Admin onAddAdvertisement={handleAddAdvertisement} />;
            default:
                return (
                    <>
                        <Home advertisements={advertisements} />
                        <Services />
                        <About />
                        <Why />
                        <Footer />
                    </>
                );
        }
    };

    return (
        <div className="App">
            <Navbar 
                isAdmin={isAdmin} 
                onLoginClick={handleLoginClick} 
                onSectionChange={setActiveSection} 
                onLogout={() => setIsAdmin(false)} // Add logout function
            />
            <div>{renderComponents()}</div> {/* Render the selected components here */}
            <Login show={showLogin} onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default App;
