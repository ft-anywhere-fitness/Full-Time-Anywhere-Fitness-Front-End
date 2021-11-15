import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { axiosWithAuth } from './../utils/AxiosWithAuth' 


const Classes = (props) => {
    const [fitnessClass, setFitnessClass] = useState('')

    const { id } = useParams();
    const { push } = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get(`dummydata`)
            .then(res => {
                setFitnessClass(res.data)
            })
            .catch(err => {
                console.error(err);
            })
        
    }, []);
}

export default Classes;