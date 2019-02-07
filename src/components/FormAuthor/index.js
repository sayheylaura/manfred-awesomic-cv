import React, { Component, Fragment } from 'react';
import FormInput from '../FormInput';
import PropTypes from 'prop-types';

class FormAuthor extends Component {
  render() {
    const { sample, handleProfileInputs, handlePublicLinks } = this.props;
    const { name, birthday, publicLinks } = sample.author.profile[0];
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

        {publicLinks.map((item, index) => {
          return (
              <FormInput
                key={index}
                ind={index}
                labelContent="Links"
                styles="form__input"
                inputType="url"
                inputName={`publicLink${index}`}
                inputValue={item}
                handleInputChange={handlePublicLinks}
              />
          )
        })}
      </fieldset>
    );
  }
}

FormAuthor.propTypes = {
  handleProfileInputs: PropTypes.func.isRequired,
  handlePublicLinks: PropTypes.func.isRequired
}

export default FormAuthor;
