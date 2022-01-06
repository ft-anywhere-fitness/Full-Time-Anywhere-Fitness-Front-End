import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Paper, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";

const Navbar = (props) => {
  const { isLoggedIn, setIsLoggedIn } = props;
  const navigate = useNavigate();

  let token = localStorage.getItem("token");

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    navigate("/");
    setIsLoggedIn(false);
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
          {token ? (
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                component={Link}
                to={"/dashboard"}
                variant="outlined"
                size="large"
                color="inherit"
              >
                Dashboard
              </Button>
              <Button
                size="large"
                variant="outlined"
                // component={Link}
                // to={"/Login"}
                color="inherit"
              >
                My Classes
              </Button>
              <Button
                size="large"
                component={Link}
                to={"/add-class"}
                color="inherit"
              >
                Add Class
              </Button>
              <Button
                component={Link}
                to={"/classes"}
                size="large"
                color="inherit"
              >
                Upcoming Classes
              </Button>
              <Button onClick={handleLogout} size="large" color="inherit">
                Logout
              </Button>
            </ButtonGroup>
          ) : (
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
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
