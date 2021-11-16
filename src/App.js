// Libraries
import React from "react";
import Landing from "./components/Landing";
import ClientReviews from "./components/ClientReviews";

// Components
import Header from "./components/Header";
import AddClassForm from "./components/AddClassForm";
import { Route, Routes } from "react-router-dom";
import Classes from "./components/Classes"
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";

// Returned Component
function App() {
  return (
    <div className="app">
      <Header />
      <AddClassForm />

      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/addclass" element={<AddClassForm/>}/>
        <Route path="/classes" element={<Classes />}/>
      </Routes>
       {/*<Route path="/logout" element={<Logout/>}/>}*/}
    </div>
  );
}

export default App;
