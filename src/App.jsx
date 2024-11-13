import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import './styles/App.css';
import Home from './components/Home';
import Services from './components/Services';
import ServiceList from './components/ServiceList';
import About from './components/About';
import Why from './components/Why';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
import SliderList from './components/SliderList';
import VisitorList from './components/VisitorList';
import EnquiryList from './components/EnquiryList';
import Profile from './components/Profile';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isAdmin, setIsAdmin] = useState(() => JSON.parse(localStorage.getItem('isAdmin')) || false);
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
      setServices(Array.isArray(response.data.services) ? response.data.services : []);
    } catch (error) {
      setErrorMessage('Error fetching services');
      console.error(error);
    } finally {
      setLoadingServices(false);
    }
  };

  useEffect(() => {
    fetchAdvertisements();
    fetchEnquiries();
    fetchServices();
  }, []);

  const handleLoginClick = () => setShowLogin(true);
  const closeLogin = () => setShowLogin(false);

  const handleLoginSuccess = () => {
    setIsAdmin(true);
    localStorage.setItem('isAdmin', JSON.stringify(true));
    closeLogin();
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('isAdmin');
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          isAdmin={isAdmin}
          onLoginClick={handleLoginClick}
          onLogout={handleLogout}
        />

        {/* Routes for different components */}
        <Routes>
          {/* Redirect to SliderList after login if admin */}
          {isAdmin ? (
            <Route path="/" element={<SliderList />} />
          ) : (
            <Route
              path="/"
              element={
                loadingAdvertisements || loadingEnquiries || loadingServices ? (
                  <div className="spinner-container">
                    <ClipLoader color="#000" loading={true} size={50} />
                  </div>
                ) : (
                  <>
                    <Home advertisements={advertisements} />
                    <About />
                    <Services services={services} />
                    <Profile />
                    <Why />
                  </>
                )
              }
            />
          )}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services services={services} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/why" element={<Why />} />
          <Route path="/enquiry" element={<Enquiry fetchEnquiries={fetchEnquiries} />} />

          {/* Admin Protected Routes */}
          {isAdmin ? (
            <>
              <Route path="/admin/slider-list" element={<SliderList />} />
              <Route path="/admin/visitor-list" element={<VisitorList />} />
              <Route path="/admin/enquiry-list" element={<EnquiryList enquiries={enquiries} fetchEnquiries={fetchEnquiries} />} />
              <Route path="/admin/service-list" element={<ServiceList services={services} fetchServices={fetchServices} />} />
            </>
          ) : (
            <Route path="/admin/*" element={<Navigate to="/" />} />
          )}

          {/* Redirect to Home for any unknown routes */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Footer should only appear on public routes */}
        {!isAdmin && <Footer />}

        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {/* Login Modal */}
        <Login show={showLogin} onClose={closeLogin} onLoginSuccess={handleLoginSuccess} />
      </div>
    </Router>
  );
}

export default App;
