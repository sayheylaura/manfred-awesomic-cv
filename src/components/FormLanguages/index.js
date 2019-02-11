import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLanguageItem from "../FormLanguageItem";
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

class FormLanguages extends Component {
  render() {
    const {
      languages,
      language,
      proficiency,
      handleDefaultInputChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange,
    } = this.props;

    return (
      <fieldset className="form__languages">
        <legend className="form__section-title">Languages</legend>

        <p className="form__section-description">
          List of languages and your proficiency level
        </p>

        {languages.map((item, index) => {
          return (
            <FormLanguageItem
              key={index}
              ind={index}
              item={item}
              handleRemoveLanguageItem={handleRemoveLanguageItem}
              handleLanguageChange={handleLanguageChange}
            />
          );
        })}

        <div>
          <FormInput
            labelContent="Language"
            styles="form__input"
            inputType="text"
            inputName="language"
            inputValue={language}
            example="English"
            handleInputChange={handleDefaultInputChange}
          />

          <FormSelect
            labelContent="Proficiency"
            styles="form__select"
            selectName="proficiency"
            selectValue={proficiency}
            selectOptions={proficiencyLevels}
            handleSelectChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddLanguageItem}
          >
            Add item
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormLanguages.propTypes = {
  languages: PropTypes.array.isRequired,
  language: PropTypes.string.isRequired,
  proficiency: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired
};

export default FormLanguages;
