import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";

class Comments extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    const { article_id } = this.props;
    api.getComments(article_id).then(({comments}) => {
      this.setState({comments: comments, isLoading: false})
    });
  }
  render() {
    
    return <div className="Comments">hello</div>;
  }
}

export default Comments;
