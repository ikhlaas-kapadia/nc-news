import React, { Component } from "react";

class Login extends Component {
  state = {
    usernames: ["weegembump", "happyamy2016", "jessjelly", "grumpy19"],
    inputValue: "jessjelly",
  };
  render() {
    const { currentUser } = this.props;

    return (
      <div>
        {!currentUser ? (
          <form action="" onSubmit={this.handleLogin}>
            <label htmlFor="">
              Please login to post comments/cast your votes:
              <input
                onChange={this.handleInput}
                type="text"
                value={this.state.inputValue}
              ></input>
            </label>
            <button>Login</button>
          </form>
        ) : (
          <p>
            Logged in as {currentUser}{" "}
            <button onClick={this.handleLogout}>Logout</button>
          </p>
        )}
      </div>
    );
  }
  handleInput = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { usernames, inputValue } = this.state;
    const { loginUser} = this.props;
    usernames.forEach((username) => {
      if (username === inputValue) {
        loginUser(inputValue);
      }
    });
  };
  handleLogout = (e) => {
    const { logoutUser } = this.props;
    logoutUser();
  };
}

export default Login;
