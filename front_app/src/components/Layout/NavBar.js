import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../../images/coaching.svg";
import { Link } from "react-router-dom";
import { logOut } from "../../actions/auth";

const NavBar = ({ auth: { loading, isAuth }, logOut }) => {
  const authLinks = (
    <Fragment>
      <Link to="/dashboard">
        <Button className="mr-1" variant="success">
          <i class="far fa-address-book mr-1"></i>Личный кабинет
        </Button>
      </Link>
      <Button variant="danger" onClick={logOut}>
        <i className="fas fa-sign-out-alt mr-1"></i>Выйти
      </Button>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link to="/signup">
        <Button className="mr-1" variant="success">
          <i className="fas fa-user-plus mr-1"></i>Зарегистрироваться
        </Button>
      </Link>
      <Link to="/login">
        <Button variant="primary">
          <i className="fas fa-sign-in-alt mr-1"></i>Войти
        </Button>
      </Link>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="top"
      >
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="logo"
            width="35"
            height="35"
            className="d-inline-block align-top"
            style={{ color: "blue" }}
          />{" "}
          ККРИТ Онлайн Курсы
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">О площадке</Nav.Link>
            <Nav.Link href="#pricing">Поддержать проект</Nav.Link>
          </Nav>
          {!loading && isAuth ? authLinks : guestLinks}
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logOut: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logOut })(NavBar);
