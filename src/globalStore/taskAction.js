import { v4 as uuidv4 } from "uuid";

export const addTask = (todo) => {
  // Generate a unique id for the new task using uuidv4
  const id = uuidv4();

  return {
    type: "ADD_TASK",
    payload: {
      id,
      todo,
      completed: false,
    },
  };
};

// Action creator to delete a task
export const deleteTask = (id) => {
  return {
    type: "DELETE_TASK",
    payload: id, 
  };
};

// Action creator to toggle the completion status of a task
export const toggleTask = (id) => {
  return {
    type: "TOGGLE_TASK",
    payload: id, 
  };
};

// Action creator to change the theme of the application
export const changeTheme = (theme) => {
  return {
    type: "CHANGE_THEME",
    payload: theme, 
  };
};
