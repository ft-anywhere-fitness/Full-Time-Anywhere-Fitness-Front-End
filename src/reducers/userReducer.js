// Constants
import {
  REGISTERING,
  SUCCESSFUL_REGISTER,
  FAILED_REGISTER,
  REGISTERED,
  LOGGING_IN,
  SUCCESSFUL_LOGIN,
  FAILED_LOGIN,
  LOGOUT
} from "../actions/userActions";

// Initial State
const initialState = {
  username: "",
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
        ...action.payload,
        isLoggedIn: true,
        loggingIn: false
      };
    case FAILED_LOGIN:
      return {
        ...state,
        loggingIn: false
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default userReducer;
