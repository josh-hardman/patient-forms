import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Text = ({
  id,
  label,
  placeHolder,
  col = 4,
  valid,
  value,
  index,
  onChange
}) => (
  <div className={`col-sm-${col}`}>
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      className={classnames("form-control", { "is-invalid": !valid })}
      id={id}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      data-index={index}
      data-label={label}
    />
  </div>
);

Text.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
  col: PropTypes.number,
  valid: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Text;
