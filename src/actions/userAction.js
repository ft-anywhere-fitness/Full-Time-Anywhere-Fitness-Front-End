// Constants
export const LOGIN = "LOGIN";

// Actions
export const login = (credentials) => {
  return { type: LOGIN, payload: credentials };
};
