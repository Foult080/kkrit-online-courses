import React, { Fragment } from "react";
import { Button } from "react-bootstrap";

const Main = () => {
  return (
    <Fragment>
      <div className="container">
        <div id="title" className="text-center">
          <h1 style={styles.title}>KKRIT-ONLINE-COURSES</h1>
          <h1 style={styles.sub}>Made by @foult080</h1>
          <div className="my-4">
          <Button size="lg" className="mr-1" variant="success">Зарегистрироваться</Button>
          <Button size="lg" variant="primary">Войти</Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const styles = {
  title: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "72px",
    lineHeight: "84px",
    marginTop: "15%"
  },
  sub: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "36px",
    lineHeight: "56px",
  },
};

export default Main;
