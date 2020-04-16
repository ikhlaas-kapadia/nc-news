import React from "react";
import "../App.css";
import Login from "./Login";
const Header = (props) => {
  const { currentUser, loginUser, logoutUser } = props;
  return (
    <header className="Header">
      <h1>
        <span className="First-Letter">N</span>C News
      </h1>
      <Login
        currentUser={currentUser}
        loginUser={loginUser}
        logoutUser={logoutUser}
      />
    </header>
  );
};

export default Header;
