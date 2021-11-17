// Libraries
import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { login, postLogin } from "../actions/userActions";

const LoginForm = ({ login, postLogin }) => {
  // State Management
  const [credentials, setCredentials] = useState({
    "username": "",
    "password": ""
  });

  // Event Handlers
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postLogin(credentials);
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


export default connect(null, { login, postLogin })(LoginForm);
