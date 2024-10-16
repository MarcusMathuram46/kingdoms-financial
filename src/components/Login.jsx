import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../styles/Login.css';
import { loginUser } from "../utils/config";

function Login({ show, onClose }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(userName, password);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  if (!show) return null;

  return (
    <div className="login-overlay">
      <div className="login-container">
        <button className="close-button" onClick={onClose}>✖</button>
        <Form onSubmit={handleLogin}>
          <h2 className="mb-4 text-center">Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </Form.Group>
          <Button variant="info" type="submit" className="w-100">
            Login
          </Button>
          {message && <p className="mt-3 text-center text-danger">{message}</p>}
        </Form>
      </div>
    </div>
  );
}

export default Login;