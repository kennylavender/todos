import React from "react";
import { TodoApp } from "../todo-app/todo-app";
import { CSSReset } from "../../components/css-reset";
export const HomePage = props => (
  <CSSReset>
    <TodoApp />
  </CSSReset>
);
