// Libraries
import React from "react";
import { Route, Routes } from "react-router-dom";

// Components
import Header from "./components/Header";
import AddClassForm from "./components/AddClassForm";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Classes from "./components/Classes";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Returned Component
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/addclass" element={<AddClassForm />} />
        <Route path="/classes" element={<Classes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
