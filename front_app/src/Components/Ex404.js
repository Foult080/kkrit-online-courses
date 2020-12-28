import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const Ex404 = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="text-center">
          <h1 style={styles.err}>404</h1>
          <i style={styles.ico} className="far fa-window-close"></i>
          <p style={styles.title}>Страница не найдена</p>

          <Link to="/">
            <button className="btn btn-primary mr-1">
              <i className="fas fa-home"></i> На главную
            </button>
          </Link>
          <Link to="/dashboard">
            <Button className="btn btn-success">
              <i className="fas fa-user-circle"></i> Личный кабинет
            </Button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  title: {
    fontSize: "48px",
  },
  err: {
    marginTop: "6rem",
    fontSize: "86px",
    fontWeignt: "bold",
  },
  ico: {
    fontSize: "48px",
    color: "#dc3545",
  },
};

export default Ex404;
