// Libraries
import axios from "axios";

// Constants
export const LOGGING_IN = "LOGGING_IN";
export const SUCCESSFUL_LOGIN = "SUCCESSFUL_LOGIN";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const REGISTERING = "REGISTERING";
export const SUCCESSFUL_REGISTER = "SUCCESSFUL_REGISTER";
export const FAILED_REGISTER = "FAILED_REGISTER";
export const REGISTERED = "REGISTERED";

// Actions
export const loggingIn = () => {
  return { type: LOGGING_IN };
};

export const registered = (boolean) => {
  return { type: REGISTERED, payload: boolean };
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

export const successfulRegister = (credentials) => {
  return { type: SUCCESSFUL_REGISTER, payload: credentials };
};

export const failedRegister = (errorMessage) => {
  return { type: FAILED_REGISTER, payload: errorMessage };
};

export const signUp = (credentials) => (dispatch) => {
  dispatch(registering());
  axios.post(`https://anywherefitnesslambda.herokuapp.com/api/auth/register`, credentials)
    .then(() => {
      dispatch(registered(true));
      dispatch(successfulRegister(credentials));
    })
    .catch((error) => {
      console.error(error);
      dispatch(failedRegister("Failed to register, please try again."));
    });
};
