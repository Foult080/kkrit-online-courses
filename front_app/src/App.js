import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//redux
import { Provider } from "react-redux";
import store from "./store";
//auth
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";
import PrivateRoute from "./components/PrivateRoute";

//components
import Footer from "./components/Layout/Footer";
import NavBar from "./components/Layout/NavBar";
import Main from "./components/Layout/Main";
import Ex404 from "./components/Layout/Ex404";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Layout/Dashboard";

const App = () => {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <NavBar />
          <section className="wrapper">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <Route component={Ex404} />
            </Switch>
          </section>
          <Footer />
        </Router>
      </Fragment>
    </Provider>
  );
};

export default App;
