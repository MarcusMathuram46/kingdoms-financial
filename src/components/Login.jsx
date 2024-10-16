import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../utils/config";

function Login() {
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

  return (
    <div id="login" className="d-flex justify-content-center align-items-center vh-100">
      <Form onSubmit={handleLogin} className="align-items-center w-75 w-md-50 w-lg-40 px-4 py-3 border rounded bg-light">
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
          Submit
        </Button>
        {message && <p className="mt-3 text-center text-danger">{message}</p>}
      </Form>
    </div>
  );
}

export default Login;
