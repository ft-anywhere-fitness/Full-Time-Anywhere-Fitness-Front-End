import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Paper, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <AppBar
      elevation={3}
      color="inherit"
      position="sticky"
      sx={{ alignItems: "right", width: "100vw" }}
    >
      <Toolbar>
        <div className="btngrp">
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button
              component={Link}
              to={"/"}
              variant="outlined"
              size="large"
              color="inherit"
            >
              Home
            </Button>
            <Button
              size="large"
              variant="outlined"
              component={Link}
              to={"/Login"}
              color="inherit"
            >
              Login
            </Button>
            <Button
              size="large"
              component={Link}
              to={"/register"}
              color="inherit"
            >
              Register
            </Button>
            <Button
              component={Link}
              to={"/classes"}
              size="large"
              color="inherit"
            >
              View Classes
            </Button>
            <Button onClick={handleLogout} size="large" color="inherit">
              Logout
            </Button>
          </ButtonGroup>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
