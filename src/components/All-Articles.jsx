import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./Article-Cards";
import Home from "./Home";
import Sort from "./Sort-Articles";

class AllArticles extends Component {
  state = { articles: [], isLoading: true };

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
    const { isLoading, articles } = this.state;
    const { topic, currentUser } = this.props;

    return (
      <main>
        <Home currentUser={currentUser} />
        {topic ? (
          <h2>{topic.toUpperCase()} Articles</h2>
        ) : (
          <h2>All Articles</h2>
        )}
        <Sort sortArticles={this.sortArticles} topic={topic} />

        <section>
          {isLoading ? (
            <div className="loader">Loading...</div>
          ) : (
            <ul className="Article-Grid">
              {articles.map((article) => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </ul>
          )}
        </section>
      </main>
    );
  }
  sortArticles = (sortedArticles) => {
    this.setState({ articles: sortedArticles });
  };
}

export default AllArticles;
