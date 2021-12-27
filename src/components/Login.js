import { axiosWithAuth } from "../utils/AxiosWithAuth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { Button, Paper } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";

const initialFormValues = {
  username: "",
  password: "",
  showPassword: false,
};

function Login(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  let { push } = useNavigate();

  const handleChange = (prop) => (event) => {
    setFormValues({
      ...formValues,
      [prop]: event.target.value,
    });
  };

  //   const handleSubmit = async (e) => {
  //     try {
  //       e.preventDefault();
  //       const resp = await axios.post(
  //         "https://anywherefitnesslambda.herokuapp.com/api/auth/login",
  //         formValues
  //       );
  //       const token = await resp.data.token;
  //       localStorage.setItem("token", token);
  //       console.log(resp);
  //     } catch (error) {
  //       console.log(error.response);
  //     }
  //   };
  const handleSubmit = async (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://anywherefitnesslambda.herokuapp.com/api/auth/login",
        formValues
      )
      .then((resp) => {
        localStorage.setItem("token", resp.data.token);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
          Login
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          // sx={{ border: "1px solid red" }}
        >
          <Paper
            elevation={15}
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "5%",
              // border: "1px solid red",
              // width: "50%",
            }}
          >
            <TextField
              required
              id="username"
              label="Username"
              variant="outlined"
              name="username"
              sx={{ marginTop: "2%", marginBottom: "2%" }}
              onChange={handleChange("username")}
            />
            <FormControl
              sx={{ m: 1, width: "25ch" }}
              required
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={formValues.showPassword ? "text" : "password"}
                formValues={formValues.password}
                onChange={handleChange("password")}
                sx={{ width: "100%" }}
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {formValues.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

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
export default Login;
