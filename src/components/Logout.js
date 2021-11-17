import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');
        navigate("/");
    }, []);
    return (
        <h1> Logging Out... </h1>
    )
}

export default Logout;
