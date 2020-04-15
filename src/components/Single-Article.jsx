import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";
import { Router, Link } from "@reach/router";
import Comments from "./Comments";
class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
  };
  componentDidMount() {
    const { article_id } = this.props;
    api
      .getArticleById(article_id)
      .then(({ article }) =>
        this.setState({ article: article, isLoading: false })
      );
  }

  render() {
    const { article, isLoading } = this.state;
    return (
      <section>
        {isLoading ? (
          <div className="loader">Loading...</div>
        ) : (
          <div className="Single-Article-Container">
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <ul className="Article-Items">
              <li>Votes: {article.votes}</li>
              <li>Topic: {article.topic}</li>
              <li>Written By: {article.author}</li>
              <li>Created: {article.created_at}</li>
              <li>
                Comments: {article.comment_count}{" "}
                <Link to="comments">
                  <button>View comments</button>
                </Link>
              </li>
            </ul>
          </div>
        )}
        <Router>
          <Comments path="comments" />
        </Router>
      </section>
    );
  }
}

export default SingleArticle;
