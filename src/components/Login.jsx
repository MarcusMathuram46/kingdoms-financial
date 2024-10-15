import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();

  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      console.log('sending request with', userName, password)
      const response = await axios.post('http://localhost:5173/api/login',{
        username: userName,
        password: password
      })
      console.log('response', response)
      setMessage(response.data.message)
    }catch(err){
      console.error('Error', err)
      setMessage('Invalid username or password')
    }

  }
  return (
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
  );
}

export default Login;
