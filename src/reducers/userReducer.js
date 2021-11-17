// Constants
import { LOGIN, NEW_USER } from "../actions/userActions";

// Initial State
const initialState = {
  "user_id": null,
  "username": "",
  "password": "",
  "email": "",
  "role_name": ""
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
