import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Grid, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import Tabs from "react-bootstrap/Tabs";
import { Navbar, Nav, NavDropdown, NavbarBrand } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";

import {
  getProducts,
  getCategories,
  setSelectedProduct,
} from "../../actions/menu";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import NumericInput from "react-numeric-input";

const Menu = ({
  getCategories,
  getProducts,
  setSelectedProduct,
  auth,
  menu: { products, categories },
}) => {
  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  const history = useHistory();

  const onSubmit = (data, e) => {
    setSelectedProduct(data);
    history.push({
      pathname: "/product",
      state: {
        response: "hello",
      },
    });
  };

  console.log(products && products[0]);
  const names = ["James", "Paul", "John", "George", "Ringo"];

  let itemsToRender;
  {
    if (categories && categories.length > 0) {
      console.log(categories[0]);
      {
        itemsToRender =
          categories &&
          categories[0].map((category) => (
            <Nav.Item>
              <Nav.Link eventKey={category.category}>
                {category.category}
              </Nav.Link>
            </Nav.Item>
          ));
      }
    }
  }

  let productsToRender;
  {
    if (
      categories &&
      categories.length > 0 &&
      products &&
      products.length > 0
    ) {
      productsToRender =
        categories &&
        categories[0].map((category) => (
          <Tab.Pane eventKey={category.category}>
            {" "}
            {products[0]
              .filter((product) => product.category == category.category)
              .map((filteredProduct) => (
                <div onClick={(e) => onSubmit(filteredProduct, e)}>
                  <Card border="primary" style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>{filteredProduct.name} </Card.Title>
                      <Card.Text>{filteredProduct.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
          </Tab.Pane>
        ));
    }
  }

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey={names[0]}>
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            {itemsToRender}
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>{productsToRender}</Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
};

Menu.propTypes = {
  getProducts: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  setSelectedProduct: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  menu: state.menu,
});

export default connect(mapStateToProps, {
  getProducts,
  getCategories,
  setSelectedProduct,
})(Menu);
