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
      <header>
        <Link to={`/articles/${article_id}`}>
          <h4>{title}</h4>
        </Link>
      </header>
      <div className="Article-Info">
        <p># {topic}</p>
        <p>✒️{author}</p>
        <p>Created: {moment(created_at).format("MMMM Do YYYY")}</p>
        <p>Comments: {comment_count}</p>
        <p>Votes: {votes}</p>
      </div>
    </li>
  );
};

export default ArticleCard;
