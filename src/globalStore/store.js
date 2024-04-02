import { createStore } from "redux";
import taskReducer from "./taskReducer"; 

// Creating a Redux store with the taskReducer
export const store = createStore(taskReducer);
