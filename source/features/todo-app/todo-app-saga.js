import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  createTodoRequest,
  createTodoSuccess,
  loadTodosRequest,
  loadTodosSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  updateTodoRequest,
  updateTodoSuccess,
} from "./todo-app-reducer";
import { createTodo, fetchTodos, deleteTodo, updateTodo } from "./todo-app-api";
import { receiveTodos } from "../todos/todos-reducer";

function* handleCreateTodoRequest(action = {}) {
  const todo = yield call(createTodo, action.payload);
  yield put(receiveTodos([todo]));
  yield put(createTodoSuccess(todo));
  yield put(loadTodosRequest());
}

function* watchCreateTodoRequest() {
  yield takeEvery(createTodoRequest().type, handleCreateTodoRequest);
}

function* handleDeleteTodoRequest(action = {}) {
  const result = yield call(deleteTodo, action.payload);
  yield put(deleteTodoSuccess(action.payload));
  yield put(loadTodosRequest());
}

function* watchDeleteTodoRequest() {
  yield takeEvery(deleteTodoRequest().type, handleDeleteTodoRequest);
}

function* handleLoadTodosRequest() {
  const todos = yield call(fetchTodos);
  yield put(receiveTodos(todos));
  yield put(loadTodosSuccess(todos));
}

function* watchLoadTodosRequest() {
  yield takeLatest(loadTodosRequest().type, handleLoadTodosRequest);
}

function* handleUpdateTodoRequest(action = {}) {
  const todo = yield call(updateTodo, action.payload);
  yield put(receiveTodos([todo]));
  yield put(updateTodoSuccess(todo));
}

function* watchUpdateTodoRequest() {
  yield takeLatest(updateTodoRequest().type, handleUpdateTodoRequest);
}

export default function*() {
  while (
    yield all([
      call(watchCreateTodoRequest),
      call(watchLoadTodosRequest),
      call(watchDeleteTodoRequest),
      call(watchUpdateTodoRequest),
    ])
  );
}
