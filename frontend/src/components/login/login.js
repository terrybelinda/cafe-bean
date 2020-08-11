import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const newUser = {
      email,
      password,
    };
    const body = JSON.stringify(newUser);
    axios
      .post("http://localhost:5000/register", body, axiosConfig)
      .then((res) => {
        if (res.status === 200 && res.data != "") {
          console.log(res);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <Container className="m-5 d-flex justify-content-center">
      <Form>
        <h3>Sign In</h3>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            name="email"
            onChange={(event) => onChange(event)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => onChange(event)}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          Login
        </Button>
        <Form.Group>Don't Have an account?</Form.Group>
      </Form>
    </Container>
  );
};
export default Login;
