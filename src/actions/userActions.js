// Libraries
import axios from "axios";

// Axios Call to Login
export const postLogin = (credentials) => {
  return (dispatch) => {
    axios
      .post("https://anywherefitnesslambda.herokuapp.com/api/auth/login", credentials)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        axios
          .get("https://anywherefitnesslambda.herokuapp.com/api/users")
          .then((response) => {
            const userData = response.data.find((user) => user.username === credentials.username);
            dispatch(login(userData));
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .then((error) => {
        console.error(error);
      });
  };
};

// Constants
export const LOGIN = "LOGIN";
export const NEW_USER = "ADD_USER";

// Actions
export const login = (credentials) => {
  return { type: LOGIN, payload: credentials };
};

export const newUser = (credentials) => {
  return { type: NEW_USER, payload: credentials };
};
