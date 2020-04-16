import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import AllArticles from "./components/All-Articles";

import SingleArticle from "./components/Single-Article";
import ErrorPage from "./components/Error-Page";

class App extends Component {
  state = {
    currentUser: "",
  };
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Login
          currentUser={currentUser}
          loginUser={this.loginUser}
          logoutUser={this.logoutUser}
        />

        <Router>
          <AllArticles currentUser={currentUser} path="/" />
          <AllArticles
            currentUser={currentUser}
            path="/articles/topic/:topic"
          />
          <SingleArticle
            currentUser={currentUser}
            path="/articles/:article_id/*"
          />
          <ErrorPage
            default
            status={404}
            msg="Page not found, please enter a valid address"
          />
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
