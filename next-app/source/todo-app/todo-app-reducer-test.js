import test from "tape";
import {
  todoAppReducer,
  todoAppSlice,
  defaultState,
  createTodoRequest,
  createTodoSuccess,
  loadTodosRequest,
  loadTodosSuccess,
  deleteTodoRequest,
  deleteTodoSuccess,
  updateTodoRequest,
  updateTodoSuccess,
  getTodoIds,
} from "./todo-app-reducer";

const wrapInRootState = state => ({
  [todoAppSlice]: state,
});

const toById = xs =>
  xs.reduce((a, c) => {
    a[c.id] = c;
    return c;
  }, {});

test("todoAppReducer", t => {
  t.test("default state", t => {
    t.deepEqual(
      todoAppReducer(),
      defaultState,
      "given no arguments, should return the default state"
    );

    t.end();
  });

  t.test("createTodoRequest()", t => {
    const todo = { title: "Foo" };
    const prevState = todoAppReducer();
    const state = todoAppReducer(prevState, createTodoRequest(todo));

    t.deepEqual(
      state.isFetching,
      true,
      "isFetching should be true after receiving a valid createTodoRequest action"
    );

    t.end();
  });

  t.test("deleteTodoRequest()", t => {
    const todoId = "foo";
    const prevState = todoAppReducer();
    const state = todoAppReducer(prevState, deleteTodoRequest(todoId));

    t.deepEqual(
      state.isFetching,
      true,
      "isFetching should be true after receiving a valid deleteTodoRequest action"
    );

    t.end();
  });

  t.test("deleteTodoSuccess()", t => {
    const todoId = "foo";
    const prevState = todoAppReducer(
      todoAppReducer(),
      deleteTodoRequest(todoId)
    );
    const state = todoAppReducer(prevState, deleteTodoSuccess());

    t.deepEqual(
      state.isFetching,
      false,
      "isFetching should be false after receiving a valid deleteTodoSuccess action"
    );

    t.end();
  });

  t.test("updateTodoRequest()", t => {
    const todoId = "foo";
    const prevState = todoAppReducer();
    const state = todoAppReducer(prevState, updateTodoRequest(todoId));

    t.deepEqual(
      state.isFetching,
      true,
      "isFetching should be true after receiving a valid updateTodoRequest action"
    );

    t.end();
  });

  t.test("updateTodoSuccess()", t => {
    const todo = { id: "foo", title: "Foo" };
    const prevState = todoAppReducer(todoAppReducer(), updateTodoRequest(todo));
    const state = todoAppReducer(prevState, updateTodoSuccess());

    t.deepEqual(
      state.isFetching,
      false,
      "isFetching should be false after receiving a valid updateTodoSuccess action"
    );

    t.end();
  });

  t.test("createTodoSuccess()", t => {
    const todo = { title: "Foo" };
    const prevState = todoAppReducer(todoAppReducer(), createTodoSuccess(todo));
    const state = todoAppReducer(prevState, createTodoSuccess(todo));

    t.deepEqual(
      state.isFetching,
      false,
      "isFetching should be false after receiving a valid createTodoSuccess action"
    );

    t.end();
  });

  t.test("loadTodosRequest()", t => {
    const prevState = todoAppReducer();
    const state = todoAppReducer(prevState, loadTodosRequest());

    t.deepEqual(
      state.isFetching,
      true,
      "isFetching should be true after receiving a valid loadTodosRequest action"
    );

    t.end();
  });

  t.test("loadTodosSuccess()", t => {
    const todos = [
      { id: "foo", title: "Foo" },
      { id: "bar", title: "Bar" },
      { id: "baz", title: "Baz" },
    ];
    const prevState = todoAppReducer(todoAppReducer(), loadTodosRequest());
    const state = todoAppReducer(prevState, loadTodosSuccess(todos));

    t.deepEqual(
      state.isFetching,
      false,
      "isFetching should be true after receiving a valid loadTodosSuccess action"
    );

    t.deepEqual(
      state.todos,
      todos.map(x => x.id),
      "todos should contain the id's of the todos after a receiving a valid loadTodosSuccess action"
    );

    t.end();
  });

  t.test("getTodoIds()", t => {
    const todos = [
      { id: "foo", title: "Foo" },
      { id: "bar", title: "Bar" },
      { id: "baz", title: "Baz" },
    ];
    const state = todoAppReducer(todoAppReducer(), loadTodosSuccess(todos));
    const rootState = wrapInRootState(state);

    t.deepEqual(
      getTodoIds(rootState),
      todos.map(todo => todo.id),
      "should return the todo ids given valid state"
    );

    t.end();
  });
});
