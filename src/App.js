// Libraries
import React from "react";
import ClientReviews from "./components/ClientReviews";

// Components
// import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Returned Component
function App() {
  return (
    <div className="app">
      <SignUpForm />
      <ClientReviews />
    </div>
  );
}

export default App;
