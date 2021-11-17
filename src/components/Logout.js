import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AxiosWithAuth from "../utils/AxiosWithAuth";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AxiosWithAuth()
            .post('')
            .then(res => {
                console.log(res);
                localStorage.setItem('token', '');
                navigate("/");
            })
            .catch(err => {
                console.log(err);
            })
    },[])
    return (
        <h1> Logging Out... </h1>
    )
}

export default Logout;
