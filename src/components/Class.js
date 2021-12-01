import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

function Class(props) {
  const { classList } = props;

  return (
    <Grid item xs={3} padding="1%">
      <Card>
        <CardContent>
          <Typography color="inherit" variant="">
            {classList.class_id}
            {classList.name}
            {classList.start_time}
            {classList.duration}
            {classList.intensity}
            {classList.location}
            {classList.max_class_size}
            {classList.class_type_name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Class;
