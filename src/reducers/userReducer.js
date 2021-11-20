// Constants
import {
  REGISTERING,
  SUCCESSFUL_REGISTER,
  FAILED_REGISTER,
  REGISTERED,
  LOGGING_IN,
  SUCCESSFUL_LOGIN,
  FAILED_LOGIN,
  LOGGED_IN
} from "../actions/userActions";

// Initial State
const initialState = {
  username: "",
  email: "",
  user_id: null,
  role_name: "",
  registering: false,
  registerErrorMessage: "",
  isRegistered: false,
  loggingIn: false,
  loginErrorMessage: "",
  isLoggedIn: false,
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING:
      return {
        ...state,
        registering: true
      };
    case SUCCESSFUL_REGISTER:
      return {
        ...state,
        registerErrorMessage: "",
        registering: false
      };
    case FAILED_REGISTER:
      return {
        ...state,
        registerErrorMessage: action.payload,
        registering: false
      };
    case REGISTERED:
      return {
        ...state,
        isRegistered: action.payload
      };
    case LOGGING_IN:
      return {
        ...state,
        loggingIn: true
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        username: action.payload.username,
        email: action.payload.email,
        user_id: action.payload.user_id,
        role_name: action.payload.role_name,
        isLoggedIn: true,
        loggingIn: false
      };
    case FAILED_LOGIN:
      return {
        ...state,
        loggingIn: false
      };
    case LOGGED_IN:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
