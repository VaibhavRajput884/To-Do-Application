import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <div className={`App ${theme === "light" ? "light-mode" : "dark-mode"}`}>
      <h1>Todo App</h1>
      <div className='todo-list'>
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
