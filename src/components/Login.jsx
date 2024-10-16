import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { loginUser } from "../utils/config";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(userName, password);
      setMessage(data.message);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div id="login">
      {/* Navbar Login Button */}
      <Button variant="info" onClick={handleShow} className="ms-auto">
        Login
      </Button>

      {/* Login Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleLogin}>
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
          </Form>
          {message && <p className="mt-3 text-center text-danger">{message}</p>}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Login;