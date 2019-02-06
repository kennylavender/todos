import todoApp from "../features/todo-app/todo-app-saga";
import { all, call } from "redux-saga/effects";

export default function*() {
  yield all([call(todoApp)]);
}
