import React from "react";

const classes = obj =>
  Object.keys(obj).reduce((a, c) => {
    return obj[c] === true ? a + " " + c : a;
  }, "");

const TodoListItem = props => (
  <React.Fragment>
    <li {...props} />
    <style jsx>{`
      .li {
        display: flex;
        align-items: center;
      }
    `}</style>
  </React.Fragment>
);

export default TodoListItem;
