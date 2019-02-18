import React, { Component } from 'react';
import PropTypes from "prop-types";
//import FormInput from "../FormInput";
import Button from "../Button";
import FormSignificantExperienceItem from '../FormSignificantExperienceItem';
import FormTextarea from "../FormTextarea";

class FormSignificantExperience extends Component {
  render() {
    const {
      significantExperience,
      significantExperienceDefault,
      handleDefaultInputChange,
      handleAddSignificantExperience,
      handleRemoveSignificantExperience,
      handleSignificantExperienceInput
    } = this.props;

    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Significant Experience<span className="required_field">*</span></legend>

        <p className="form__section-description">
          List the professional milestones that provided you with experience and knowledge for your future position
        </p>

        {significantExperience && !!significantExperience.length && significantExperience.map((item, index) => {
          return (
            <FormSignificantExperienceItem
              key={index}
              ind={index}
              item={item}
              significantExperience={significantExperience}
              handleRemoveSignificantExperience={handleRemoveSignificantExperience}
              handleSignificantExperienceInput={handleSignificantExperienceInput}
            />
          );
        })}

        <div className="form__container">
          {/* <FormInput
            labelContent="More experiences"
            styles="form__input"
            inputType="text"
            inputName="significantExperienceDefault"
            inputValue={significantExperienceDefault}
            example="Ex: Managing a team of 20 people at Acme, Co."
            handleInputChange={handleDefaultInputChange}
          /> */}

          <FormTextarea
            labelContent="More experiences"
            textAreaStyles="textarea"
            textAreaLabelStyles="label"
            textName="significantExperienceDefault"
            textValue={significantExperienceDefault}
            example="Ex: Managing a team of 20 people at Acme, Co."
            handleTextChange={handleDefaultInputChange}
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
  significantExperience: PropTypes.array.isRequired,
  significantExperienceDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired
};

export default FormSignificantExperience;
