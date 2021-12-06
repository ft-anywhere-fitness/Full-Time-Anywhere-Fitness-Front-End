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
            name: {cl.name}
            <br></br>
            class id: {cl.class_id}
            <br></br>
            start: {cl.start_time}
            <br></br>
            duration: {cl.duration}
            <br></br>
            intenseity level(out of 10): {cl.intensity}
            <br></br>
            location: {cl.location}
            <br></br>
            max_class_size: {cl.max_class_size}
            <br></br>
            class_type: {cl.class_type_name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ClassDetails;
