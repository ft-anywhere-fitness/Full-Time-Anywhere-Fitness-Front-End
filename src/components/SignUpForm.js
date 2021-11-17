// Libraries
import React, { useState } from "react";
import { connect } from "react-redux";

// Action
import { register } from "../actions/userActions";

const SignUpForm = ({ register }) => {
  // State Management
  const [credentials, setCredentials] = useState({
    "username": "",
    "password": "",
    "email": "",
    "role_id": null
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
    register(credentials);
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
        Email:
        <input
          name="email"
          type="email"
          placeholder="example@something.com"
          onChange={handleChange}
          value={credentials.email}
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
      <br />
      <label>
        Instructor
        <input
          name="role"
          type="radio"
          onChange={handleChange}
          value="2"
        />
      </label>
      <br />
      <label>
        Client
        <input
          name="role"
          type="radio"
          onChange={handleChange}
          value="1"
        />
      </label>
      <br />
      <button>Log In</button>
    </form>
  );
};

export default connect(null, { register })(SignUpForm);
