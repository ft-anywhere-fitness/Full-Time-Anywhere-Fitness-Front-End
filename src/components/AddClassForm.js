//column. Space in between, center them, make them bigger. Put images in.
//Put it over a Background image?

// Libraries
import AxiosWithAuth from "../utils/AxiosWithAuth";
import React, { useState } from "react";
import { connect } from "react-redux";

// Actions
import { addNewClass } from "../actions/classActions";
import { useNavigate } from "react-router-dom";

// Initial State (this is subject to change)
const initialValues = {
  name: "",
  class_type_name: "",
  start_time: "",
  duration: "",
  intensity: "",
  location: "",
  registrants: "",
  max_class_size: ""
};



function AddClassForm({ addNewClass }) {
  const [classValues, setClassValues] = useState(initialValues);
  const navigate = useNavigate();

  const handleChange = e => {
    setClassValues({ ...classValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // addNewClass(classValues);
    AxiosWithAuth()
        .post('/api/classes', classValues)
        .then(resp=> {
            console.log(resp);
            navigate('/classes')
        })
        .catch(err=> {
            console.log(err);
        })
    
    
  };

  return (
    <div className= 'addclasscontainer'>
      <section className= 'addclassform'>
        <h1 className= 'addclassh1'>Add a class</h1>

        <form onSubmit={handleSubmit}>
          <label>Class Name</label>
          <input className= 'form-item'
            id="name"
            name="name"
            type='text'
            value={classValues.name}
            onChange={handleChange}
            maxLength="30"
            required = 'true'
          />

          <label>Class Type</label>
          <input className= 'form-item'
            id="type"
            name="class_type_name"
            type='text'
            value={classValues.class_type_name}
            onChange={handleChange}
            maxLength="15"
            required = 'true'
          />

          <label>Start Time</label>
          <input className= 'form-item'
            id="startTime"
            name="start_time"
            type='text'
            value={classValues.start_time}
            onChange={handleChange}
            required = 'true'
          />

          <label>Duration</label>
          <input className= 'form-item'
            id="duration"
            name="duration"
            type='text'
            value={classValues.duration}
            onChange={handleChange}
            required = 'true'
          />

          <label>Intensity Level</label>
          <input className= 'form-item'
            id="intensityLevel"
            name="intensity"
            type='number'
            value={classValues.intensity}
            onChange={handleChange}
            required = 'true'
          />

          <label>Location</label>
          <input className= 'form-item' 
            id="location"
            name="location"
            type='text'
            value={classValues.location}
            onChange={handleChange}
            required = 'true'
          />

          <label>Registrants</label>
          <input className= 'form-item'
            id="registrants"
            name="registrants"
            type="number"
            value={classValues.registrants}
            onChange={handleChange}
            required = 'true'
          />  

          <label>Max Class Size</label>
          <input className= 'form-item'
            id="classLimit"
            name="max_class_size"
            type="number"
            value={classValues.max_class_size}
            onChange={handleChange}
            required = 'true'
          />
          <button> Add Class </button>
        </form>
        </section>

      <section className='addclassimg'>
        {/* background image for right side of component goes here */}

      </section>
    </div>
  );
}

export default connect(null, { addNewClass })(AddClassForm);
