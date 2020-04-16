import React, { Component } from "react";
import "../App.css";

class CommentAdder extends Component {
  state = {
    inputValue: "",
  };
  render() {
    const { inputValue } = this.state;
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label>
          {" "}
          Post a Comment:
          <textarea
            onChange={this.handleInputvalue}
            className="Comment-Input-Box"
            type="text"
            rows="2"
            cols="30"
            value={inputValue}
          />
          <button>Add</button>
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
      alert("Please login to post comments");
      return;
    }
    const { inputValue } = this.state;
    const newComment = { username: currentUser, body: inputValue };
    addComment(newComment);
  };
}

export default CommentAdder;
