import React from "react";
import { Button, Form } from "react-bootstrap";

function Login() {
  return (
    <Form className="">
        <h2>Login</h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>UserName</Form.Label>
        <Form.Control type="name" placeholder="Enter UserName" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" />
      </Form.Group>
      <Button variant="info" type="submit">Submit</Button>
    </Form>
  );
}

export default Login;
