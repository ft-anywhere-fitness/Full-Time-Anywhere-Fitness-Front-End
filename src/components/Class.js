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

  const isFull= () =>{
    if(currentlyEnrolled >= classSizeLimit){
      return (
        <p>This class is full.</p>
      )
    }
  }

  return (

    <div className ='class-container'>
     <section className= 'info-container'>
        <h3 className='class-name-container'>{name}</h3>
        <p className= 'class-info-item class-type'>This is a class in <span className='class-bold'>{type}</span>.</p>
        <div className = 'class-details-container'>
          <div className='class-location-times'>
            <p className= 'class-info-item'>{location} </p>
            <p className= 'class-info-item'>Class starts at <span className='class-bold'>{startTime}</span></p>
            <p className= 'class-info-item'>Duration: <span className='class-bold'>{duration.hours} hours {duration.minutes} minutes</span></p>
          </div>

          <div className='intensity-attendees-container'>
            <p className= 'class-info-item'>Expected Intensity: {intensityLevel}</p>
            <p className= 'class-info-item'>Attendees: {currentlyEnrolled}</p>
            <p className= 'class-info-item'>Max Attendees: {classSizeLimit}</p>
            {isFull()}
          </div>
        </div>
      </section>
      <section className='img-container'>
        IMAGE GOES HERE
      </section>
    </div>
  );
};

export default Class;

<span className='class-bold'></span>