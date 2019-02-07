import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ name, value, handleTextChange }) => (
  <textarea
    name={name}
    value={value}
    rows="8"
    cols="50"
    onChange={handleTextChange}
  />
);

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default Textarea;
