// Constants
import { NEW_CLASS } from "../actions/classActions";

// Dummy Data (this is subject to change)
const initialState = {
  classes: [
    {
      class_id: 1,
      name: "Precision Movements with Greg",
      type: 'Olympic Lifting',
      startTime: '09:00:00',
      duration: {
        hours: "1",
        minutes: "30",
        seconds: "0"
      },
      intensityLevel: 'Very Intensive',
      location: '8052 State Lane Victoria, TX 77904',
      currentlyEnrolled: 13,
      classSizeLimit: 30
    },
    {
      class_id: 2,
      name: 'Pure Calisthenics with Amy',
      type: 'Calisthenics',
      startTime: '10:30:00',
      duration: {
        hours: "2",
        minutes: "0",
        seconds: "0"
      },
      intensityLevel: 'Fairly Intensive',
      location: '830 Roehampton Ave. Huntington, NY 11743',
      currentlyEnrolled: 7,
      classSizeLimit: 20
    },
    {
      class_id: 3,
      name: 'Mind Over Matter Lifting with Samuel',
      type: 'Bodybuilding',
      startTime: '11:00:00',
      duration: {
        hours: "2",
        minutes: "0",
        seconds: "0"
      },
      intensityLevel: 'Fairly Intensive',
      location: '665 Clay Road Easton, PA 18042',
      currentlyEnrolled: 37,
      classSizeLimit: 50
    },
    {
      class_id: 4,
      name: 'Max Effort Lifting with Joey',
      type: 'Powerlifting',
      startTime: '09:30:00',
      duration: {
        hours: "1",
        minutes: "0",
        seconds: "0"
      },
      intensityLevel: 'Extremely Intensive',
      location: '318 Clark Lane Wilmington, MA 01887',
      currentlyEnrolled: 18,
      classSizeLimit: 30
    }
  ]
};

// Class Reducer
const classReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CLASS:
      return {
        ...state,
        classes: [...state.classes, action.payload]
      };
    default:
      return state;
  }
};

export default classReducer;
