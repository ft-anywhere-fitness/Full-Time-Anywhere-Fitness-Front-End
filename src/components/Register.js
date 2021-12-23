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

/*4. role_id
1. "1" - client
2. "2" - instructor
*/

/* how to set role_id from the select menu */

const initialFormValues = {
  role_id: undefined,
  name: "",
  username: "",
  password: "",
  validatePassword: "",
  showPassword: false,
  email: "",
  auth: "",
  authPasswordRender: false,
  showAuthPassword: false,
};

const accountTypes = [
  {
    label: "Client",
    role_id: 1,
  },
  {
    label: "Instructor",
    role_id: 2,
  },
];

function Register(props) {
  const [formValues, setFormValues] = useState(initialFormValues);

  let history = useNavigate();

  const handleChange = (prop) => (event) => {
    setFormValues({
      ...formValues,
      [prop]: event.target.value,
    });
  };

  useEffect(() => {
    if (formValues.role_id === 2) {
      setFormValues({ ...formValues, authPasswordRender: true });
    }
    if (formValues.role_id === 1) {
      setFormValues({ ...formValues, authPasswordRender: false });
    }
    console.log(formValues);
  }, [formValues.role_id]);

  // const handleRoleSelect = (event) => {
  //   useEffect(() => {
  //     setFormValues({ ...formValues, role_id: event.target.value });
  //   }, [setFormValues]);
  // };
  // console.log(formValues);

  const handleClickShowPassword = () => {
    setFormValues({
      ...formValues,
      showPassword: !formValues.showPassword,
    });
  };

  const handleClickShowAuthPassword = () => {
    setFormValues({
      ...formValues,
      showAuthPassword: !formValues.showAuthPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const handleSubmit =

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
          Register
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
              id="user_name"
              label="Full Name"
              variant="outlined"
              name="name"
              sx={{ marginTop: "2.25%" }}
              onChange={handleChange("name")}
            />
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
            <TextField
              required
              id="email"
              label="Email address"
              variant="outlined"
              name="email"
              onChange={handleChange("email")}
            />
            <TextField
              id="role-select"
              select
              label="Select Account Type"
              variant="outlined"
              name="role_id"
              sx={{ marginTop: "2.25%", marginBottom: "0%" }}
              onChange={handleChange("role_id")}
            >
              {accountTypes.map((option) => (
                <MenuItem key={option.role_id} value={option.role_id}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {formValues.authPasswordRender && (
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-auth-password">
                  Enter Instructor Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-auth-password"
                  name="auth"
                  type={formValues.showAuthPassword ? "text" : "password"}
                  formValues={formValues.password}
                  onChange={handleChange("auth")}
                  sx={{ width: "100%" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowAuthPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {formValues.showAuthPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="instructor-password"
                />
              </FormControl>
            )}
            <Button
              sx={{ marginTop: "5%" }}
              type="submit"
              variant="outlined"
              size="large"
              color="inherit"
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Paper>
    </div>
  );
}
export default Register;
