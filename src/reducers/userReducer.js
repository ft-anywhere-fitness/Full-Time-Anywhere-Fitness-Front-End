// Constants
import { LOGIN, NEW_USER } from "../actions/userAction";

// Initial State
const initialState = {
  user: {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    role: "",
    user_id: null
  }
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload
      };
    case NEW_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;
