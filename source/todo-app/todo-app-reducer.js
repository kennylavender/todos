export const todoAppSlice = "todoAppSlice";

export const loadTodosRequest = () => ({
  type: "todo-app::load_todos_request",
});

export const loadTodosSuccess = (todos = []) => ({
  type: "todo-app::load_todos_success",
  payload: todos.map(todo => todo.id),
});

export const createTodoRequest = ({ title = "", isComplete = false } = {}) => ({
  type: "todo-app::create_todo_request",
  payload: { title, isComplete },
});

export const createTodoSuccess = todo => ({
  type: "todo-app::create_todo_success",
  payload: todo,
});

export const deleteTodoRequest = id => ({
  type: "todo-app::delete_todo_request",
  payload: id,
});

export const deleteTodoSuccess = id => ({
  type: "todo-app::delete_todo_success",
  payload: id,
});

export const updateTodoRequest = todo => ({
  type: "todo-app::update_todo_request",
  payload: todo,
});

export const updateTodoSuccess = todo => ({
  type: "todo-app::update_todo_success",
  payload: todo,
});

export const getTodoIds = state => state[todoAppSlice].todos;

export const defaultState = {
  isFetching: false,
  todos: [],
};

export const todoAppReducer = (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case updateTodoRequest().type:
    case deleteTodoRequest().type:
    case loadTodosRequest().type:
    case createTodoRequest().type:
      return { ...state, isFetching: true };
    case updateTodoSuccess().type:
    case deleteTodoSuccess().type:
    case createTodoSuccess().type:
      return { ...state, isFetching: false };
    case loadTodosSuccess().type:
      return { ...state, isFetching: false, todos: payload };
    default:
      return state;
  }
};
