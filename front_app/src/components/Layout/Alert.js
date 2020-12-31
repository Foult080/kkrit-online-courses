import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Alert } from "react-bootstrap";

const Alerts = ({ alerts }) => {
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <Alert style={styles.alert} key={alert.id} variant={alert.type}>
        {alert.msg}
      </Alert>
    ))
  );
};
Alerts.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapState = (state) => ({
  alerts: state.alert,
});

const styles = {
  alert: {
    marginBottom: 0,
    opacity: 0.7,
    position: "relative",
    zIndex: -1,
    textAlign: "center",
  },
};

export default connect(mapState)(Alerts);
