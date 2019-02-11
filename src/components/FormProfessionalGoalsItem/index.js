import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';

class FormProfessionalGoalsItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  removeItem() {
    const { handleRemoveGoal, ind } = this.props;
    handleRemoveGoal(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleGoalsInput, ind } = this.props;
    handleGoalsInput(value, name, ind);
  }

  render() {
    const { goal } = this.props;
    return (
      <div >
              <FormInput
                labelContent="List the goals that explain to your future company what kind of professional you'd like to be, what you'd like to be i.e., What motivates you"
                styles="form__input"
                inputType="text"
                inputName="Professional Goal"
                inputValue={goal}
                example="Professional Goal"
                handleDefaultInputChange={this.handleInputChange}
              />

              <Button
                buttonType="button"
                styles="remove-btn"
                handleButtonClick={this.removeItem}
              >
                Remove
              </Button>
            </div>
    );
  }
}

FormProfessionalGoalsItem.propTypes = {
  goal: PropTypes.string.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleGoalsInput:PropTypes.func.isRequired
}

export default FormProfessionalGoalsItem;
