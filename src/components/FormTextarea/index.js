import React from "react";
import PropTypes from "prop-types";

const FormTextarea = ({ labelContent, textName, textValue, handleTextChange, textAreaStyles, textAreaLabelStyles }) => (
  <label className={textAreaLabelStyles} htmlFor={textName}>
    {labelContent}
    <textarea
      className={textAreaStyles}
      name={textName}
      value={textValue}
      onChange={handleTextChange}
    />
  </label>

);

FormTextarea.propTypes = {
  labelContent: PropTypes.string.isRequired,
  textName: PropTypes.string.isRequired,
  textValue: PropTypes.string.isRequired,
  handleTextChange: PropTypes.func.isRequired
};

export default FormTextarea;
