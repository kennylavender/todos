import React from "react";

export const Input = props => (
  <React.Fragment>
    <input {...props} />
    <style jsx>{`
      input {
        box-sizing: border-box;
        font-size: 1.2rem;
        line-height: 1.5rem;
        padding: 0.2rem;
        width: 100%;
        margin: 0;
      }
    `}</style>
  </React.Fragment>
);
