import React from "react";

const TodoList = ({ children }) => (
  <React.Fragment>
    <ul className="todo-list">{children}</ul>
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        border: 1px solid #ccc;
      }
    `}</style>
  </React.Fragment>
);

export default TodoList;
