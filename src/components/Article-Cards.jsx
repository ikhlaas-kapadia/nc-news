import React from "react";
import { Link } from "@reach/router";
const ArticleCard = (props) => {
  const { article } = props;

  return (
    <li>
      <Link to={`/articles/${article.article_id}`}>
        <h4>{article.title}</h4>
      </Link>
      <p>Topic: {article.topic}</p>
      <p>Written by: {article.author}</p>
      <p>Created: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
};

export default ArticleCard;
