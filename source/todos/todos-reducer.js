export const todosReducerSlice = "todosById";

export const receiveTodos = (todos = []) => ({
  type: "todos::receive_todos",
  payload: todos.reduce((a, c) => {
    a[c.id] = c;
    return a;
  }, {}),
});

export const getTodoById = id => state => state[todosReducerSlice][id];

export const defaultState = {};

export const todosReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case receiveTodos().type:
      return { ...state, ...payload };
    default:
      return state;
  }
};
