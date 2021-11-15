// Libraries
import React from "react";
import { connect } from "react-redux";

// Components
import LoginForm from "./components/LoginForm";

// Returned Component
function App({ user }) {
  return (
    <div className="app">
      <LoginForm />
    </div>
  );
}

export default App;
