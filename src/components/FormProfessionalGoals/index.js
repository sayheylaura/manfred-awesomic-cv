import React, { Component } from "react";
import FormInput from "../FormInput";
import Button from "../Button";
import PropTypes from "prop-types";
import FormProfessionalGoalsItem from "../FormProfessionalGoalsItem";

class FormProfessionalGoals extends Component {
  render() {
    const {
      professionalGoals,
      goalDefault,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange
    } = this.props;
    return (
      <fieldset className= "form__professionalGoals">
        <legend className="form__section-title">Professional Goals <span className="required_field">*</span></legend>
        <p className="form__section-description">
        List the goals that explain to your future company what kind of professional you'd like to be, what you'd like to be i.e., What motivates you
        </p>
        {professionalGoals && !!professionalGoals.length && professionalGoals.map((item, index) => {
          return (
            <FormProfessionalGoalsItem
              key={index}
              goalDefault={item}
              ind={index}
              handleRemoveGoal={handleRemoveGoal}
              handleGoalsInput={handleGoalsInput}
            />
          );
        })}
        <div>
          <FormInput
            labelContent="More goals"
            styles="form__input"
            inputType="text"
            inputName="professional goals"
            inputValue={goalDefault}
            example="Brand Manager"
            handleInputChange={handleGoalChange}
          />
          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddGoal}
          >
            Add
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormProfessionalGoals.propTypes = {
  goalDefault: PropTypes.string.isRequired,
  professionalGoals: PropTypes.array.isRequired,
  handleAddGoal: PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleGoalChange: PropTypes.func.isRequired
};

export default FormProfessionalGoals;
