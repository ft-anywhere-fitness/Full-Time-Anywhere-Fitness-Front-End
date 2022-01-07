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
        justifyContent="space-evenly"
        alignItems="flex-start"
      >
        <Grid item xs={5}>
          <ClassForm />
        </Grid>
        <Grid item xs={7}>
          <RegistrantList />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditClass;
