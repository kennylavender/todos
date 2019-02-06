import React from "react";
import PropTypes from "prop-types";

const classes = obj =>
  Object.keys(obj).reduce((a, c) => {
    return obj[c] === true ? a + " " + c : a;
  }, "");

export const TodoListItem = ({ todo, onDeleteClick }) => (
  <li
    className={classes({
      "todo-list-item": true,
      "is-complete": todo.isComplete,
    })}
  >
    <span className="title-text">{todo.title}</span>
    <span className="delete" onClick={onDeleteClick}>
      delete
    </span>
    <style jsx>{`
      .todo-list-item {
        display: flex;
        align-items: center;
      }
      .todo-list-item.is-complete {
        text-decoration: line-through;
      }
      .delete {
        margin: 0.2rem;
        cursor: pointer;
        display: inline-block;
      }
    `}</style>
  </li>
);

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool,
  }),
};