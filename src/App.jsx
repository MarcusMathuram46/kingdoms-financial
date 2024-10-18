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

  const renderComponent = () => {
    if (activeSection === 'home') {
      return (
        <>
          <Home />
          <Services />
          <About />
          <Why />
          {/* You can also add any other components you want to show here */}
        </>
      );
    }

    if (activeSection === 'enquiry') {
      return <Enquiry />;
    }

    // For other sections
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'why-us':
        return <Why />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <Navbar onLoginClick={handleLoginClick} onSectionChange={handleSectionChange} />
      <div>{renderComponent()}</div>
      <Footer />
      <Login show={showLogin} onClose={closeLogin} />
    </div>
  );
}

export default App;
