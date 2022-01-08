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
  const [deets, setDeets] = useState({});
  const [renderDeets, setRenderDeets] = useState(false);

  const routeToClass = async (e) => {
    try {
      e.preventDefault();
      const resp = await axiosWithAuth().get(
        `https://anywherefitnesslambda.herokuapp.com/api/classes/${cl.class_id}`
      );
      console.log(resp);
      console.log(cl.class_id);
      navigate(`/classes/${resp.data.class_id}`);
      <ClassInfo classInfo={resp.data} />;
    } catch (error) {
      console.log(error.response.data);
    }
  };

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
        <CardActions>
          <Button
            // size="medium"
            color="inherit"
            variant="outlined"
            sx={{ display: "flex", flexDirection: "row-reverse" }}
          >
            Share
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ClassDetails;
