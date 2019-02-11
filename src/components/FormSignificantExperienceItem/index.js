import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';


class FormSignificantExperienceItem extends Component {
  constructor(props) {
    super(props);
    this.removeItem = this.removeItem.bind(this);
    this.handleGoalInputChange = this.handleGoalInputChange.bind(this);
  }

  removeItem() {
    const { handleRemoveSignificantExperience, ind } = this.props;
    handleRemoveSignificantExperience(ind);
  }

  handleGoalInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleSignificantExperienceInput, ind } = this.props;
    handleSignificantExperienceInput(value, name, ind);
  }

  render() {
    const { significantExperienceDefault } = this.props;
    return (
      <div>
        <FormInput
            labelContent="significant experience"
            styles="form__input"
            inputType="text"
            inputName="significant experience"
            inputValue={significantExperienceDefault}
            example="significant experience"
            handleInputChange={this.handleGoalInputChange}
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

FormSignificantExperienceItem.propTypes = {
  significantExperienceDefault: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput:PropTypes.func.isRequired
}

export default FormSignificantExperienceItem;