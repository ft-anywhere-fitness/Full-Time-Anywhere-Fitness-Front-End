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
      const resp = await axios.post(
        "https://anywherefitnesslambda.herokuapp.com/api/auth/register",
        {
          role_id: formValues.role_id,
          name: formValues.name,
          username: formValues.username,
          password: formValues.password,
          email: formValues.email,
          auth: formValues.auth,
        }
      );
      console.log(resp);
      navigate("/login");
    } catch (error) {
      console.log(error.response);
    }
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
export default Register;
