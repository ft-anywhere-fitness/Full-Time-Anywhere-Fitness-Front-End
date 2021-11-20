// Libraries
import axios from "axios";

// Constants
export const LOGGING_IN = "LOGGING_IN";
export const SUCCESSFUL_LOGIN = "SUCCESSFUL_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const LOGGED_IN = "LOGGED_IN";
export const REGISTERING = "REGISTERING";
export const SUCCESSFUL_REGISTER = "SUCCESSFUL_REGISTER";
export const FAILED_REGISTER = "FAILED_REGISTER";
export const REGISTERED = "REGISTERED";

// Actions
export const registering = () => {
  return { type: REGISTERING };
};

export const successfulRegister = () => {
  return { type: SUCCESSFUL_REGISTER };
};

export const failedRegister = (errorMessage) => {
  return { type: FAILED_REGISTER, payload: errorMessage };
};

export const registered = (boolean) => {
  return { type: REGISTERED, payload: boolean };
};

export const loggingIn = () => {
  return { type: LOGGING_IN };
};

export const successfulLogin = (userData) => {
  return { type: SUCCESSFUL_LOGIN, payload: userData };
};

export const failedLogin = (errorMessage) => {
  return { type: FAILED_LOGIN, payload: errorMessage };
};

export const loggedIn = (boolean) => {
  return { type: LOGGED_IN, payload: boolean };
};

export const signUp = (credentials) => (dispatch) => {
  dispatch(registering());
  axios.post(`https://anywherefitnesslambda.herokuapp.com/api/auth/register`, credentials)
    .then(() => {
      dispatch(successfulRegister());
      dispatch(registered(true));
    })
    .catch((error) => {
      console.error(error);
      dispatch(failedRegister("Failed to register"));
    });
};

export const login = (credentials) => (dispatch) => {
  dispatch(loggingIn());
  axios
    .post("https://anywherefitnesslambda.herokuapp.com/api/auth/login", credentials)
    .then((response) => {
      window.localStorage.setItem("token", response.data.token);
      axios.get("https://anywherefitnesslambda.herokuapp.com/api/users")
        .then((response) => {
          const userData = response.data
            .find((user) => {
              return user.username === credentials.username;
            });
          dispatch(successfulLogin(userData));
          dispatch(loggedIn(true));
        })
        .catch((error) => {
          console.error("Failed to update user state with server data", error);
        });
    })
    .catch((error) => {
      console.error(error);
      dispatch(failedLogin("Failed to login"));
    });
};
