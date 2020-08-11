import React, { Component } from "react";
import { Route } from "react-router-dom";
import login from "./login/login";
import register from "./register/register";
import Navigation from "./navbar/navbar";
import Alerts from "./alerts/alerts";

class Home extends Component {
  render() {
    return (
      <div>
        <Alerts></Alerts>
        <Route path="/" component={Navigation} />
        <Route exact path="/login" component={login} />
        <Route exact path="/register" component={register} />
      </div>
    );
  }
}

export default Home;
