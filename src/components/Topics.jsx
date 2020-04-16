import React, { Component } from "react";
import * as api from "../utils/api";
import { Link } from "@reach/router";

class Topics extends Component {
  state = { topics: [], isLoading: true };

  componentDidMount() {
    api.getTopics().then(({ topics }) => {
      this.setState({ topics: topics, isLoading: false });
    });
  }
  render() {
    const { topics, isLoading } = this.state;

    return (
      <nav>
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="Nav-Links">
            <Link className="Link" to="/">
              Home
            </Link>
            {topics.map((topic) => (
              <Link className="Link" key={topic.slug} to={`/articles/topic/${topic.slug}`}>
                {" "}
                {topic.slug.toUpperCase()}
              </Link>
            ))}
          </div>
        )}
      </nav>
    );
  }
}

export default Topics;
