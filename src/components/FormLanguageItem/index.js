import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import FormSelect from "../FormSelect";
import Button from "../Button";

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
    const { ind, item, languages, proficiencyLevels } = this.props;
    const { language, proficiency } = item;
    return (
      <div className="form__container">
        <p className="form__container-title">{`Language ${ind + 1} of ${languages.length}`}</p>

        <FormInput
          labelContent="Language"
          styles="form__input"
          inputType="text"
          inputName="language"
          inputValue={language}
          example="Ex: English"
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

        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.handleRemoveBtn}
          >
            Remove
        </Button>
        </div>
      </div>
    );
  }
}

FormLanguageItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  languages: PropTypes.array.isRequired,
  proficiencyLevels: PropTypes.array.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired
};

export default FormLanguageItem;
