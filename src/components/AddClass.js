import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import { Button, Paper } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { axiosWithAuth } from "../utils/AxiosWithAuth";

// "class_id": 2,
//     "name": "daniel1",
//     "location": "abc street",
//     "class_type_name": "zumba",
//     "start_time": "10:00 PM",
//     "duration": "02:00:00",
//     "intensity": 8,
//     "max_class_size": 20,
//     "registrants": 6,
//     "instructor": {
//         "user_id": 3,
//         "username": "daniel3",
//         "email": "hij@789.com",
//         "role_name": "instructor",
//         "name": "daniel3"
//     },
//     "registrant_list": [
//         {
//             "name": "daniel1",
//             "role_name": "client",
//             "user_id": 1,
//             "username": "daniel1",
//             "email": "abc@123.com"
//         },
//         {
//             "name": "daniel2",
//             "role_name": "client",
//             "user_id": 2,
//             "username": "daniel2",
//             "email": "def@456.com"
//         },
//         {
//             "name": "daniel2",
//             "role_name": "client",
//             "user_id": 2,
//             "username": "daniel2",
//             "email": "def@456.com"
//         },
//         {
//             "name": "daniel2",
//             "role_name": "client",
//             "user_id": 2,
//             "username": "daniel2",
//             "email": "def@456.com"
//         },
//         {
//             "name": "daniel2",
//             "role_name": "client",
//             "user_id": 2,
//             "username": "daniel2",
//             "email": "def@456.com"
//         }
//     ]
// }

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
    <div>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Typography
          variant="h2"
          color="inherit"
          gutterBottom
          sx={{ marginTop: "3%" }}
        >
          Add new class
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
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
              sx={{ marginTop: "2.25%" }}
              onChange={handleChange("name")}
            />
            <TextField
              required
              id="locaiton"
              label="Location"
              variant="outlined"
              name="location"
              sx={{ marginTop: "2%", marginBottom: "2%" }}
              onChange={handleChange("location")}
            />

            <TextField
              required
              id="class_type"
              label="Class Type"
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
              id="class_type"
              label="Class Type"
              variant="outlined"
              name="class_type_name"
              sx={{ marginTop: "2.25%" }}
              onChange={handleChange("class_type_name")}
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
      </Paper>
    </div>
  );
}
export default AddClass;
