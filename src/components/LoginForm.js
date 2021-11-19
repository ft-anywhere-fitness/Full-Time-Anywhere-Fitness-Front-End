// Libraries
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  // State Management
  const [credentials, setCredentials] = useState({
    "username": "",
    "password": ""
  });

  // Navigate
  let navigate = useNavigate();

  // Event Handlers
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/login", credentials)
      .then((response) => {
        console.log(response.data.token);
        window.localStorage.setItem("token", response.data.token);
        navigate("/classes");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Returned Component
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={credentials.username}
        />
      </label>
      <label>
        Password:
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={credentials.password}
        />
      </label>
      <button>Log In</button>
    </form>
  );
};


export default LoginForm;
