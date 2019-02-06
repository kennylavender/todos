import { combineReducers } from "redux";
import {
  todoAppReducer,
  todoAppSlice,
} from "../features/todo-app/todo-app-reducer";
import {
  todosReducer,
  todosReducerSlice,
} from "../features/todos/todos-reducer";

export const rootReducer = combineReducers({
  [todoAppSlice]: todoAppReducer,
  [todosReducerSlice]: todosReducer,
});
