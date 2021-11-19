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
