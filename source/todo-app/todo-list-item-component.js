import React from "react";

const classes = obj =>
  Object.keys(obj).reduce((a, c) => {
    return obj[c] === true ? a + " " + c : a;
  }, "");

const TodoListItem = props => (
  <React.Fragment>
    <li {...props} />
    <style jsx>{`
      li {
        display: flex;
        align-items: center;
        padding: 0.5rem;
      }
      li:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
    `}</style>
  </React.Fragment>
);

export default TodoListItem;
