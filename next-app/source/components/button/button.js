import React from "react";

const Button = props => (
  <React.Fragment>
    <span {...props} />
    <style jsx>{`
      span {
        display: inline-block;
        margin: 0;
        padding: 0.4rem 0.8rem;
        font-size: 0.9rem;
        line-height: 1rem;
        font-family: Roboto, sans-serif;
        cursor: pointer;
        background-color: #000;
        border: 2px solid #000;
        color: #eee;
        box-sizing: border-box;
        transition: all 0.2s ease-out;
      }
      span:hover {
        background-color: #444;
        border-color: #444;
      }
    `}</style>
  </React.Fragment>
);

export default Button;
