import React from "react";

const ArticleCard = (props) => {
  const { article } = props;

  return (
    <li>
      <h4>{article.title}</h4>
      <p>Topic: {article.topic}</p>
      <p>Written by: {article.author}</p>
      <p>Created: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
      <p>Comments: {article.comment_count}</p>
    </li>
  );
};

export default ArticleCard;
