import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import FormInput from '../FormInput';
import Button from '../Button';
import FormTextarea from "../FormTextarea";

class FormProfessionalGoalsItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.handleGoalInputChange = this.handleGoalInputChange.bind(this);
  }

  removeItem() {
    const { handleRemoveGoal, ind } = this.props;
    handleRemoveGoal(ind);
  }

  handleGoalInputChange(event) {
    const { value } = event.currentTarget;
    const { handleGoalsInput, ind } = this.props;
    handleGoalsInput(value, ind);
  }

  render() {
    const { ind, item, professionalGoals } = this.props;
    return (
      <div className="form__container">
        {/* <FormInput
          labelContent={`Goal ${ind + 1} of ${professionalGoals.length}`}
          styles="form__input"
          inputType="text"
          inputName="professionalGoal"
          inputValue={item}
          example="Ex: Build my own company"
          handleInputChange={this.handleGoalInputChange}
        /> */}

        <FormTextarea
          labelContent={`Goal ${ind + 1} of ${professionalGoals.length}`}
          textAreaStyles="textarea"
          textAreaLabelStyles="label"
          textName="professionalGoal"
          textValue={item}
          example="Ex: Build my own company"
          handleTextChange={this.handleGoalInputChange}
        />

        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.removeItem}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
}

FormProfessionalGoalsItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  professionalGoals: PropTypes.array.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired
}

export default FormProfessionalGoalsItem;
