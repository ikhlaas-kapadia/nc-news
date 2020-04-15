import React, { Component } from "react";

class Voter extends Component {
  state = {
    optimisticVote: 0,
  };
  render() {
    const { optimisticVote } = this.state;
    return (
      <section>
        <button onClick={() => this.handleVoteclick(1)}>👌</button> Votes:
        {this.props.votes + optimisticVote}{" "}
        <button onClick={() => this.handleVoteclick(-1)}>👎</button>
      </section>
    );
  }
  handleVoteclick = (vote) => {
    this.setState((currentState) => {
      return { optimisticVote: currentState.optimisticVote + vote };
    });
  };
}

export default Voter;
