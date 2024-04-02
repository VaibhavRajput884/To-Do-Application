import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, changeTheme } from "../globalStore/taskAction"; 
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../styles/styles.css";

const TaskInput = () => {
  const [task, setTask] = useState(""); 
  const dispatch = useDispatch(); 
  const theme = useSelector((state) => state.theme); 

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleTask = () => {
    if (task.trim() === "") {
      alert("Please Enter the Valid Input"); 
    } else {
      dispatch(addTask(task)); 
      setTask(""); 
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    dispatch(changeTheme(newTheme)); 
  };

  return (
    <div className='input-container'>
      <input
        type='text'
        name='task'
        placeholder='Enter the Task'
        value={task}
        onChange={handleChange}
      />
      <button className='btn' onClick={handleTask}>
        Add 
      </button>

      <button className='btn' onClick={toggleTheme}>
        {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}{" "}
      </button>
    </div>
  );
};

export default TaskInput;
