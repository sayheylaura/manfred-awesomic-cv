import React, { Component } from "react";
import FormInput from "../FormInput";
import PropTypes from "prop-types";

class FormAuthor extends Component {
  render() {
    const { sample, handleProfileInputs } = this.props;
    const { name, birthday } = sample.author.profile;
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

        <FormInput
          labelContent="Age"
          styles="form__input"
          inputType="date"
          inputName="birthday"
          inputValue={birthday}
          handleInputChange={handleProfileInputs}
        />
      </fieldset>
    );
  }
}

FormAuthor.propTypes = {
  handleProfileInputs: PropTypes.func.isRequired
};

export default FormAuthor;
