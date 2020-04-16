import React, { Component } from "react";
import "../App.css";
class Login extends Component {
  state = {
    inputValue: null,
  };
  render() {
    const { currentUser } = this.props;

    return (
      <section className="Login-Section">
        {!currentUser ? (
          <div className="User-Menu">
            <select onChange={this.handleInputValue}>
              <option>Select</option>
              <option value="jessjelly">jessjelly</option>
              <option value="happyamy2016">happyamy2016</option>
              <option value="grumpy19">grumpy19</option>
              <option value="weegembump">weegembump</option>
            </select>
            <p>Please login above to post comments/cast your votes:</p>
          </div>
        ) : (
          <p>
            Logged in as {currentUser}{" "}
            <button onClick={this.handleLogout}>Logout</button>
          </p>
        )}
      </section>
    );
  }
  handleInputValue = (e) => {
    const { value } = e.target;
    if (value !== "select") {
      this.setState({ inputValue: value }, () => {
        this.handleLogin();
      });
    }
  };

  handleLogin = (e) => {
    const { loginUser } = this.props;
    const { inputValue } = this.state;
    loginUser(inputValue);
  };
  handleLogout = (e) => {
    const { logoutUser } = this.props;
    logoutUser();
  };
}

export default Login;
