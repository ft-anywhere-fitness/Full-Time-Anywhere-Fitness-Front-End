// Libraries
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Axios Call to Register
export const register = (credentials) => {
  return (dispatch) => {
    let navigate = useNavigate();
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/register", credentials)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .then((error) => {
        console.error(error);
      });
  };
};

// Axios Call to Login
export const login = (credentials) => {
  return (dispatch) => {
    let navigate = useNavigate();
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/login", credentials)
      .then((response) => {
        console.log(response);
        navigate("/");
        // localStorage.setItem("token", response.data.token);
        // axios
        //   .get("https://anywherefitnesslambda.herokuapp.com/api/users")
        //   .then((response) => {
        //     const userData = response.data.find((user) => user.username === credentials.username);
        //     dispatch(successfulLogin(userData));
        //     // useNavigate().navigate("/");
        //   })
        //   .catch((error) => {
        //     console.error(error);
        //   });
      })
      .then((error) => {
        console.error(error);
      });
  };
};

// Constants
export const LOGGING_IN = "LOGGING_IN";
export const SUCCESSFUL_LOGIN = "SUCCESSFUL_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const REGISTERING = "REGISTERING";
export const SUCCESSFUL_REGISTER = "SUCCESSFUL_REGISTER";
export const FAILED_REGISTER = "FAILED_REGISTER";

// Actions
export const loggingIn = () => {
  return { type: LOGGING_IN };
};

export const successfulLogin = (credentials) => {
  return { type: SUCCESSFUL_LOGIN, payload: credentials };
};

export const failedLogin = (errorMessage) => {
  return { type: FAILED_LOGIN, payload: errorMessage };
};

export const successfulRegister = (credentials) => {
  return { type: SUCCESSFUL_REGISTER, payload: credentials };
};

export const failedRegister = (errorMessage) => {
  return { type: FAILED_LOGIN, payload: errorMessage };
};
