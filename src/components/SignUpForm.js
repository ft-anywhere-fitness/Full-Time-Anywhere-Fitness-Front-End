// Libraries
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Action
import { signUp } from "../actions/userActions";

const SignUpForm = (props) => {
  const {
    registerErrorMessage,
    signUp,
    isRegistering,
    isRegistered
  } = props;
  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    credentials.role_id = Number(credentials.role_id);
    signUp(credentials);
  };

  useEffect(() => {
    if (isRegistered === true) {
      navigate("/login");
    }
  }, [isRegistered]);

  // Returned Component
  return (
    <form onSubmit={handleSubmit}>
      {isRegistering && <h3>Registering...</h3>}
      {registerErrorMessage && <h3>{registerErrorMessage}</h3>}
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
      <button>Sign Up</button>

    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    registerErrorMessage: state.user.registerErrorMessage,
    isRegistering: state.user.isRegistering,
    isRegistered: state.user.isRegistered
  };
};

export default connect(mapStateToProps, { signUp })(SignUpForm);
