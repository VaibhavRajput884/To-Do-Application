import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../globalStore/taskAction"; 
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"; 
import CheckList from "../assets/Checklist.jpg"; 
import "../styles/styles.css"; 

const TaskList = () => {
  const todos = useSelector((state) => state.todoTasks); // Fetching tasks from Redux store
  const dispatch = useDispatch(); 

  
  const handleDelete = (id) => {
    dispatch(deleteTask(id)); 
  };

  // Function to handle task completion toggling
  const handleToggle = (id) => {
    dispatch(toggleTask(id)); 
  };

  return (
    <>
      <h3>Task List</h3>
      
      {todos.length === 0 && (
        <div className='empty-img-container'>
          <img src={CheckList} alt='empty-img' />
        </div>
      )}
      <ul className='todo-items'>
        {todos.map((task) => (
          <li key={task.id}>
            <div>
              <div>
                <input
                  type='checkbox'
                  id={task.id}
                  checked={task.completed}
                  onChange={() => handleToggle(task.id)}
                />
              </div>
              <div className='label-container'>
                <label
                  htmlFor={task.id}
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                >
                  {task.todo}
                </label>
              </div>
            </div>
            <div>
              <p style={{ color: task.completed ? "green" : "red" }}>
                {task.completed ? "Completed" : "Pending"}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleDelete(task.id)}
                className='delete-btn'
              >
                <DeleteOutlineIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
