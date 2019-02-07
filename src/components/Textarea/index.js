import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ labelContent, textName, textValue, handleTextChange }) => (
  <label className="label" htmlFor={textName}>
    {labelContent}
    <textarea
      name={textName}
      value={textValue}
      rows="8"
      cols="50"
      onChange={handleTextChange}
    />
  </label>

);

Textarea.propTypes = {
  labelContent: PropTypes.string.isRequired,
  textName: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default Textarea;
