// Constants
import { NEW_CLASS } from "../actions/classActions";

const initialState = [
  {
    class_id: 1,
    name: '',
    type: 'Olympic Weightlifting',
    startTime: '09:00',
    duration: '',
    intensityLevel: '',
    location: '',
    currentlyEnrolled: '',
    classSizeLimit: ''
  },
  {
    class_id: 2,
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensityLevel: '',
    location: '',
    currentlyEnrolled: '',
    classSizeLimit: ''
  },
  {
    class_id: 3,
    name: '',
    type: '',
    startTime: '',
    duration: '',
    intensityLevel: '',
    location: '',
    currentlyEnrolled: '',
    classSizeLimit: ''
  },
];

const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CLASS:
      return;
    default:
      return state;
  }
};

export default classReducer;
