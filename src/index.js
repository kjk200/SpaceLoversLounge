import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, NavLink, Switch, Redirect } from "react-router-dom";

// importing Components

import Home from "./Components/home";
import Header from "./Components/header";
import Footer from "./Components/footer";
import ISSLoc from "./Components/issLoc";
import Mars from "./Components/mars";

const App = () => {
  return (
    <BrowserRouter>
      <div className="appDiv">
        <Header></Header>
        <div className="navBar">
          <nav role="navigation" className="navLinks">
            <NavLink to="/" activeClassName="active" className="nav-item" activeStyle={{ color: 'violet' }} exact data-page="home"><span className="iconrocket"></span>
            Home
          </NavLink>
            <NavLink to="/iss" activeClassName="active" className="nav-item" activeStyle={{ color: "violet" }} exact data-page="iss"><span className="iconrocket" ></span>
            Where is ISS
          </NavLink>
            <NavLink to="/mars" activeClassName="active" className="nav-item" activeStyle={{ color: "violet" }} exact data-page="mars"><span className="iconrocket" ></span>
            Mars Photos
          </NavLink>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/iss" component={ISSLoc}></Route>
          <Route exact path="/mars" component={Mars}></Route>
        </Switch>
      </div>
      <Footer className="footerDiv" />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
