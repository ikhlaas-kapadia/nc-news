import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AllArticles from "./components/All-Articles";
import Topics from "./components/Topics";
import ArticlesByTopic from "./components/ArticlesByTopic";

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
        <Home currentUser={currentUser} />
        <Router>
          <AllArticles path="/" />
          <AllArticles path="/articles/:topic" />
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
