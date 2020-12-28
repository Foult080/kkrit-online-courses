import React, { Fragment } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <Fragment>
      <div className="container">
        <div id="title" className="text-center">
          <h1 className="main-page-title">KKRIT-ONLINE-COURSES</h1>
          <h1 className="main-page-sub">Made by @foult080</h1>
          <div className="my-4">
            <Link to="/signin">
            <Button size="lg" className="mr-1" variant="success">
              <i className="fas fa-user-plus mr-1"></i>
              Зарегистрироваться
            </Button>
            </Link>
            <Link to="/login">
            <Button size="lg" variant="primary">
              <i className="fas fa-sign-in-alt mr-1"></i>
              Войти
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
