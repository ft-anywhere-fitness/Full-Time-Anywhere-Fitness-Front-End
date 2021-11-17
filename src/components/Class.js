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

  // const timeEmoji = time =>{
  //   let timeString = time.slice(0,3);
  //   return timeString;
  // }


  return (

    <div className ='class-container'>
     <section className= 'info-container'>
        <h3 className='class-name-container'>{name}</h3>
        <div className = 'class-details-container'>
          <p className= 'class-info-item'>This is a class in {type}.</p>
          <div className='class-location-times'>
            <p className= 'class-info-item'>{location} U+FE0F</p>
            <p className= 'class-info-item'>Class starts at {startTime}</p>
            <p className= 'class-info-item'>Class will last for {duration.hours} hours and {duration.minutes} minutes</p>
          </div>
      



          <p className= 'class-info-item'>Expected Intensity: {intensityLevel}</p>
          <p className= 'class-info-item'>Attendees: {currentlyEnrolled}</p>
          <p className= 'class-info-item'>Max Attendees: {classSizeLimit}</p>
        </div>
      </section>
      <section className='img-container'>
        fjadkofas
      </section>
    </div>
  );
};

export default Class;
