import React from "react";
import Tabs from "react-bootstrap/Tabs";
import { Grid, Row, Col, Card } from "react-bootstrap";
import { Navbar, Nav, NavDropdown, NavbarBrand } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

const Taba = (props) => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav className="flex-column" bg="dark" variant="dark">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {" "}
              <Card border="primary" style={{ width: "18rem" }}>
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>Primary Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Tab.Pane>
            <Tab.Pane eventKey="second">"ll"</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};
export default Taba;
