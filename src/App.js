import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navbar.js";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Homepage from "./components/Homepage";
import Classes from "./components/Classes";
import Register from "./components/Register";
import Login from "./components/Login";

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
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
