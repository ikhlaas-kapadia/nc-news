import React from "react";
import { Link } from "@reach/router";
import moment from "moment";
const ArticleCard = (props) => {
  const {
    article_id,
    topic,
    author,
    created_at,
    comment_count,
    title,
    votes,
  } = props.article;

  return (
    <li className="Article-Item">
      <Link to={`/articles/${article_id}`}>
        <h4>{title}</h4>
      </Link>
      <p>Topic: {topic}</p>
      <p>Written by: {author}</p>
      <p>Created: {moment(created_at).format("MMMM Do YYYY, h:mm:ss a")}</p>
      <p>Comments: {comment_count}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};

export default ArticleCard;
