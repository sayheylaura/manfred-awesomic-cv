import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import Button from "../Button";

const proficiencyLevels = [
  "elementary",
  "limited working",
  "professional working",
  "full professional",
  "native or bilingual"
];

class FormLanguageItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveLanguageItem, ind } = this.props;
    handleRemoveLanguageItem(ind);
  }

  handleChange(event) {
    const { value, name } = event.currentTarget;
    const { handleLanguageChange, ind } = this.props;
    handleLanguageChange(value, name, ind);
  }

  render() {
    const { language, proficiency } = this.props.item;
    return (
      <div>
        <FormInput
          labelContent="Language"
          styles="form__input"
          inputType="text"
          inputName="language"
          inputValue={language}
          example="English"
          handleInputChange={this.handleChange}
        />

        <FormSelect
          labelContent="Proficiency"
          styles="form__select"
          selectName="proficiency"
          selectValue={proficiency}
          selectOptions={proficiencyLevels}
          handleSelectChange={this.handleChange}
        />

        <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.handleRemoveBtn}
        >
          Remove
        </Button>
      </div>
    );
  }
}

FormLanguageItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired
};

export default FormLanguageItem;
