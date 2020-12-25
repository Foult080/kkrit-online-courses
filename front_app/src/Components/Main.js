import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Main = () => {
  return (
    <Fragment>
      <div className="container">
        <div id="title" className="text-center">
          <h1 className="main-page-title">KKRIT-ONLINE-COURSES</h1>
          <h1 className="main-page-sub">Made by @foult080</h1>
          <div className="my-4">
          <Button size="lg" className="mr-1" variant="success">Зарегистрироваться</Button>
          <Button size="lg" variant="primary">Войти</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;