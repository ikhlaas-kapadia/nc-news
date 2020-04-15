import React, { Component } from "react";
import "../App.css";
import * as api from "../utils/api";

class Voter extends Component {
  state = {
    optimisticVote: 0,
  };

  render() {
    const { optimisticVote } = this.state;

    return (
      <section>
        <button
          onClick={() => this.handleVoteclick(-1)}
          disabled={optimisticVote < 0}
          className={optimisticVote === -1 ? "Vote-Btn Voted" : "Vote-Btn "}
        >
          <span> 👎</span>
        </button>
        Votes: {this.props.votes + optimisticVote}{" "}
        <button
          className="Vote-Btn"
          onClick={() => this.handleVoteclick(1)}
          disabled={optimisticVote > 0}
          className={optimisticVote === 1 ? "Vote-Btn Voted" : "Vote-Btn "}
        >
          <span>👍</span>
        </button>
      </section>
    );
  }
  handleVoteclick = (vote) => {
    const { currentUser, id, type } = this.props;

    if (currentUser) {
      this.setState((currentState) => {
        return { optimisticVote: currentState.optimisticVote + vote };
      });
      api.updateVote(id, vote, type);
    } else {
      alert("Please login to vote");
    }
  };
}

export default Voter;
