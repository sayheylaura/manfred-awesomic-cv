import React, { Component } from "react";
import FormInput from "../FormInput";
import PropTypes from "prop-types";
import FormImage from "../FormImage";
import FormPublicLinks from "../FormPublicLinks";
import FormProfileRoles from "../FormProfileRoles";

class FormAuthor extends Component {
  render() {
    const {
      sample,
      publicLinkDefault,
      rolesDefault,
      handleAddImage,
      handleRemoveImage,
      handleProfileInputs,
      handleDefaultInputChange,
      handleAddLinkItem,
      handleAddRoleItem,
      handleRoleChange,
      handleRemoveRoleItem,
      handleRemoveLinkItem,
      handleLinkChange
    } = this.props;

    const {
      name,
      birthday,
      yearsOfExperience,
      publicLinks,
      roles
    } = sample.author.profile;

    return (
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Personal data</legend>

        <FormImage
          image={sample.author.profile.image}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
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

        <FormProfileRoles
          roles={roles}
          handleDefaultInputChange={handleDefaultInputChange}
          rolesDefault={rolesDefault}
          handleAddRoleItem={handleAddRoleItem}
          handleRemoveRoleItem={handleRemoveRoleItem}
          handleRoleChange={handleRoleChange}
        />
      </fieldset>
    );
  }
}

FormAuthor.propTypes = {
  sample: PropTypes.object.isRequired,
  publicLinkDefault: PropTypes.string.isRequired,
  rolesDefault: PropTypes.string.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired,
  handleAddRoleItem: PropTypes.func.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired
};

export default FormAuthor;
