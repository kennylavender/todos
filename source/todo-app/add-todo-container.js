import React, { useState, useContext } from "react";
import { ReactReduxContext } from "react-redux";
import { createTodoRequest } from "./todo-app-reducer";
import TextField from "../components/text-field";

const ENTER_KEY = 13;

export const AddTodo = () => {
  const {
    store: { dispatch },
  } = useContext(ReactReduxContext);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoKeyDown = event => {
    if (event.keyCode !== ENTER_KEY) return;
    if (newTodo.length < 1) return;

    dispatch(createTodoRequest({ title: newTodo }));
    setNewTodo("");
  };

  const handleNewTodoChagne = event => {
    setNewTodo(event.target.value);
  };

  return (
    <TextField
      type="text"
      value={newTodo}
      onChange={handleNewTodoChagne}
      onKeyDown={handleNewTodoKeyDown}
      placeholder="Enter something you need to do!"
    />
  );
};
