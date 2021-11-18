// Libraries
import axios from "axios";

// Axios Call to Register
export const register = (credentials) => {
  return (dispatch) => {
    dispatch(registering());
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/register", credentials)
      .then((response) => {
        console.log(response);
        dispatch(successfulRegister());
      })
      .catch((error) => {
        console.error(error);
        dispatch(failedRegister());
      });
  };
};

// Axios Call to Login
export const login = (credentials) => {
  return (dispatch) => {
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/login", credentials)
      .then((response) => {
        console.log(response);
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
      .catch((error) => {
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

export const registering = () => {
  return { type: REGISTERING };
};

export const successfulRegister = () => {
  return { type: SUCCESSFUL_REGISTER };
};

export const failedRegister = (errorMessage) => {
  return { type: FAILED_LOGIN, payload: errorMessage };
};
