import React, { Component } from "react";
import PropTypes from "prop-types";

class FormSelect extends Component {
  render() {
    const {
      selectName,
      labelContent,
      selectValue,
      styles,
      handleSelectChange,
      selectOptions
    } = this.props;
    return (
      <label className="label" htmlFor={selectName}>
        {labelContent}
        <select
          id={selectName}
          name={selectName}
          value={selectValue}
          onChange={handleSelectChange}
          className={styles}
        >
          {selectOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

FormSelect.propTypes = {
  selectName: PropTypes.string.isRequired,
  labelContent: PropTypes.string.isRequired,
  selectValue: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  selectOptions: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired
};

export default FormSelect;
