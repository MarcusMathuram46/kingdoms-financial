import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './Components/Login';
import './styles/App.css'
import Home from './components/Home';
function App() {
   return (
    <div>
      <Navbar />
      <Home />
      <Login />
    </div>
  )
}

export default App;


