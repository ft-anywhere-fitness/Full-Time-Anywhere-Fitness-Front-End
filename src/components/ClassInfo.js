import React, { useState } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

function ClassInfo(props) {
  console.log;
  const { classInfo } = props;

  return (
    <Card component="div">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {classInfo.name}
        </Typography>
        <Typography variant="body2" color="inherit">
          location: {cl.location}
        </Typography>
        <Typography variant="body2" color="inherit">
          date: {cl.date}
        </Typography>
        <Typography variant="body2" color="inherit">
          class_type: {cl.class_type_name}
        </Typography>
        <Typography variant="body2" color="inherit">
          start time: {cl.start_time}
        </Typography>
        <Typography variant="body2" color="inherit">
          duration: {cl.duration}
        </Typography>
        <Typography variant="body2" color="inherit">
          intensity(out of 10): {cl.intensity}
        </Typography>
        <Typography variant="body2" color="inherit">
          max_class_size: {cl.max_class_size}
        </Typography>
        <Typography variant="body2" color="inherit">
          registrants: {!cl.registrants ? 0 : cl.registrants}
        </Typography>
        <Typography variant="body2" color="inherit">
          instructor: {cl.instructor_name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ClassInfo;
