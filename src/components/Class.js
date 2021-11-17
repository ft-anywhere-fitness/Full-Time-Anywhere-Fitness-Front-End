// Libraries
import React from "react";

const Class = (props) => {
  const { session } = props;
  const {
    name,
    type,
    startTime,
    duration,
    intensityLevel,
    location,
    currentlyEnrolled,
    classSizeLimit
  } = session;

  return (
    <div className ='class-container'>
      <h3>Welcome to {name}</h3>
      <div>
        <p>This is a {type} class.</p>
        <p>Class will take place in {location}</p>
        <p>Class starts at {startTime}</p>
        <p>Class will last for {duration.hours} hours and {duration.minutes} minutes</p>
        <p>Expected Intensity: {intensityLevel}</p>
        <p>Attendees: {currentlyEnrolled}</p>
        <p>Max Attendees: {classSizeLimit}</p>
      </div>
    </div>
  );
};

export default Class;
