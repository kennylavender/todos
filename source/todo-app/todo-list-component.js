import React from "react";

export const TodoList = ({ children }) => (
  <React.Fragment>
    <ul className="todo-list">{children}</ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </React.Fragment>
);
