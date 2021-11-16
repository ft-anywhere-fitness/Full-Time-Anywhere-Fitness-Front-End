// Libraries
import React from "react";
import Landing from "./components/Landing";
import ClientReviews from "./components/ClientReviews";

// Components
import Header from "./components/Header";
import Classes from "./components/Classes";

// Returned Component
function App() {
  return (
    <div className="app">
      <Header />
      <Classes />
    </div>
  );
}

export default App;
