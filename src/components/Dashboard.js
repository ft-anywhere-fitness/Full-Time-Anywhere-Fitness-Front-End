import React from "react";
import { useEffect, useState } from "react";
import RegistrantList from "./RegistrantList";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import Classes from "./Classes";

const Dashboard = (props) => {
  return (
    <Box sx={{ height: "100vh" }}>
      <Grid container spacing={8}>
        <Grid item xs={6}>
          <Box>
            <Paper elevation={21}>
              <Classes />
            </Paper>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box>
            <Paper elevation={21}>
              <Classes />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
