import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Grid, Row, Col, Card } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import NumericInput from "react-numeric-input";
import "./product.css";
import { selectedProduct } from "../../actions/menu";
import { insertCart } from "../../actions/cart";
import { FormControl } from "react-bootstrap";
import ReactDOM from "react-dom";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = ({
  insertCart,
  menu: { products, categories, selectedProduct },
}) => {
  const [formData, setFormData] = useState({
    quantity: 1,
    size: "Short (8 fl oz)",
  });

  const { quantity, size } = formData;

  const onChange = (e) => {
    console.log("pp");
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (data, e) => {
    e.preventDefault();
    console.log("progress");
    console.log(data);
    console.log(formData);
    insertCart({
      user_id: 1,
      product_id: data.data.id,
      quantity: quantity,
      cost: data.data.unit_price,
      size: size,
    });
  };

  return (
    <div className="grid-container">
      <div className="grid-child purple">
        <Breadcrumb style={{ backgroundColor: "#db2c2c" }}>
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <h5>
          {selectedProduct && selectedProduct.data && selectedProduct.data.name}
        </h5>
      </div>

      <div className="grid-child green">
        <Container className="m-5 d-flex justify-content-center">
          <Form>
            <Form.Group>
              <Form.Label>Quantity</Form.Label>
              <NumericInput
                initValue={quantity}
                min={1}
                max={5}
                value={quantity}
                name="quantity"
                onChange={(value) =>
                  setFormData({ ...formData, quantity: value })
                }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Size</Form.Label>
              <Form.Control
                as="select"
                name="size"
                onChange={(event) => onChange(event)}
              >
                <option>Short (8 fl oz)</option>
                <option>Tall (12 fl oz) </option>
                <option>Grande (16 fl oz)</option>
                <option>Venti (20 fl oz)</option>
              </Form.Control>
            </Form.Group>
            <Form.Group>
              price:{" "}
              {selectedProduct &&
                selectedProduct.data &&
                selectedProduct.data.unit_price}
              <FontAwesomeIcon icon={faDollarSign} />
            </Form.Group>

            <Form.Group>
              <Button
                type="submit"
                className="mb-2"
                variant="primary"
                onClick={(e) => submitHandler(selectedProduct, e)}
              >
                Add to Order
              </Button>
            </Form.Group>
          </Form>
        </Container>
      </div>
    </div>
  );
};
Product.propTypes = {
  insertCart: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  menu: state.menu,
});
export default connect(mapStateToProps, { insertCart })(Product);
