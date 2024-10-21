import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import '../styles/Login.css';
import { loginUser } from "../utils/config";

function Login({ show, onClose, onLoginSuccess }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (setter) => (e) => {
    setMessage(""); // Clear message on new input
    setter(e.target.value); // Update state
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    setIsLoading(true); // Start loading

    // Check if both fields are filled
    if (!userName || !password) {
      setMessage("Username and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      console.log('Attempting to login with:', { userName, password }); // Debugging log
      const data = await loginUser(userName, password);
      console.log('Login response:', data); // Log the response

      // Handle login success
      if (data.isAdmin) {
        setMessage("Login successful! Redirecting to admin page...");
        onLoginSuccess(); // Notify parent component of successful login
        resetForm(); // Reset the form after login success
      } else {
        setMessage("Unauthorized access. Only admins can log in.");
      }
    } catch (error) {
      console.error('Login failed:', error);
      setMessage(error.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false); // Stop loading after the API call
    }
  };

  // Reset the form fields
  const resetForm = () => {
    setUserName("");
    setPassword("");
  };

  // Render nothing if not showing
  if (!show) return null;

  return (
    <div className="login-overlay">
      <div className="login-container">
        <button className="close-button" onClick={onClose} aria-label="Close Login">✖</button>
        <Form onSubmit={handleLogin}>
          <h2 className="mb-4 text-center">Admin Login</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              value={userName} 
              onChange={handleInputChange(setUserName)} 
              aria-label="Enter username" 
              required 
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Enter password" 
              value={password} 
              onChange={handleInputChange(setPassword)} 
              aria-label="Enter password" 
              required 
            />
          </Form.Group>
          <Button variant="info" type="submit" className="w-100" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
          {message && (
            <p className="mt-3 text-center text-danger" aria-live="assertive">
              {message}
            </p>
          )}
        </Form>
      </div>
    </div>
  );
}

export default Login;
