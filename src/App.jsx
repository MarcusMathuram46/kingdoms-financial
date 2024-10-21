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

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  // Use an object to map sections to components
  const sections = {
    home: (
      <>
        <Home />
        <Services />
        <About />
        <Why />
      </>
    ),
    enquiry: <Enquiry />,
    about: <About />,
    services: <Services />,
    'why-us': <Why />
  };

  // Default to Home if activeSection is undefined
  const renderComponent = () => sections[activeSection] || sections['home'];

  return (
    <div className="App">
      <Navbar 
        onLoginClick={handleLoginClick} 
        onSectionChange={handleSectionChange} 
        activeSection={activeSection} // Pass activeSection to highlight the active nav item
      />
      <div>{renderComponent()}</div>
      <Footer />
      <Login show={showLogin} onClose={closeLogin} />
    </div>
  );
}

export default App;
