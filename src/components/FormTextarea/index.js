import React from "react";
import PropTypes from "prop-types";

const FormTextarea = ({ labelContent, textName, textValue, example, handleTextChange }) => (
  <label className="textarea__label" htmlFor={textName}>
    {labelContent}
    <textarea
      className="textarea"
      name={textName}
      value={textValue}
      placeholder={example}
      onChange={handleTextChange}
    />
  </label>
);

FormTextarea.propTypes = {
  labelContent: PropTypes.string.isRequired,
  textName: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  example: PropTypes.string,
  handleTextChange: PropTypes.func.isRequired
};

export default FormTextarea;
