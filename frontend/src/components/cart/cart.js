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
  );
};

const MapToStore = (state) => ({ cart: state.cart });

export default connect(MapToStore, { getCart })(Cart);
