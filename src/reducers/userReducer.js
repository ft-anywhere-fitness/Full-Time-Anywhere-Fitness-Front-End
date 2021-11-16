// Constants
import { LOGIN, NEW_USER } from "../actions/userActions";

// Initial State
const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  password: "",
  email: "",
  role: "",
  user_id: null
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case NEW_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
