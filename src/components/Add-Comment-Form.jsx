import React, { Component } from "react";
import "../App.css";

class CommentAdder extends Component {
  state = {
    inputValue: "",
  };
  render() {
    const { inputValue, loggedIn } = this.state;
    const { currentUser } = this.props;
    return (
      <form className="Comment-Form" action="" onSubmit={this.handleSubmit}>
        <label>
          {" "}
          Post a Comment:
          <textarea
            required
            onChange={this.handleInputvalue}
            className="Comment-Input-Box"
            type="text"
            rows="2"
            cols="30"
            value={inputValue}
          />
          <button>Add Comment</button>
          {loggedIn === false && !currentUser && (
            <p className="Login-msg">Please login to add your comment</p>
          )}
        </label>
      </form>
    );
  }
  handleInputvalue = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { addComment, currentUser } = this.props;
    if (!currentUser) {
      this.setState({ loggedIn: false });
      return;
    }
    const { inputValue } = this.state;
    const newComment = { username: currentUser, body: inputValue };
    addComment(newComment);
    this.setState({ inputValue: "" });
  };
}

export default CommentAdder;
