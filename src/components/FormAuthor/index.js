import React, { Component } from 'react';
import FormInput from '../FormInput';
import PropTypes from 'prop-types';

class FormAuthor extends Component {
  render() {
    const { sample, handleProfileInputs } = this.props;
    const { name } = sample.author.profile[0];
    return (
      <fieldset className="form__author">
        <legend>Personal data</legend>

        <FormInput
          labelContent="Name"
          styles="form__input"
          inputType="text"
          inputName="name"
          inputValue={name}
          example="Laura"
          handleInputChange={handleProfileInputs}
        />
      </fieldset>
    );
  }
}

FormAuthor.propTypes = {
  handleProfileInputs: PropTypes.func.isRequired
}

export default FormAuthor;
