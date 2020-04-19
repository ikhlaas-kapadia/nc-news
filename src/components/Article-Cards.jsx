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
    body,
  } = props.article;
 

  return (
    <li className="Article-Item">
      <header>
        <h4>{title}</h4>
      </header>
      <article>
        <p>{body.slice(0, 200)}....</p>
        <Link to={`/articles/${article_id}`} className="Single-Article-Link">
          View Article
        </Link>
      </article>
      <div className="Article-Info">
        <p># {topic}</p>
        <p><span role="img" aria-label="Author">✒️</span>{author} </p>
        <p>Created: {moment(created_at).format("MMMM Do YYYY")}</p>
        <p>Comments: {comment_count}</p>
        <p>Votes: {votes}</p>
      </div>
    </li>
  );
};

export default ArticleCard;
