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
import SliderList from './components/SliderList';
import VisitorList from './components/VisitorList';
import EnquiryList from './components/EnquiryList';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function App() {
    const [showLogin, setShowLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(() => JSON.parse(localStorage.getItem('isAdmin')) || false);
    const [activeSection, setActiveSection] = useState('home'); // Set initial section to 'home'
    const [advertisements, setAdvertisements] = useState([]);
    const [enquiries, setEnquiries] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loadingAdvertisements, setLoadingAdvertisements] = useState(true);
    const [loadingEnquiries, setLoadingEnquiries] = useState(true);

    // Fetch advertisements when component mounts
    const fetchAdvertisements = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/advertisements');
            setAdvertisements(response.data);
        } catch (error) {
            setErrorMessage('Error fetching advertisements');
            console.error(error);
        } finally {
            setLoadingAdvertisements(false);
        }
    };

    // Fetch enquiries when component mounts
    const fetchEnquiries = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/enquiries');
            setEnquiries(response.data);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage('Error fetching enquiries');
            console.error(error);
        } finally {
            setLoadingEnquiries(false);
        }
    };

    useEffect(() => {
        fetchAdvertisements();
        fetchEnquiries();
        setActiveSection('home'); // Ensure the active section is set to 'home' on initial load
    }, []);

    const handleLoginClick = () => setShowLogin(true);
    const closeLogin = () => setShowLogin(false);

    const handleLoginSuccess = () => {
        setIsAdmin(true);
        localStorage.setItem('isAdmin', JSON.stringify(true));
        setActiveSection('admin');
        closeLogin();
    };

    const handleLogout = () => {
        setIsAdmin(false);
        localStorage.removeItem('isAdmin');
        setActiveSection('home');
    };

    const renderAdminComponents = () => {
        switch (activeSection) {
            case 'sliderList':
                return <SliderList />;
            case 'visitorList':
                return <VisitorList />;
            case 'enquiryList':
                return <EnquiryList enquiries={enquiries} fetchEnquiries={fetchEnquiries} />;
            default:
                return <SliderList />;
        }
    };

    const renderUserComponents = () => {
        switch (activeSection) {
            case 'services':
                return <Services />;
            case 'about':
                return <About />;
            case 'why':
                return <Why />;
            case 'enquiry':
                return <Enquiry fetchEnquiries={fetchEnquiries} />;
            case 'home':
            default:
                return (
                    <>
                        {loadingAdvertisements || loadingEnquiries ? (
                            <div className="spinner-container">
                                <ClipLoader color="#000" loading={true} size={50} />
                            </div>
                        ) : (
                            <>
                                <Home advertisements={advertisements} />
                                <About />
                                <Services />
                                <Why />
                            </>
                        )}
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
                onLogout={handleLogout}
            />
            <div>{isAdmin ? renderAdminComponents() : renderUserComponents()}</div>
            {!isAdmin && <Footer />}
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <Login show={showLogin} onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
        </div>
    );
}

export default App;
