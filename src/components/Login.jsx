import React, { Component } from "react";
import "../App.css";
import UserDropdown from "./User-Dropdown";
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
            <UserDropdown handleInputValue={this.handleInputValue} login="login" />
            <p>Please login above to post comments/cast your votes</p>
          </div>
        ) : (
          <p>
            Logged in as {currentUser}{" "}
            <button className="Logout-Btn" onClick={this.handleLogout}>Logout</button>
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
