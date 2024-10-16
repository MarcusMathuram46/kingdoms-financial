import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importing JS is crucial for functionality
import Navbar from './components/Navbar';
import Login from './Components/Login';
import './styles/App.css'
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Why from './components/Why';
import Enquiry from './components/Enquiry';
import Footer from './components/Footer';
function App() {
   return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Services />
      <About />
      <Why />
      <Enquiry />
      <Login />
      <Footer />
    </div>
  )
}

export default App;


