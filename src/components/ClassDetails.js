import React from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";

function ClassDetails(props) {
  const { cl } = props;

  return (
    <Grid item xs={3} padding="1%">
      <Card>
        <CardContent>
          <Typography color="inherit" variant="">
            {cl.name}
            <br></br>
            class id: {cl.class_id}
            <br></br>
            start: {cl.start_time}
            <br></br>
            duration: {cl.duration}
            <br></br>
            {cl.intensity}
            <br></br>
            {cl.location}
            <br></br>
            {cl.max_class_size}
            <br></br>
            {cl.class_type_name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ClassDetails;
