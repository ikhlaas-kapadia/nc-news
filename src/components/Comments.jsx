import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";

class Comments extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getComments(article_id).then(({ comments }) => {
      this.setState({ comments: comments, isLoading: false });
    });
  }
  render() {
    const { comments, isLoading } = this.state;
    return isLoading ? (
      <div className="loader">Loading...</div>
    ) : (
      <section className="Comments">
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id} className="Comment-Box">
              <h4>{comment.author}</h4>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
              <p>Posted: {comment.created_at}</p>
            </div>
          );
        })}
      </section>
    );
  }
}

export default Comments;
