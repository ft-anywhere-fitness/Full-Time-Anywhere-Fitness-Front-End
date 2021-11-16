// Libraries
import React from "react";
import Landing from "./components/Landing";
import ClientReviews from "./components/ClientReviews";
import AddClassForm from "./components/AddClassForm";

// Components
import Header from "./components/Header";

// Returned Component
function App() {
  return (
    <div className="app">
      <Header />
      <AddClassForm />
    </div>
  );
}

export default App;
