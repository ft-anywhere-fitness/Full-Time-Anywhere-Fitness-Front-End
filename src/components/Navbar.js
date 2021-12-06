import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AppBar, Toolbar } from "@mui/material";

import { Typography } from "@mui/material";
import { ButtonGroup } from "@mui/material";

const Navbar = (props) => {
  return (
    <header>
      <nav>
        <AppBar
          elevation={3}
          color="inherit"
          position="sticky"
          sx={{ alignItems: "right", width: "100vw" }}
        >
          <Toolbar>
            <div className="btngrp">
              <ButtonGroup
                variant="outlined"
                aria-label="outlined button group"
              >
                <Button
                  component={Link}
                  to={"/"}
                  variant="outlined"
                  size="large"
                  color="inherit"
                >
                  Home
                </Button>
                <Button size="large" variant="outlined" color="inherit">
                  Login
                </Button>
                <Button size="large" color="inherit">
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
              </ButtonGroup>
            </div>
          </Toolbar>
        </AppBar>
      </nav>
    </header>
  );
};

export default Navbar;
