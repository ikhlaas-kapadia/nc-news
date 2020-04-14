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
      <section>
        <h3>Most trending Topics</h3>

        {isLoading ? (
          <p>isloading...</p>
        ) : (
          <div className="Topics-Container">
            {topics.map((topic) => (
              <Link key={topic.slug} to={`articles/${topic.slug}`}>
                {" "}
                <div id={topic.slug} className="Topic-Box">
                  {topic.slug.toUpperCase()}
                  <br></br>
                  <p>{topic.description}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Topics;
