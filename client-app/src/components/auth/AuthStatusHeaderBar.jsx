import React from "react";
import { Link } from "react-router-dom";

const AuthStatusHeaderBar = () => {
  return (
    <div className="bg-gray-100">
      <p>You are not signed in.</p>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default AuthStatusHeaderBar;
