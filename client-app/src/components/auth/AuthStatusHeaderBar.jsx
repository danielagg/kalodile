import React from "react";
import { Link } from "react-router-dom";

const AuthStatusHeaderBar = () => {
  return (
    <div className="flex justify-between bg-gray-100 p-3 text-gray-600">
      <p className="">You are not signed in.</p>
      <Link to="/login" className="font-medium">
        Login/Register
      </Link>
    </div>
  );
};

export default AuthStatusHeaderBar;
