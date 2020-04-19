import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./Article-Cards";
import Sort from "./Sort-Articles";
import ErrorPage from "./Error-Page";
import Loader from "./Loader";

class AllArticles extends Component {
  state = {
    articles: [],
    isLoading: true,
    topicError: null,
    articleSnippet: [],
  };

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
    api.getArticles({ topic: topic }).then(({ articles }) => {
      this.setState({ articles: articles, isLoading: false });
    });
  };

  render() {
    const { isLoading, articles, topicError, articleSnippet } = this.state;
    const { topic, currentUser } = this.props;
    if (topicError)
      return <ErrorPage status={topicError.status} msg={topicError.msg} />;

    return (
      <main className="Main-Content">
        {topic ? (
          <h2>{topic.toUpperCase()} Articles</h2>
        ) : (
          <h2>All Articles</h2>
        )}
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <section className="Sort-Component">
              <Sort sortArticles={this.sortArticles} topic={topic} />
            </section>
            <section>
              <ul className="Article-Grid">
                {articles.map((article, index) => {
                  return (
                    <ArticleCard
                      key={article.article_id}
                      article={article}
                      currentUser={currentUser}
                      articleSnippet={articleSnippet[index]}
                    />
                  );
                })}
              </ul>
            </section>
          </div>
        )}
      </main>
    );
  }
  sortArticles = (sortedArticles) => {
    this.setState({ articles: sortedArticles });
  };
}

export default AllArticles;
