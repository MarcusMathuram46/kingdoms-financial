import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './styles/App.css';
import Home from './components/Home';
import Services from './components/Services';  
import ServiceList from './components/ServiceList';  // Import ServiceList
import About from './components/About';
import Why from './components/Why';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import SliderList from './components/SliderList';
import VisitorList from './components/VisitorList';
import EnquiryList from './components/EnquiryList';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import Admin from './components/Admin';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => JSON.parse(localStorage.getItem('isAdmin')) || false);
  const [activeSection, setActiveSection] = useState('home');
  const [advertisements, setAdvertisements] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [services, setServices] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loadingAdvertisements, setLoadingAdvertisements] = useState(true);
  const [loadingEnquiries, setLoadingEnquiries] = useState(true);
  const [loadingServices, setLoadingServices] = useState(true);

  // Fetch Advertisements
  const fetchAdvertisements = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/advertisements');
      setAdvertisements(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setErrorMessage('Error fetching advertisements');
      console.error(error);
    } finally {
      setLoadingAdvertisements(false);
    }
  };

  // Fetch Enquiries
  const fetchEnquiries = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/enquiries');
      setEnquiries(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      setErrorMessage('Error fetching enquiries');
      console.error(error);
    } finally {
      setLoadingEnquiries(false);
    }
  };

  // Fetch Services
  const fetchServices = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/services');
        console.log('Fetched services:', response.data);  // Debugging line
        setServices(Array.isArray(response.data.services) ? response.data.services : []);
    } catch (error) {
        setErrorMessage('Error fetching services');
        console.error(error);
    } finally {
        setLoadingServices(false);
    }
};

  

  // Fetch data on component mount
  useEffect(() => {
    fetchAdvertisements();
    fetchEnquiries();
    fetchServices();
    setActiveSection('home');
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
      case 'serviceList':
        return <ServiceList services={services} fetchServices={fetchServices} />;  // Render ServiceList for managing services
      default:
        return <SliderList />;
    }
  };

  const renderUserComponents = () => {
    switch (activeSection) {
      case 'services':
        return <Services services={services} />;  // Display services to the users
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
            {loadingAdvertisements || loadingEnquiries || loadingServices ? (
              <div className="spinner-container">
                <ClipLoader color="#000" loading={true} size={50} />
              </div>
            ) : (
              <>
                <Home advertisements={advertisements} />
                <About />
                <Services services={services} />  {/* Render the Services component here */}
                <Admin />
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
