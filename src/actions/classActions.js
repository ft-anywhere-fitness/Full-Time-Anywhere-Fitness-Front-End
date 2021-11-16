// Constants
export const NEW_CLASS = "NEW_CLASS";

// Actions
export const addNewClass = (newClass) => {
  return { type: NEW_CLASS, payload: newClass };
};
