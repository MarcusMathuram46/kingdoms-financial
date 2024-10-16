import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../utils/config";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

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
      <Form onSubmit={handleLogin} className="ml-5 align-items-center w-50">
        <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="text" placeholder="Enter UserName" value={userName} onChange={(e)=> setUserName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="info" type="submit">Submit</Button>
      {message && <p className="mt-3">{message}</p>}
    </Form>
    </div>
  );
}

export default Login;
