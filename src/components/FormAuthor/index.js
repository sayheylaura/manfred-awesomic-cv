import React, { Component } from "react";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import FormImage from "../FormImage";

class FormAuthor extends Component {
  render() {
    const { sample, handleProfileInputs, updateAvatar } = this.props;
    const { name, birthday, yearsOfExperience } = sample.author.profile;
    return (
      <fieldset className="form__author">
        <legend>Personal data</legend>
        <FormImage updateAvatar={updateAvatar} image={sample.author.profile.image} />

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

        <FormInput
          labelContent="Years of experience"
          styles="form__input"
          inputType="number"
          inputName="yearsOfExperience"
          inputValue={yearsOfExperience}
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
