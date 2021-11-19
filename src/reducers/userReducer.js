// Constants
import {
  FAILED_REGISTER,
  REGISTERING,
  SUCCESSFUL_REGISTER,
  REGISTERED
} from "../actions/userActions";

// Initial State
const initialState = {
  username: "",
  email: "",
  role_id: null,
  auth: "",
  registerErrorMessage: "",
  isRegistering: false,
  registered: false
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTERED:
      return {
        ...state,
        registered: action.payload
      };
    case SUCCESSFUL_REGISTER:
      return {
        ...state,
        ...action.payload,
        registerErrorMessage: "",
        isRegistering: false
      };
    case REGISTERING:
      return {
        ...state,
        isRegistering: true
      };
    case FAILED_REGISTER:
      return {
        ...state,
        registerErrorMessage: action.payload,
        isRegistering: false
      };
    default:
      return state;
  }
};

export default userReducer;
