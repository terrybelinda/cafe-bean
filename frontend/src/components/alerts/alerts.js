import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Alerts = (props) =>
  props.alerts != null &&
  props.alerts.length > 0 &&
  props.alerts.map((alert) => (
    <Alert key={alert.id} variant="danger">
      {alert.msg}
    </Alert>
  ));

Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps)(Alerts);
