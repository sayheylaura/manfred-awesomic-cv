import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';

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
    const { value, name } = event.currentTarget;
    const { handleGoalsInput, ind } = this.props;
    handleGoalsInput(value, name, ind);
  }

  render() {
    const { goalDefault } = this.props;
    return (
      <div >
        <FormInput
          labelContent="Professional goal"
          styles="form__input"
          inputType="text"
          inputName="Professional Goal"
          inputValue={goalDefault}
          example="Professional Goal"
          handleInputChange={this.handleGoalInputChange}
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
  goalDefault: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired
}


export default FormProfessionalGoalsItem;
