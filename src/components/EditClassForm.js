import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router";
import AxiosWithAuth from "../utils/AxiosWithAuth";

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

const EditClassForm = (props) => {
    
    const [classValues, setClassValues] = useState(initialValues);
    const {id} = useParams();
    const navigate = useNavigate();


    // Have to set data still
    useEffect(() => {
        AxiosWithAuth()
            .get(`/class/${id}`)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
    },[])

    const handleChange = e => {
        setClassValues({ ...classValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        AxiosWithAuth()
            .put(`/class/${id}`, classValues)
            .then(res => {
                console.log(res);
                navigate('/classes')
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <div>
        <h1>Edit Class </h1>

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
            <button> Confirm Changes </button>
        </form>
        </div>
    );
}

export default EditClassForm;