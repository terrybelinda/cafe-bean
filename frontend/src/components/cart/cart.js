import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { connect } from "react-redux";
import { getCart } from "../../actions/cart";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./cart.css";

const Cart = ({ getCart, cart: { get_cart } }) => {
  useEffect(() => {
    getCart({ user_id: "1" });
  }, []);
  console.log(get_cart && get_cart[0]);

  let itemsToRender;
  {
    if (get_cart && get_cart.length > 0) {
      console.log(get_cart[0]);
      {
        itemsToRender =
          get_cart &&
          get_cart[0].map((cart) => (
            <tr>
              <td>
                <Image
                  src={require("./Coffee-Americano.png")}
                  style={{ width: 100, height: 100 }}
                />
              </td>

              <td>
                <b>{cart.name}</b>
                <br></br>
                <b>Size: </b>
                {cart.size}
                <br></br>
                <b>Qty: </b>
                {cart.quantity}
                <br></br>
              </td>
              <td>
                <FontAwesomeIcon icon={faDollarSign} />
                <b> {cart.cost}</b>
              </td>
            </tr>
          ));
      }
    }
  }

  return (
    <div className="grid-container">
      <div className="grid-child purple">
        <Table responsive>
          <thead>
            <tr>
              <th>Shopping Cart</th>
              <th></th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{itemsToRender}</tbody>
        </Table>
      </div>
      <div className="grid-child green">
        <Container className="m-5 d-flex justify-content-center">
          <Card style={{ width: "18rem" }} bg="light">
            <Card.Body>
              <Card.Title>Subtotal</Card.Title>

              <Card.Text>Pick up time: 30 minutes</Card.Text>

              <Button type="submit" className="mb-2" variant="primary">
                Proceed to Checkout
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
};

const MapToStore = (state) => ({ cart: state.cart });

export default connect(MapToStore, { getCart })(Cart);
