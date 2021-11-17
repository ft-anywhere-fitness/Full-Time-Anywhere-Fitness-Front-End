// Constants
import { SUCCESSFUL_LOGIN, SUCCESSFUL_REGISTER } from "../actions/userActions";

// Initial State
const initialState = {
  "username": "",
  "password": "",
  "email": "",
  "role_id": null
};

// User Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESSFUL_LOGIN:
      return action.payload;
    case SUCCESSFUL_REGISTER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
