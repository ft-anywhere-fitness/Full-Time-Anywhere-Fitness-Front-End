import React, { useState } from "react";
import { Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

import { Button, CardActionArea, CardActions } from "@mui/material";
import ClassInfo from "./ClassInfo";

function ClassDetails(props) {
  const navigate = useNavigate();
  const { cl } = props;

  async function handleRegister(e) {
    try {
      e.preventDefault();
      const resp = await axiosWithAuth().post(
        `${BASE_URL}/api/classes/${id}/register`
      );
      navigate("/classes");
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  }

  function routeToClass(e) {
    e.preventDefault();
    navigate(`/classes/${cl.class_id}`);
  }

  return (
    <Grid item xs={3} padding="1%">
      <Card elevation={12}>
        <CardActionArea onClick={routeToClass}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cl.name}
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
        </CardActionArea>
      </Card>
    </Grid>
  );
}

export default ClassDetails;
