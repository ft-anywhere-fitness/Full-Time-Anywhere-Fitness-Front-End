// Libraries
import React from "react";
import Landing from "./components/Landing";
import ClientReviews from "./components/ClientReviews";

// Components
// import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Returned Component
function App() {
  return (
    <div className="app">
      <SignUpForm />
      <Landing/>
      <ClientReviews/>
    </div>
  );
}

export default App;
