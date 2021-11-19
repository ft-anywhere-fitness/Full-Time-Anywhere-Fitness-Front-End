// Constants
import { NEW_CLASS } from "../actions/classActions";

// Dummy Data (this is subject to change)
const initialState = [];

// Class Reducer
const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CLASS:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default classReducer;
