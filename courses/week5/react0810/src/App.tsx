import React from "react";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import Reload from "./components/Reload";
import Home from "./components/Home";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Forecast from "./components/Forecast";

import { Component } from "react";

//import Home from "./Home"

class App extends React.Component {
  render() {
    const user = localStorage.getItem("logged");
    //localStorage.removeItem("logged");

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-success">
          <Link to={"/"} className="navbar-brand">
            panda
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
          </div>

          {user ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/forecast"} className="nav-link">
                  Forecast
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="/logout"
                  className="nav-link" /*onClick={this.logOut}*/
                >
                  Logout
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Sing in
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/logout" component={LogOut} />
            <Route exact path="/logout" component={Reload} />
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/forecast" component={Forecast} />
          </Switch>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;
