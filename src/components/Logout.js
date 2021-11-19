import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const bye = () => {
    navigate('/');
  };

  useEffect(() => {
    window.localStorage.removeItem('token');
    bye();
  });
  return (
    <h1> Logging Out... </h1>
  );
};

export default Logout;
