import React from "react";
import Topics from "./Topics";

const Home = (props) => {
  const { currentUser } = props;

  return (
    <main>
      <h2>
        {!currentUser
          ? `Welcome to NC News Stranger`
          : `Welcome to NC News ${currentUser}`}
      </h2>

      <Topics />
    </main>
  );
};

export default Home;
