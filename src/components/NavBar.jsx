import React, { Component } from "react";
import { Link } from "@reach/router";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link className="links" to="/">Home</Link> 
        <Link className="links" to="/articles">All Articles</Link>
      </nav>
    );
  }
}

export default NavBar;
