import React, { Component, Fragment } from 'react';
import FormInput from '../FormInput';
import Button from '../Button';
import PropTypes from 'prop-types';
import FormProfessionalGoalsItem from '../FormProfessionalGoalsItem';

class FormProfessionalGoals extends Component {
  render() {
    const { professionalGoals, goalDefault, handleAddGoal, handleRemoveGoal, handleGoalsInput, handleGoalChange } = this.props;
    return (
      <Fragment>
      {professionalGoals.map((item, index) => {
        return (
        <FormProfessionalGoalsItem
          key={index}
          goalDefault={item}
          ind={index}
          handleRemoveGoal={handleRemoveGoal}
          handleGoalsInput={handleGoalsInput}
        />
      )})}
        <div>
        <FormInput
          labelContent="more goals:"
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
      </Fragment>
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
