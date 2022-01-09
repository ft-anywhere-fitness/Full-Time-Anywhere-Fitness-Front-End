import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { axiosWithAuth } from "../utils/AxiosWithAuth";
import isWeekend from "date-fns/isWeekend";
import { TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import ClassForm from "./ClassForm";
import { BASE_URL } from "../constants";

const initialFormValues = {
  name: "",
  location: "",
  class_type_name: "",
  start_time: "",
  duration: "",
  intensity: null,
  max_class_size: null,
};

function AddClass(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [value, setValue] = useState(null);
  const [timeValue, setTimeValue] = useState(null);

  let navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setFormValues({
      ...formValues,
      [prop]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const resp = await axiosWithAuth().post(
        `${BASE_URL}/api/classes/`,
        formValues
      );
      console.log(resp);
      navigate("/dashboard");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <Paper
      sx={{
        height: "100vh",
      }}
    >
      <Typography
        variant="h2"
        color="inherit"
        gutterBottom
        sx={{ marginTop: "3%", marginBottom: "3%" }}
        gutterBottom
      >
        Add new class
      </Typography>
      <ClassForm />
    </Paper>
  );
}
export default AddClass;
