import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";
import { Router, Link } from "@reach/router";
import Comments from "./Comments";
import Voter from "./Voter";
import ErrorPage from "./Error-Page";
import Loader from "./Loader";
import moment from "moment";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true,
    articleError: null,
  };
  componentDidMount() {
    const { article_id } = this.props;

    api
      .getArticleById(article_id)
      .then(({ article }) =>
        this.setState({ article: article, isLoading: false })
      )
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({
          articleError: {
            status: status,
            msg: `${data.msg}. Please enter a valid article ID`,
          },
        });
      });
  }

  render() {
    const { article, isLoading, articleError } = this.state;
    const { currentUser, path } = this.props;
    console.log(path);
    if (articleError)
      return <ErrorPage status={articleError.status} msg={articleError.msg} />;
    return (
      <section>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="Single-Article-Container">
            <h4>{article.title}</h4>
            <p>{article.body}</p>
            <ul className="Article-Items">
              <Voter
                currentUser={currentUser}
                votes={article.votes}
                id={article.article_id}
                type="articles"
              />
              <li>Topic: {article.topic}</li>
              <li>Written By: {article.author}</li>
              <li>
                Created: {moment(article.created_at).format("MMMM Do YYYY")}
              </li>
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
          <Comments currentUser={currentUser} path="comments" />
          <ErrorPage
            default
            status={400}
            msg="Page not found, please enter a valid address"
          />
        </Router>
      </section>
    );
  }
}

export default SingleArticle;
