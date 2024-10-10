import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <p className="error">404</p>
      <Link to="/" className="error-home">
        <p>Home</p>
      </Link>
    </div>
  );
}

export default Error;
