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
      handleDefaultInputChange,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput
    } = this.props;

    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Professional Goals <span className="required_field">*</span></legend>

        <p className="form__section-description">
          List the goals that explain to your future company what kind of professional you'd like to be, what you'd like to be i.e., What motivates you
        </p>

        {professionalGoals && !!professionalGoals.length && professionalGoals.map((item, index) => {
          return (
            <FormProfessionalGoalsItem
              key={index}
              ind={index}
              item={item}
              professionalGoals={professionalGoals}
              handleRemoveGoal={handleRemoveGoal}
              handleGoalsInput={handleGoalsInput}
            />
          );
        })}

        <div className="form__container">
          <FormInput
            labelContent="More goals"
            styles="form__input"
            inputType="text"
            inputName="goalDefault"
            inputValue={goalDefault}
            example="Ex: Build my own company"
            handleInputChange={handleDefaultInputChange}
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
  professionalGoals: PropTypes.array.isRequired,
  goalDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddGoal: PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
};

export default FormProfessionalGoals;
