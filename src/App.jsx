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

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const closeLogin = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      <Navbar onLoginClick={handleLoginClick} />
      <main>
        <Home />
      </main>
      <Services />
      <About />
      <Why />
      <Enquiry />
      <Login show={showLogin} onClose={closeLogin} />
      <Footer />
    </div>
  );
}

export default App;