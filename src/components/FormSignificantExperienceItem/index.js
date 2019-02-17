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
    const { value } = event.currentTarget;
    const { handleSignificantExperienceInput, ind } = this.props;
    handleSignificantExperienceInput(value, ind);
  }

  render() {
    const { ind, item, significantExperience } = this.props;
    return (
      <div className="form__container">
        <FormInput
          labelContent={`Experience ${ind + 1} of ${significantExperience.length}`}
          styles="form__input"
          inputType="text"
          inputName="significantExperience"
          inputValue={item}
          example="Ex: Managing a team of 20 people at Acme, Co."
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

FormSignificantExperienceItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  significantExperience: PropTypes.array.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired
}

export default FormSignificantExperienceItem;
