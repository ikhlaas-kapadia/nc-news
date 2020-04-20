import React from "react";

const ErrorPage = (props) => {
  const { status, msg } = props;
  return (
    <div className="Error">
      <h4>Oops! Something went wrong.</h4>
      <p>Status: {status}</p>
      <p>{msg}</p>
    </div>
  );
};

export default ErrorPage;
