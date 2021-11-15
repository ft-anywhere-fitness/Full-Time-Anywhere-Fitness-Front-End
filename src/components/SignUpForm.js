// Libraries
import React, { useState } from "react";

const SignUpForm = () => {
  // State Management
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    username: "",
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
    console.log(credentials);
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
          value={credentials.username}
        />
      </label>
      <label>
        Last Name:
        <input
          name="Last"
          type="text"
          placeholder="Last"
          onChange={handleChange}
          value={credentials.username}
        />
      </label>
      <label>
        Email:
        <input
          name="role"
          type="radio"
          placeholder="example@something.com"
          onChange={handleChange}
          value="Instructor"
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

export default SignUpForm;
