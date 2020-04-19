import React, { Component } from "react";
import * as api from "../utils/api";
import UserDropdown from "./User-Dropdown";

class Sort extends Component {
  state = {
    sort_by: "created_at",
    order: "desc",
    author: undefined,
  };
  render() {
    return (
      <>
        <section className="Sort-Section">
          Sort By:
          <select onChange={(e) => this.handleChange(e, "sort_by")}>
            <option value="created_at">Date</option>
            <option value="votes">Votes</option>
            <option value="comment_count">Comments</option>
          </select>
          Order
          <select onChange={(e) => this.handleChange(e, "order")}>
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          <br />
        </section>
        <section className="Filter-Section">
          <label>
            Filter by Author:
            <UserDropdown handleInputValue={this.handleInput} />
          </label>
        </section>
      </>
    );
  }

  handleInput = (e) => {
    const { value } = e.target;
    this.setState({ author: value }, () => {
      this.fetchSortedArticles();
    });
  };

  handleClear = (e) => {
    this.setState({ author: undefined }, () => {
      this.fetchSortedArticles();
    });
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
        author: author !== "None / Clear" ? author : undefined,
        topic: topic,
        sort_by: sort_by,
        order: order,
      })
      .then(({ articles }) => sortArticles(articles));
  };
}

export default Sort;
