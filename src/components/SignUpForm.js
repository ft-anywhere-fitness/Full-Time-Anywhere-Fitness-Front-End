// Libraries
import React, { useState } from "react";
import { connect } from "react-redux";

// Action
import { newUser } from "../actions/userAction";

const SignUpForm = ({ newUser }) => {
  // State Management
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    role: "",
    user_id: null
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
    newUser(credentials);
  };

  // Returned Component
  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          name="firstName"
          type="text"
          placeholder="First"
          onChange={handleChange}
          value={credentials.firstName}
        />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          type="text"
          placeholder="Last"
          onChange={handleChange}
          value={credentials.lastName}
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
      <br />
      <label>
        Instructor
        <input
          name="role"
          type="radio"
          onChange={handleChange}
          value="Instructor"
        />
      </label>
      <br />
      <label>
        Client
        <input
          name="role"
          type="radio"
          onChange={handleChange}
          value="Client"
        />
      </label>
      <br />
      <button>Log In</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { newUser })(SignUpForm);
