import React from "react";

export const TodoAppComponent = ({ children }) => (
  <div className="todo-app">
    {children}
    <style jsx>{`
      .todo-app {
        max-width: 40rem;
        margin: 1.2rem auto;
        padding: 0;
        border: 1px solid #ccc;
      }
    `}</style>
  </div>
);
