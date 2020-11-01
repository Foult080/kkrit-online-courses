import React, { Fragment } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import logo from "../images/coaching.svg";

const NavBar = () => {
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
          <Button className="mr-1" variant="success">
            Зарегистрироваться
          </Button>
          <Button variant="primary">Войти</Button>
        </Navbar.Collapse>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
