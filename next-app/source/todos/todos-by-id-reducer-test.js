import test from "tape";
import {
  todosReducer,
  todosReducerSlice,
  receiveTodos,
  defaultState,
  getTodoById,
} from "./todos-by-id-reducer";

const toById = xs =>
  xs.reduce((a, c) => {
    a[c.id] = c;
    return a;
  }, {});

const rootState = state => ({
  [todosReducerSlice]: state,
});

test("todosReducer", t => {
  t.test("default state", t => {
    t.deepEqual(todosReducer(), defaultState);
    t.end();
  });

  t.test("receiveTodos", t => {
    const todos = [
      { id: "a", title: "Go fishing" },
      { id: "b", title: "Drink a brew" },
    ];

    const action = receiveTodos(todos);

    t.deepEqual(
      todosReducer(todosReducer(), action),
      toById(todos),
      "items should be added"
    );
    t.end();
  });

  t.test("getTodoById", t => {
    const todos = [
      { id: "a", title: "Go fishing" },
      { id: "b", title: "Drink a brew" },
    ];

    const todosById = toById(todos);

    const state = rootState(todosReducer(undefined, receiveTodos(todos)));

    t.deepEqual(
      getTodoById("b")(state),
      todosById.b,
      "should return the correct todo item, given valid state and id"
    );
    t.end();
  });
});
