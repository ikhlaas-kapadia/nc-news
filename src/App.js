import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends Component {
  state = {
    currentUser: "",
  };
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header />

        <Login
          currentUser={currentUser}
          loginUser={this.loginUser}
          logoutUser={this.logoutUser}
        />

        <Router>
          <Home path="/" currentUser={currentUser} />
        </Router>
      </div>
    );
  }

  loginUser = (username) => {
    this.setState({ currentUser: username });
  };

  logoutUser = () => {
    this.setState({ currentUser: "" });
  };
}

export default App;
