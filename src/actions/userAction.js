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
