import { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { deleteTodoRequest, updateTodoRequest } from "./todo-app-reducer";
import { getTodoById } from "../todos/todos-reducer";
import Checkbox from "../components/checkbox";
import Text from "../components/text";
import Button from "../components/button";
import TodoListItem from "./todo-list-item-component";

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
    <TodoListItem>
      <Checkbox checked={todo.isComplete} onChange={handleCheckboxChange} />
      <Text style={{ flexGrow: 1 }}>{todo.title}</Text>
      <Button
        className="delete-button"
        onClick={() => dispatch(deleteTodoRequest(todo.id))}
      >
        Delete
      </Button>
    </TodoListItem>
  );
};

export default TodoListItemContainer;
