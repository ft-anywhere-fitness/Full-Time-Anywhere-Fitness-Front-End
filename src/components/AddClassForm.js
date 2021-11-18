//column. Space in between, center them, make them bigger. Put images in.
//Put it over a Background image?

// Libraries
// import AxiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";
import { connect } from "react-redux";
// import {useHistory} from "react-router-dom"
// Actions
import { addNewClass } from "../actions/classActions";
import { useNavigate } from "react-router-dom";

// Initial State (this is subject to change)
const initialValues = {
  name: "",
  type: "",
  startTime: "",
  duration: {
    hours: "",
    minutes: "",
    seconds: ""
  },
  intensityLevel: "",
  location: "",
  currentlyEnrolled: "",
  classSizeLimit: ""
};



function AddClassForm({ addNewClass }) {
  const [classValues, setClassValues] = useState(initialValues);
  let navigate = useNavigate();

  const handleChange = e => {
    setClassValues({ ...classValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewClass(classValues);
    // AxiosWithAuth()
    //     .post('/', classValues)
    //     .then(resp=> {
    //         console.log(resp);
    //         push('/');
    //     })
    //     .catch(err=> {
    //         console.log(err);
    //     })
    // push('/classes');
    navigate('/classes')
  };

  return (
    <div className= 'addclasscontainer'>
      <section className= 'addclassform'>
        <h1 className= 'addclassh1'>Add a class</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input className= 'form-item'
            id="name"
            name="name"
            value={classValues.name}
            onChange={handleChange}
          />

          <label>Type</label>
          <input className= 'form-item'
            id="type"
            name="type"
            value={classValues.type}
            onChange={handleChange}
          />

          <label>Start Time</label>
          <input className= 'form-item'
            id="startTime"
            name="startTime"
            value={classValues.startTime}
            onChange={handleChange}
          />

          <label>Duration</label>
          <input className= 'form-item'
            id="duration"
            name="duration"
            value={classValues.duration}
            onChange={handleChange}
          />

          <label>Intensity Level</label>
          <input className= 'form-item'
            id="intensityLevel"
            name="intensityLevel"
            value={classValues.intensityLevel}
            onChange={handleChange}
          />

          <label>Location</label>
          <input className= 'form-item' 
            className='form-item'
            id="location"
            name="location"
            value={classValues.location}
            onChange={handleChange}
          />

          <label>Current number of Registered attendees</label>
          <input className= 'form-item'
            id="currentlyEnrolled"
            name="currentlyEnrolled"
            value={classValues.currentlyEnrolled}
            onChange={handleChange}
          />

          <label>Max Class Size</label>
          <input className= 'form-item'
            id="classLimit"
            name="classLimit"
            value={classValues.classLimit}
            onChange={handleChange}
          />
          <button> Add Class </button>
        </form>
        </section>

      <section className='addclassimg'>
        {/* image goes here */}
      </section>
    </div>
  );
}

export default connect(null, { addNewClass })(AddClassForm);
