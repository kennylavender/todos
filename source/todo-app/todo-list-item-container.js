import { getTodoById } from "../todos/todos-reducer";
import { deleteTodoRequest, updateTodoRequest } from "./todo-app-reducer";
import { TodoListItem } from "./todo-list-item-component";
import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

export const TodoListItemContainer = ({ todoId }) => {
  const {
    store: { dispatch, getState },
  } = useContext(ReactReduxContext);
  const state = getState();
  const todo = getTodoById(todoId)(state);

  const handleCheckboxChange = event => {
    event.preventDefault();
    dispatch(updateTodoRequest({ ...todo, isComplete: event.target.checked }));
  };

  return (
    <TodoListItem
      key={todo.id}
      todo={todo}
      onDeleteClick={() => dispatch(deleteTodoRequest(todo.id))}
      onCheckboxChange={handleCheckboxChange}
    />
  );
};

export default TodoListItemContainer;
