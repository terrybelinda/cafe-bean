import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Grid, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { UsaStates as usaStates } from "usa-states";
import { setAlert } from "../../actions/alerts";
import axios from "axios";
import PropTypes from "prop-types";

const Register = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    dob: "",
    apt: "",
    street: "",
    city: "",
    state: "",
    country: "United States",
    zipcode: "",
  });
  const {
    name,
    email,
    password,
    password2,
    dob,
    apt,
    street,
    city,
    state,
    country,
    zipcode,
  } = formData;

  const submitHandler = (e) => {
    e.preventDefault();

    if (password == password2) {
      console.log("DONE");
    } else {
      props.setAlert("Passwords do not match", "danger");
    }

    /*
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const newUser = {
      name,
      email,
      password,
      dob,
      apt,
      street,
      city,
      state,
      country,
      zipcode,
    };
    console.log("Belinda");
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

    */
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const buildOptionsStates = () => {
    var usStates = new usaStates();
    var arr = [];
    usStates.states.forEach(function (entry) {
      arr.push(<option>{entry["abbreviation"]}</option>);
    });
    return arr;
  };
  return (
    <Container className="m-5 d-flex justify-content-center">
      <Form>
        <h3>Sign Up</h3>
        <Form.Row>
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              name="name"
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              value={dob}
              name="dob"
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="Password"
              name="password"
              className="mx-sm-3"
              maxLength="20"
              aria-describedby="passwordHelpInline"
              placeholder="Password"
              value={password}
              onChange={(event) => onChange(event)}
            />
            <Form.Text id="passwordHelpBlock" muted>
              Must be 8-20 characters long.
            </Form.Text>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Re-type Password</Form.Label>
            <Form.Control
              type="Password"
              name="password2"
              placeholder="Password"
              value={password2}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridApt">
            <Form.Control
              placeholder="Apartment"
              value={apt}
              name="apt"
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              placeholder="Street"
              value={street}
              name="street"
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Control
              placeholder="City"
              value={city}
              name="city"
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Control
              as="select"
              placeholder="State"
              value={state}
              name="state"
              onChange={(event) => onChange(event)}
            >
              <option>Choose</option>
              {buildOptionsStates()}
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCountry">
            <Form.Control
              disabled
              placeholder="Country"
              value={country}
              onChange={(event) => onChange(event)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZipcode">
            <Form.Control
              placeholder="Zipcode"
              value={zipcode}
              name="zipcode"
              onChange={(event) => onChange(event)}
            />
          </Form.Group>
        </Form.Row>

        <Button
          variant="primary"
          type="submit"
          onClick={(e) => submitHandler(e)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, { setAlert })(Register);
