// Libraries
import React from "react";
import Landing from "./components/Landing";
import ClientReviews from "./components/ClientReviews";
import Footer from "./components/Footer";

// Components
import Header from "./components/Header";
import AddClassForm from "./components/AddClassForm";
import { Route, Routes } from "react-router-dom";
import Classes from "./components/Classes"
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import Logout from "./components/Logout";
import EditClassForm from "./components/EditClassForm";

// Returned Component
function App() {
  return (
    <div className="app">
      <Header/>
      <Footer/>
      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/add_class" element={<AddClassForm/>}/>
        <Route path="/classes" element={<Classes />}/>
        <Route path="/edit_class/:id" element={<EditClassForm />}/>
        <Route path="/logout" element={<Logout />}/>
      </Routes>
    </div>
  );
}

export default App;
