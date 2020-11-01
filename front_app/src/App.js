import React, { Fragment } from "react";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Main />
      <Footer />
    </Fragment>
  );
};

export default App;
