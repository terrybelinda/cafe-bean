import React, { Component } from "react";
import { Route } from "react-router-dom";
import login from "./login/login";
import register from "./register/register";
import Navigation from "./navbar/navbar";
import Alerts from "./alerts/alerts";
import menu from "./menu/menu";
import Tab from "./Tab/Tab";
import Product from "./product/product";
import Cart from "./cart/cart";
class Home extends Component {
  render() {
    return (
      <div>
        <Alerts></Alerts>
        <Route path="/" component={Navigation} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
        <Route exact path="/Tab" component={Tab} />
        <Route exact path="/menu" component={menu} />
        <Route exact path="/product" component={Product} />
        <Route exact path="/cart" component={Cart} />
      </div>
    );
  }
}

export default Home;
