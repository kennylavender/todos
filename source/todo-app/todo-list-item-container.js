import { useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { deleteTodoRequest, updateTodoRequest } from "./todo-app-reducer";
import { getTodoById } from "../todos/todos-reducer";
import useTextEdit, * as textEditActions from "../hooks/use-text-edit";
import Checkbox from "../components/checkbox";
import Text from "../components/text";
import Button from "../components/button";
import TodoListItem from "./todo-list-item-component";
import TextField from "../components/text-field";

const ENTER_KEY = 13;

const TodoListItemContainer = ({ todoId }) => {
  const {
    store: { dispatch, getState },
  } = useContext(ReactReduxContext);
  const state = getState();
  const todo = getTodoById(todoId)(state);

  const handleCheckboxChange = event => {
    event.preventDefault();
    dispatch(updateTodoRequest({ ...todo, isComplete: event.target.checked }));
  };

  const [todoTitleEditState, todoTitleEditDispatch] = useTextEdit(todo.title);

  return (
    <TodoListItem>
      <Checkbox checked={todo.isComplete} onChange={handleCheckboxChange} />

      {todoTitleEditState.isEditing ? (
        <TextField
          value={todoTitleEditState.value}
          onChange={event => {
            todoTitleEditDispatch(
              textEditActions.updateValue(event.target.value)
            );
          }}
          autoFocus
          onKeyUp={event => {
            if (event.keyCode !== ENTER_KEY) return;

            todoTitleEditDispatch(textEditActions.save());
            dispatch(
              updateTodoRequest({ ...todo, title: todoTitleEditState.value })
            );
          }}
          onBlur={() => {
            todoTitleEditDispatch(textEditActions.save());
            dispatch(
              updateTodoRequest({ ...todo, title: todoTitleEditState.value })
            );
          }}
        />
      ) : (
        <Text
          style={{ flexGrow: 1 }}
          onClick={() => {
            todoTitleEditDispatch(textEditActions.edit());
          }}
        >
          {todo.title}
        </Text>
      )}

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
