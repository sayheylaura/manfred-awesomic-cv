import React from "react";
import PropTypes from "prop-types";

const FormTextarea = ({ labelContent, textName, textValue, example, handleTextChange, textAreaStyles, textAreaLabelStyles }) => (
  <label className={textAreaLabelStyles} htmlFor={textName}>
    <span className="label__title">{labelContent}</span>
    <textarea
      className={textAreaStyles}
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
  handleTextChange: PropTypes.func.isRequired,
  textAreaStyles: PropTypes.string.isRequired,
  textAreaLabelStyles: PropTypes.string.isRequired
};

export default FormTextarea;
