// Libraries
import axios from "axios";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Action
import { successfulRegister, registering, failedRegister } from "../actions/userActions";

const SignUpForm = ({ userData }) => {
  // State Management
  const [credentials, setCredentials] = useState({
    "username": "",
    "password": "",
    "email": "",
    "role_id": null,
    "auth": ""
  });

  // Navigate
  const navigate = useNavigate();

  // Event Handlers
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    credentials.role_id = Number(credentials.role_id);
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/register", credentials)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Returned Component
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <span>Username </span>
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={credentials.username}
        />
      </label>
      <br />
      <label>
        <span>Email </span>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={credentials.email}
        />
      </label>
      <br />
      <label>
        <span>Password </span>
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
        />
      </label>
      <br />
      <label>
        <span>Client </span>
        <input
          name="role_id"
          type="radio"
          onChange={handleChange}
          value="1"
        />
      </label>
      <br />
      <label>
        <span>Instructor </span>
        <input
          name="role_id"
          type="radio"
          onChange={handleChange}
          value="2"
        />
      </label>
      <br />
      {
        credentials.role_id === "2" &&
        <label>
          <span>Instructor Code </span>
          <input
            name="auth"
            type="text"
            onChange={handleChange}
            value={credentials.auth}
          />
        </label>
      }
      <br />
      <button>Log In</button>
    </form>
  );
};

export default SignUpForm;
