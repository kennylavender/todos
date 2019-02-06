import { getTodoById } from "../todos/todos-reducer";
import {
  getTodoIds,
  deleteTodoRequest,
  updateTodoRequest,
} from "./todo-app-reducer";
import { TodoList } from "./todo-list-component";
import { TodoListItem } from "./todo-list-item-component";
import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export const TodoListContainer = () => {
  const {
    store: { dispatch, getState },
  } = useContext(ReactReduxContext);
  const state = getState();
  const todoIds = getTodoIds(state);
  const todos = todoIds.map(getTodoById).map(getTodo => getTodo(state));

  return (
    <TodoList>
      {todos.map(todo =>
        TodoListItem({
          key: todo.id,
          todo,
          onDeleteClick: () => dispatch(deleteTodoRequest(todo.id)),
          onMarkCompleteClick: () =>
            dispatch(updateTodoRequest({ ...todo, isComplete: true })),
          onMarkIncompleteClick: () =>
            dispatch(updateTodoRequest({ ...todo, isComplete: false })),
        })
      )}
    </TodoList>
  );
};

export default TodoListContainer;
