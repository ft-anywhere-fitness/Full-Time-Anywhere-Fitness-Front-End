import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar.js";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Homepage from "./components/Homepage";
import Classes from "./components/Classes";
import Register from "./components/Register";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";

const lightTheme = createTheme({ palette: { mode: "light" } });

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  /* Use this to have conditional button rendering for logout feature*/
  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     const token = localStorage.getItem("token");
  //     const currentUser = jwt.decode(token).user;
  //     props.setCurrentUser(currentUser);
  //   }
  // }, []);

  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/classes"
            element={
              <PrivateRoute>
                <Classes />
              </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={
              <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
