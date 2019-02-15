import { getTodoIds } from "./todo-app-reducer";
import TodoList from "./todo-list-component";
import TodoListItemContainer from "./todo-list-item-container";
import { useContext } from "react";
import { ReactReduxContext } from "react-redux";

const TodoListContainer = () => {
  const {
    store: { getState },
  } = useContext(ReactReduxContext);
  const state = getState();
  const todoIds = getTodoIds(state);

  return (
    <TodoList>
      {todoIds.map(todoId => <TodoListItemContainer key={todoId} todoId={todoId} />)}
    </TodoList>
  );
};

export default TodoListContainer;
