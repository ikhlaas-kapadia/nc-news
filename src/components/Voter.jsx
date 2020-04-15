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
          👎
        </button>
        Votes: {this.props.votes + optimisticVote}{" "}
        <button
          className="Vote-Btn"
          onClick={() => this.handleVoteclick(1)}
          disabled={optimisticVote > 0}
          className={optimisticVote === 1 ? "Vote-Btn Voted" : "Vote-Btn "}
        >
          👍
        </button>
      </section>
    );
  }
  handleVoteclick = (vote) => {
    const { id, type } = this.props;
    this.setState((currentState) => {
      return { optimisticVote: currentState.optimisticVote + vote };
    });
    api.updateVote(id, vote, type);
  };
}

export default Voter;
