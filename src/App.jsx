import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importing JS is crucial for functionality
import Navbar from './components/Navbar';
import Login from './Components/Login';
import './styles/App.css'
import Home from './components/Home';

function App() {
   return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
      </main>
      <Login />
    </div>
  )
}

export default App;


