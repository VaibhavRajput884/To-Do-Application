const initialState = {
  todoTasks: JSON.parse(localStorage.getItem("tasks")) || [],
  // Load theme from local storage && default is 'light'
  theme: localStorage.getItem("theme") || "light",
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      const updatedAddTask = [...state.todoTasks, action.payload];
      localStorage.setItem("tasks", JSON.stringify(updatedAddTask));

      return {
        ...state,
        todoTasks: updatedAddTask,
      };

    case "DELETE_TASK":
      const updatedDeleteTask = state.todoTasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(updatedDeleteTask));

      return {
        ...state,
        todoTasks: updatedDeleteTask,
      };

    case "TOGGLE_TASK":
      const updatedToggleTask = state.todoTasks.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(updatedToggleTask));

      return {
        ...state,
        todoTasks: updatedToggleTask,
      };

    case "CHANGE_THEME":
      localStorage.setItem("theme", action.payload);

      return {
        ...state,
        theme: action.payload,
      };

    default:
      return state;
  }
};

export default taskReducer;
