import React, { useContext, useEffect, useState } from "react";
import { ReactReduxContext } from "react-redux";
import TodoList from "./todo-list-container";
import { AddTodo } from "./add-todo-container";
import { loadTodosRequest } from "./todo-app-reducer";
import { TodoAppComponent } from "./todo-app-component";

export const TodoApp = () => {
  let foo = "foo";

  const {
    store: { dispatch, getState },
  } = useContext(ReactReduxContext);

  useEffect(() => {
    dispatch(loadTodosRequest());
  }, [foo]);

  return (
    <TodoAppComponent>
      <AddTodo key={"AddTodo"} />
      <TodoList key={"TodoList"} />
    </TodoAppComponent>
  );
};
