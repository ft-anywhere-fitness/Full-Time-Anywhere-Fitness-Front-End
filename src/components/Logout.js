// Libraries
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { logout } from "../actions/userActions";

const Logout = () => {
  const navigate = useNavigate();

  const bye = () => {
    navigate('/');
  };

  useEffect(() => {
    window.localStorage.removeItem('token');
    logout();
    bye();
  });
  return (
    <h1> Logging Out... </h1>
  );
};

export default connect(null, {})(Logout);
