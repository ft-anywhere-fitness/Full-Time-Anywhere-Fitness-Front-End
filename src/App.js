// Libraries
import React from "react";
import Landing from "./components/Landing";
import ClientReviews from "./components/ClientReviews";

// Components
import Header from "./components/Header";
<<<<<<< HEAD
=======
import AddClassForm from "./components/AddClassForm";
import { Route, Routes } from "react-router-dom";
import Classes from "./components/Classes"
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
>>>>>>> 1a7253e81d2081581670c439955627b7dc2d402f

// Returned Component
function App() {
  return (
    <div className="app">
<<<<<<< HEAD
      <Header/>
      <Landing/>
      <ClientReviews/>
=======
      <Header />
      

      <Routes>
        <Route exact path="/" element={<Landing />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/addclass" element={<AddClassForm/>}/>
        <Route path="/classes" element={<Classes />}/>
      </Routes>
       {/*<Route path="/logout" element={<Logout/>}/>}*/}
       {/*<Route path=`/edit/${id}` element={<EditClassForm/>}/>}*/}
>>>>>>> 1a7253e81d2081581670c439955627b7dc2d402f
    </div>
  );
}

export default App;
