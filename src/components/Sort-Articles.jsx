import React, { Component } from "react";
import * as api from "../utils/api";

class Sort extends Component {
  state = {
    sort_by: "",
    order: "desc",
  };
  render() {
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
      </section>
    );
  }
  handleChange = (e, criteria) => {
    const { value } = e.target;
    this.setState({ [criteria]: value }, () => {
      const { sort_by, order } = this.state;
      const { sortArticles } = this.props;
      api
        .getArticles({ sort_by: sort_by, order: order })
        .then(({ articles }) => sortArticles(articles));
    });
  };
}

export default Sort;
