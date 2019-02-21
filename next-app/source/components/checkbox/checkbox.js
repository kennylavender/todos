import React from "react";
import PropTypes from "prop-types";

const Checkbox = props => (
  <React.Fragment>
    <input type="checkbox" {...props} />
    <style jsx>{``}</style>
  </React.Fragment>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
};

export default Checkbox;
