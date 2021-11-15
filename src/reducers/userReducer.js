// Constants
import { LOGIN } from "../actions/userAction";

// Initial State
const initialState = {
  username: "",
  password: "",
  role: "",
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
        role: action.payload.role
      };
    default:
      return state;
  }
};

export default userReducer;
