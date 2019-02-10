import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ isChecked, onClick }) => (
  <React.Fragment>
    <input type="checkbox" checked={isChecked} onClick={onClick} />
    <style jsx>{``}</style>
  </React.Fragment>
);

Checkbox.propTypes = {
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

export default Checkbox;
