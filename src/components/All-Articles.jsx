import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./Article-Cards";
import Home from "./Home";
import Sort from "./Sort-Articles";
import ErrorPage from "./Error-Page";
import Loader from "./Loader";

class AllArticles extends Component {
  state = { articles: [], isLoading: true, topicError: null };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api
      .getArticles({ topic: topic })
      .then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      })
      .catch((err) => {
        const { status, data } = err.response;
        this.setState({
          topicError: {
            status: status,
            msg: `${data.msg}. Please specify a valid topic.`,
          },
        });
      });
  };

  render() {
    const { isLoading, articles, topicError } = this.state;
    const { topic, currentUser } = this.props;
    if (topicError)
      return <ErrorPage status={topicError.status} msg={topicError.msg} />;

    return (
      <main>
        <Home currentUser={currentUser} />
        {topic ? (
          <h2>{topic.toUpperCase()} Articles</h2>
        ) : (
          <h2>All Articles</h2>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <section>
            <Sort sortArticles={this.sortArticles} topic={topic} />

            <ul className="Article-Grid">
              {articles.map((article) => {
                return (
                  <ArticleCard
                    key={article.article_id}
                    article={article}
                    currentUser={currentUser}
                  />
                );
              })}
            </ul>
          </section>
        )}
      </main>
    );
  }
  sortArticles = (sortedArticles) => {
    this.setState({ articles: sortedArticles });
  };
}

export default AllArticles;
