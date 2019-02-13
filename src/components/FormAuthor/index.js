import React, { Component } from "react";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import FormImage from "../FormImage";
import FormPublicLinks from "../FormPublicLinks";

class FormAuthor extends Component {
  render() {
    const {
      sample,
      publicLinkDefault,
      handleImage,
      handleProfileInputs,
      handleDefaultInputChange,
      handleAddLinkItem,
      handleRemoveLinkItem,
      handleLinkChange
    } = this.props;
    const {
      name,
      birthday,
      yearsOfExperience,
      publicLinks
    } = sample.author.profile;
    return (
      <fieldset className="form__author">
        <legend className="form__section-title">Personal data</legend>

        <FormImage
          handleImage={handleImage}
          image={sample.author.profile.image}
        />

        <FormInput
          labelContent="Name"
          styles="form__input"
          inputType="text"
          inputName="name"
          inputValue={name}
          example="Ex: Jane Doe"
          handleInputChange={handleProfileInputs}
        />

        <FormInput
          labelContent="Date of birth"
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
          example="Ex: 5"
          handleInputChange={handleProfileInputs}
        />

        <FormPublicLinks
          publicLinks={publicLinks}
          publicLinkDefault={publicLinkDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddLinkItem={handleAddLinkItem}
          handleRemoveLinkItem={handleRemoveLinkItem}
          handleLinkChange={handleLinkChange}
        />
      </fieldset>
    );
  }
}

FormAuthor.propTypes = {
  sample: PropTypes.object.isRequired,
  publicLinkDefault: PropTypes.string.isRequired,
  handleImage: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired
};

export default FormAuthor;
