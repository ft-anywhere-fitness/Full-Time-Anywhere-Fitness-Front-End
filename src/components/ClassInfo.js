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

const initialValues = {
  class_id: null,
  name: "",
  location: "",
  class_type_name: "",
  date: "",
  start_time: "",
  duration: "",
  intensity: null,
  max_class_size: null,
  registrants: null,
  instructor_user_id: null,
  instructor: {},
};

function ClassInfo(props) {
  const [classInfo, setClassInfo] = useState(initialValues);
  const { id } = useParams();

  const navigate = useNavigate();
  useEffect(() => {
    axiosWithAuth()
      .get(`${BASE_URL}/api/classes/${id}`)
      .then((resp) => {
        setClassInfo(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(classInfo);

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

  return (
    <Card gutterBottom>
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
          class_type: {classInfo.class_type_name}
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
          instructor: {classInfo.instructor.name}
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
