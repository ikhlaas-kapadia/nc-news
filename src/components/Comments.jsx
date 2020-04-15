import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";
import Voter from "./Voter";

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
              <article>{comment.body}</article>
              <p>Posted: {comment.created_at}</p>
              <Voter votes={comment.votes} />
            </div>
          );
        })}
      </section>
    );
  }
}

export default Comments;
