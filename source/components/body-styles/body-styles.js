import React from "react";

const BodyStyles = ({ children }) => (
  <React.Fragment>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        line-height: 1;
        font: inherit;
        vertical-align: baseline;
      }
    `}</style>
  </React.Fragment>
);

export default BodyStyles;
