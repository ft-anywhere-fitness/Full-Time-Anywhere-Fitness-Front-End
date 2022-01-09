import React, { useState, useEffect } from "react";
import { Button, Card } from "@mui/material";
import { CardContent } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

function ClassInfo(props) {
  const [classInfo, setClassInfo] = useState();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/classes/${id}`)
      .then((resp) => {
        console.log(resp.data);
        setClassInfo(resp.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  console.log(classInfo);

  async function handleRegister(e) {
    try {
      e.preventDefault();
      const resp = await axiosWithAuth().post(
        `${BASE_URL}/api/classes/${id}/register`
      );
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card component="div">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {classInfo.name}
        </Typography>
        <Typography variant="body2" color="inherit">
          location: {classInfo.location}
        </Typography>
        <Typography variant="body2" color="inherit">
          date: {classInfo.date}
        </Typography>
        <Typography variant="body2" color="inherit">
          class_type: {classInfo.classInfoass_type_name}
        </Typography>
        <Typography variant="body2" color="inherit">
          start time: {classInfo.start_time}
        </Typography>
        <Typography variant="body2" color="inherit">
          duration: {classInfo.duration}
        </Typography>
        <Typography variant="body2" color="inherit">
          intensity(out of 10): {classInfo.intensity}
        </Typography>
        <Typography variant="body2" color="inherit">
          max_class_size: {classInfo.max_class_size}
        </Typography>
        <Typography variant="body2" color="inherit">
          registrants: {!classInfo.registrants ? 0 : classInfo.registrants}
        </Typography>
        <Typography variant="body2" color="inherit">
          instructor: {classInfo.instructor_name}
        </Typography>
      </CardContent>
      <Button
        variant="outlined"
        size="large"
        color="inherit"
        onClick={handleRegister}
      >
        Register
      </Button>
    </Card>
  );
}

export default ClassInfo;
