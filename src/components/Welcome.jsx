import React from "react";
import Topics from "./NavBar";

const Welcome = (props) => {
  const { currentUser } = props;

  return (
    <h2>
      {!currentUser
        ? `Welcome to NC News Stranger`
        : `Welcome to NC News ${currentUser}`}
    </h2>
  );
};

export default Welcome;
