// Libraries
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Actions
import { loggedIn } from "./actions/userActions";

// Components
import Header from "./components/Header";
import AddClassForm from "./components/AddClassForm";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Classes from "./components/Classes";
import Class from "./components/Class";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Logout from "./components/Logout";
import EditClassForm from "./components/EditClassForm";
import { connect } from "react-redux";

// Returned Component
function App() {
  useEffect(() => {
    if (window.localStorage.getItem("token")) {
      loggedIn(true);
    }
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/classes/add" element={<AddClassForm />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/classes/:id" element={<Class />} />
        <Route path="/classes/class/edit/:id" element={<EditClassForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default connect(null)(App);
