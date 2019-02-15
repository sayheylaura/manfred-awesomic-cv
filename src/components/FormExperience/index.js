import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormExperienceItem from "../FormExperienceItem";

class FormExperience extends Component {

  render() {
    const {
      experience,
      companyDefault,
      handleDefaultInputChange,
      handleAddExperienceItem,
      handleRemoveExperienceItem,
      handleExperienceChange,
    } = this.props;
    return (
      <fieldset className="form__education">
        <legend className="form__section-title">Experience</legend>

        <p className="form__section-description">List of working experience</p>

        {experience && !!experience.length && experience.map((item, index) => {
          return (
            <FormExperienceItem
              key={index}
              ind={index}
              item={item}
              handleRemoveExperienceItem={handleRemoveExperienceItem}
              handleExperienceChange={handleExperienceChange}
            />
          );
        })}

        <div>
          <FormInput
            labelContent="Company name"
            styles="form__input"
            inputType="text"
            inputName="companyDefault"
            inputValue={companyDefault}
            example="Ex: Google"
            handleInputChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddExperienceItem}
          >
            Add
        </Button>
        </div>
      </fieldset>
    );
  }
}

FormExperience.propTypes = {
  experience: PropTypes.array.isRequired,
  companyDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddExperienceItem: PropTypes.func.isRequired,
  handleRemoveExperienceItem: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
}

export default FormExperience;
