import React from "react";
import PropTypes from "prop-types";
import Checkbox from '../components/checkbox'

const classes = obj =>
  Object.keys(obj).reduce((a, c) => {
    return obj[c] === true ? a + " " + c : a;
  }, "");

export const TodoListItem = ({
  todo,
  onDeleteClick,
  onMarkCompleteClick,
  onMarkIncompleteClick,
}) => (
  <li
    className={classes({
      "todo-list-item": true,
      "is-complete": todo.isComplete,
    })}
  >
    <Checkbox isChecked={todo.isComplete} onClick={todo.isComplete ? onMarkIncompleteClick: onMarkCompleteClick} />
    <span className="title-text">{todo.title}</span>
    <span className="delete-button" onClick={onDeleteClick}>
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
      .delete-button {
        margin: 0.2rem;
        cursor: pointer;
        display: inline-block;
      }
      .button {
        cursor: pointer;
        margin: 0.2rem;
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
