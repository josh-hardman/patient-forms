import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Text = ({
  id,
  label,
  placeHolder,
  col = 4,
  invalid,
  value,
  onChange
}) => (
  <div className={`col-sm-${col}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      className={classnames("form-control", { "is-invalid": invalid })}
      id={id}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  </div>
);

Text.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  col: PropTypes.number,
  invalid: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

export default Text;
