// Libraries
// import AxiosWithAuth from "../utils/axiosWithAuth";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

// Actions
import { addNewClass } from "../actions/classActions";

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
  // const { push } = useHistory();

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
  };

  return (
    <div>
      <h1>Add a class</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          id="name"
          name="name"
          value={classValues.name}
          onChange={handleChange}
        />

        <label>Type</label>
        <input
          id="type"
          name="type"
          value={classValues.type}
          onChange={handleChange}
        />

        <label>Start Time</label>
        <input
          id="startTime"
          name="startTime"
          value={classValues.startTime}
          onChange={handleChange}
        />

        <label>Duration</label>
        <input
          id="duration"
          name="duration"
          value={classValues.duration}
          onChange={handleChange}
        />

        <label>Intensity Level</label>
        <input
          id="intensityLevel"
          name="intensityLevel"
          value={classValues.intensityLevel}
          onChange={handleChange}
        />

        <label>Location</label>
        <input
          id="location"
          name="location"
          value={classValues.location}
          onChange={handleChange}
        />

        <label>Current number of Registered attendees</label>
        <input
          id="currentlyEnrolled"
          name="currentlyEnrolled"
          value={classValues.currentlyEnrolled}
          onChange={handleChange}
        />

        <label>Max Class Size</label>
        <input
          id="classLimit"
          name="classLimit"
          value={classValues.classLimit}
          onChange={handleChange}
        />
        <button> Add Class </button>
      </form>
    </div>
  );
}

export default connect(null, { addNewClass })(AddClassForm);
