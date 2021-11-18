// Libraries
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Action
import { register } from "../actions/userActions";

const SignUpForm = ({ register, userData }) => {
  // State Management
  const [credentials, setCredentials] = useState({
    "username": "",
    "password": "",
    "email": "",
    "role_id": null,
    "auth": ""
  });

  // Event Handlers
  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await register(credentials);
    if (userData.isRegistering === false) {
      // const navigate = useNavigate();
      // navigate("/login");
    }
  };

  // Returned Component
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={credentials.username}
        />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          onChange={handleChange}
          value={credentials.email}
        />
      </label>
      <label>
        Password
        <input
          name="password"
          type="password"
          onChange={handleChange}
          value={credentials.password}
        />
      </label>
      <br />
      <label>
        Client
        <input
          name="role_id"
          type="radio"
          onChange={handleChange}
          value={1}
        />
      </label>
      <br />
      <label>
        Instructor
        <input
          name="role_id"
          type="radio"
          onChange={handleChange}
          value={2}
        />
      </label>
      <br />
      {
        credentials.role_id === 2 &&
        <label>
          Instructor Code
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

const mapStateToProps = (state) => {
  return {
    userData: {
      "isRegistering": state.user.isRegistering,
      "registrationError": state.user.registrationError
    }
  };
};

export default connect(mapStateToProps, { register })(SignUpForm);
