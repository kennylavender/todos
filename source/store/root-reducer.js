import { combineReducers } from "redux";
import {
  todoAppReducer,
  todoAppSlice,
} from "../todo-app/todo-app-reducer";
import {
  todosReducer,
  todosReducerSlice,
} from "../todos/todos-reducer";

export const rootReducer = combineReducers({
  [todoAppSlice]: todoAppReducer,
  [todosReducerSlice]: todosReducer,
});
