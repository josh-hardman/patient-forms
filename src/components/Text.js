import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Text = ({ id, label, placeHolder, col = 4, invalid }) => (
  <div className={`col-sm-${col}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      className={classnames("form-control", { "is-invalid": invalid })}
      id={id}
      placeholder={placeHolder}
    />
  </div>
);

Text.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  col: PropTypes.number,
  invalid: PropTypes.bool
};

export default Text;
