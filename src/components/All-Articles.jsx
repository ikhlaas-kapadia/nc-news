import React, { Component } from "react";
import * as api from "../utils/api";
import ArticleCard from "./Article-Cards";

class AllArticles extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    api.getArticles().then(({ articles }) => {
      this.setState({ articles: articles, isLoading: false });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { topic } = this.props;
    if (prevProps.topic !== this.props.topic) {
      api.getArticles({ topic: topic }).then(({ articles }) => {
        this.setState({ articles: articles, isLoading: false });
      });
    }
  }

  render() {
    const { isLoading, articles } = this.state;
    const{topic} = this.props

    return (
      <main>
        {topic ? <h2>{topic.toUpperCase()} Articles</h2>:  <h2>All Articles</h2>}
       
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
}

export default AllArticles;
