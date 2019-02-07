import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  render() {
    const {
      styles,
      inputType,
      inputName,
      content,
      example,
      handleInputChange
    } = this.props;
    return (
      <label className="label" htmlFor={inputName}>
        <input
          className={styles}
          type={inputType}
          name={inputName}
          id={inputName}
          value={content}
          placeholder={example}
          onChange={handleInputChange}
        />
      </label>
    );
  }
}

Input.propTypes = {
  styles: PropTypes.string.isRequired,
  inputType: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
};

export default Input;
