import React, { Component } from 'react';
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormSignificantExperienceItem from '../FormSignificantExperienceItem';

class FormSignificantExperience extends Component {
  render() {
    const {
      significantExperienceDefault,
      significantExperience,
      handleAddSignificantExperience,
      handlesignificantExperienceChange,
      handleRemoveSignificantExperience,
      handleSignificantExperienceInput
    } = this.props;
    return (
      <fieldset className="form__sig-experience">
        <legend className="form__section-title">Significant Experience</legend>
        <p className="form__section-description">
        List the professional milestones that provided you with experience and knowledge for your future position
        </p>
        {significantExperience.map((item, index)=>{
          return (
            <FormSignificantExperienceItem
              key={index}
              significantExperienceDefault={item}
              ind={index}
              handleRemoveSignificantExperience={handleRemoveSignificantExperience}
              handleSignificantExperienceInput={handleSignificantExperienceInput}
            />
          );
        })}
        <div>
        <FormInput
            labelContent="more experience:"
            styles="form__input"
            inputType="text"
            inputName="significant experience"
            inputValue={significantExperienceDefault}
            example="Managing a team of 20 people at Acme, Co."
            handleInputChange={handlesignificantExperienceChange}
          />
          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddSignificantExperience}
          >
            Add
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormSignificantExperience.propTypes = {
  significantExperienceDefault: PropTypes.string.isRequired,
  significantExperience: PropTypes.array.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired,
  handlesignificantExperienceChange: PropTypes.func.isRequired
};

export default FormSignificantExperience;
