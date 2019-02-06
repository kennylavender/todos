import React from "react";

export const TodoAppComponent = ({ children }) => (
  <div className="todo-app">
    {children}
    <style jsx>{`
      .todo-app {
        max-width: 50rem;
        margin: 1.2rem auto;
        padding: 0.5rem;
        border: 1px solid #333;
        border-radius: 5px;
      }
    `}</style>
  </div>
);
