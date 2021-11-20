// Libraries
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Actions
import { login, registered } from "./../actions/userActions";

const LoginForm = (props) => {
  const { login, isLoggedIn, registered, loggingIn } = props;

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
    login(credentials);
  };

  useEffect(() => {
    if (isLoggedIn === true) {
      navigate("/classes");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    registered(false);
  }, []);

  // Returned Component
  return (
    <form onSubmit={handleSubmit}>
      {loggingIn === true && <h3>Logging in...</h3>}
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

const mapStateToProps = (state) => {
  return {
    loggingIn: state.user.loggingIn,
    loginErrorMessage: state.user.loginErrorMessage,
    isLoggedIn: state.user.isLoggedIn
  };
};

export default connect(mapStateToProps, { login, registered })(LoginForm);
