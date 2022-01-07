import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

import { TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";

const initialFormValues = {
  name: "",
  location: "",
  class_type_name: "",
  start_time: "",
  duration: "",
  intensity: null,
  max_class_size: null,
};

function ClassForm(props) {
  const [formValues, setFormValues] = !props
    ? useState(initialFormValues)
    : useState(props);
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
        "https://anywherefitnesslambda.herokuapp.com/api/classes/",
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
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ display: "flex" }}
      >
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={6} sx={{ paddingRight: "2%" }}>
          <Paper
            elevation={15}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5%",
            }}
          >
            <TextField
              required
              id="name"
              label="Class Name"
              variant="outlined"
              name="name"
              sx={{ marginTop: "2.25%", marginBottom: "2.25%" }}
              onChange={handleChange("name")}
            />
            <LocalizationProvider required dateAdapter={AdapterDateFns}>
              <TimePicker
                required
                sx={{ marginTop: "2.25%" }}
                label="Start Time"
                value={timeValue}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              required
              id="duration"
              label="Duration (HH:MM)"
              variant="outlined"
              name="duration"
              sx={{ marginTop: "2%", marginBottom: "2%" }}
              onChange={handleChange("duration")}
            />
            <TextField
              required
              id="location"
              label="Location"
              variant="outlined"
              name="location"
              sx={{ marginBottom: "2%" }}
              onChange={handleChange("location")}
            />

            <TextField
              required
              id="class_type"
              label="Class Type (e.g., zumba, pilates, jazzercise, etc.)"
              variant="outlined"
              name="class_type_name"
              onChange={handleChange("class_type_name")}
            />
            <TextField
              required
              id="intensity"
              label="Intensity (out of 10)"
              variant="outlined"
              name="intensity"
              sx={{ marginTop: "2.25%" }}
              onChange={handleChange("intensity")}
            />
            <TextField
              required
              id="max_class_size"
              label="Max Class Size"
              variant="outlined"
              name="class_type_name"
              sx={{ marginTop: "2.25%" }}
              onChange={handleChange("max_class_size")}
            />

            <Button
              sx={{ marginTop: "5%" }}
              type="submit"
              variant="outlined"
              size="large"
              color="inherit"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ClassForm;
