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

// insert into "classes" ("class_type_id", "duration", "instructor_user_id", "intensity", "location", "max_class_size", "name", "registrants", "start_time") values ($1, $2, $3, $4, $5, $6, $7, DEFAULT, $8) returning "class_type_id", "start_time", "duration", "intensity", "location", "registrants", "max_class_size" - null value in column "date" of relation "classes" violates not-null constraint
