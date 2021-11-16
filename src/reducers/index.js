import { combineReducers } from "redux";

import userReducer from "./userReducer";
import classReducer from "./classReducer";

export default combineReducers({
  user: userReducer,
  classes: classReducer
});
