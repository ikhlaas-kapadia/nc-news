import React, { Component } from "react";
import * as api from "../utils/api";

class Sort extends Component {
  state = {
    sort_by: "",
    order: "desc",
    author: undefined,
  };
  render() {
    console.log(this.props);
    return (
      <section>
        Sort By:
        <select onChange={(e) => this.handleChange(e, "sort_by")}>
          <option>Select</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
        Order
        <select onChange={(e) => this.handleChange(e, "order")}>
          <option>Select</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
        <br />
        <label>
          Author:
          <input onChange={this.handleInput} type="text"></input>
        </label>
        <button>Search</button>
      </section>
    );
  }

  handleInput = (e) => {
    console.log(e.target.value);
  };

  handleClick = (e) => {
    // this.setState({author:})
  };

  handleChange = (e, criteria) => {
    const { value } = e.target;
    this.setState({ [criteria]: value }, () => {
      this.fetchSortedArticles();
    });
  };
  fetchSortedArticles = () => {
    const { sort_by, order, author } = this.state;
    const { sortArticles, topic } = this.props;
    api
      .getArticles({
        author: author,
        topic: topic,
        sort_by: sort_by,
        order: order,
      })
      .then(({ articles }) => sortArticles(articles));
  };
}

export default Sort;
