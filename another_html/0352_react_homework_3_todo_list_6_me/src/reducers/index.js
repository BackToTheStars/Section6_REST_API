
import tasksReducer from "./tasks";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  tasks: tasksReducer
});

export default allReducers;