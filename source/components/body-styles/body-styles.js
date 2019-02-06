import React from "react";

export const BodyStyles = ({ children }) => (
  <React.Fragment>
    {children}
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}</style>
  </React.Fragment>
);
