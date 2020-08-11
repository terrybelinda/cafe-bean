import { Navbar, Nav, NavDropdown, NavbarBrand } from "react-bootstrap";
import React, { Component } from "react";

class Navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">CafeBean</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Products</Nav.Link>
          <Nav.Link href="#features">Previous Orders</Nav.Link>
        </Nav>
        <Nav className="mr-right">
          <Nav.Link href="#pricing">Cart</Nav.Link>
          <Nav.Link href="#pricing">Register</Nav.Link>
          <Nav.Link href="#pricing">Login</Nav.Link>
          <Nav.Link href="#pricing">Logout</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default Navigation;
