import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";
import Voter from "./Voter";
import CommentAdder from "./Add-Comment-Form";
import ErrorPage from "./Error-Page";
import Loader from "./Loader";
import moment from "moment";

class Comments extends Component {
  state = { comments: [], isLoading: true, commentsError: null };

  componentDidMount() {
    const { article_id } = this.props;
    api
      .getComments(article_id)
      .then(({ comments }) => {
        this.setState({ comments: comments, isLoading: false });
      })
      .catch((err) => {
        console.dir(err);
      });
  }
  render() {
    const { comments, isLoading, commentsError } = this.state;
    const { currentUser } = this.props;
    if (commentsError) return <ErrorPage />;

    return isLoading ? (
      <Loader />
    ) : (
      <section className="Comments">
        <h4>Comments</h4>
        <CommentAdder addComment={this.addComment} currentUser={currentUser} />
        {comments.map((comment) => {
          return (
            <div
              key={comment.comment_id}
              className={
                currentUser !== comment.author
                  ? "Comment-Box"
                  : "Comment-Box User-Comment"
              }
            >
              <h4>
                {currentUser !== comment.author
                  ? comment.author
                  : "Your comment"}
              </h4>
              <article>{comment.body}</article>
              <p>Posted: {moment(comment.created_at).format("MMMM Do YYYY")}</p>
              <Voter
                currentUser={currentUser}
                votes={comment.votes}
                id={comment.comment_id}
                type="comments"
              />
              {currentUser === comment.author && (
                <button
                  onClick={() => {
                    this.handleDelete(comment.comment_id);
                  }}
                >
                  Delete
                </button>
              )}
            </div>
          );
        })}
      </section>
    );
  }
  addComment = (newComment) => {
    const { article_id } = this.props;
    api.postComment(article_id, newComment).then(({ data }) => {
      this.setState((currentState) => {
        return {
          comments: [data.comment, ...currentState.comments],
        };
      });
    });
  };

  handleDelete = (comment_id) => {
    api.deleteComment(comment_id).then((res) =>
      this.setState((currentState) => {
        const filteredComments = currentState.comments.filter(
          (comment) => comment.comment_id !== comment_id
        );
        return {
          comments: filteredComments,
        };
      })
    );
  };
}

export default Comments;
