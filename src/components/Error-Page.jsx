import React, { Component } from "react";

class ErrorPage extends Component {
  class = {
    err: null,
  };
  render() {
    const { status, msg } = this.props;
    return (
      <div className="error">
        <p>
          {status}: {msg}
        </p>
      </div>
    );
  }
}

export default ErrorPage;
