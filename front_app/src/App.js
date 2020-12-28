import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//components
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import Ex404 from "./Components/Ex404";

const App = () => {
  return (
    <Fragment>
      <Router>
        <NavBar />
        <section className="wrapper">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route component={Ex404} />
          </Switch>
        </section>
        <Footer />
      </Router>
    </Fragment>
  );
};

export default App;
