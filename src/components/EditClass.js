import React from "react";
import { useEffect, useState } from "react";
import RegistrantList from "./RegistrantList";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import ClassForm from "./ClassForm";

const EditClass = (props) => {
  return (
    <Box>
      <Typography variant="h2" sx={{ margin: "2% 0%" }}>
        Edit Class
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ display: "flex" }}
      >
        <Grid item xs={6}>
          <ClassForm />
        </Grid>
        <Grid item xs={6}>
          <RegistrantList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditClass;
