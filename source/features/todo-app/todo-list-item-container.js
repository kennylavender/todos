import { getTodoById } from "../todos/todos-reducer";
import {
  deleteTodoRequest,
  updateTodoRequest,
} from "./todo-app-reducer";
import { TodoListItem } from "./todo-list-item-component";
import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export const TodoListItemContainer = ({ todoId }) => {
  const {
    store: { dispatch, getState },
  } = useContext(ReactReduxContext);
  const state = getState();
  const todo = getTodoById(todoId)(state);

  return (
    <TodoListItem
      todo={todo}
      onDeleteClick={() => dispatch(deleteTodoRequest(todo.id))}
      onMarkCompleteClick={() =>
        dispatch(updateTodoRequest({ ...todo, isComplete: true }))}
      onMarkIncompleteClick={() =>
        dispatch(updateTodoRequest({ ...todo, isComplete: false }))}
    />
  );
};

export default TodoListItemContainer;
