// Constants
import {
  REGISTERING,
  SUCCESSFUL_LOGIN,
  SUCCESSFUL_REGISTER,
  FAILED_REGISTER
} from "../actions/userActions";

// Initial State
const initialState = {
  "username": "",
  "email": "",
  "role_id": null,
  "auth": "",
  "isRegistering": false,
  "registrationError": "",
  "isLoggingIn": false
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERING:
      return {
        ...state,
        "isRegistering": true,
        "registrationError": ""
      };
    case SUCCESSFUL_REGISTER:
      return {
        ...state,
        "isRegistering": false
      };
    case FAILED_REGISTER:
      return {
        ...state,
        "isRegistering": false,
        "registrationError": "Failed to register &#9785;"
      };
    case SUCCESSFUL_LOGIN:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
