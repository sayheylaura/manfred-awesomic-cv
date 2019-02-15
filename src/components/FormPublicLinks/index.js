import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormPublicLinksItem from "../FormPublicLinksItem";

class FormPublicLinks extends Component {
  render() {
    const {
      publicLinks,
      publicLinkDefault,
      handleDefaultInputChange,
      handleAddLinkItem,
      handleRemoveLinkItem,
      handleLinkChange
    } = this.props;
    return (
      <div className="public-links__container">
        <h3 className="form__section-title">Public links</h3>

        <p className="form__section-description">
          List the links to code repositories, social media, professional
          networks or any other worthy public profile
        </p>

        {publicLinks && !!publicLinks.length && publicLinks.map((item, index) => {
          return (
            <FormPublicLinksItem
              key={index}
              ind={index}
              item={item}
              publicLinks={publicLinks}
              handleRemoveLinkItem={handleRemoveLinkItem}
              handleLinkChange={handleLinkChange}
            />
          );
        })}

        <FormInput
          labelContent="More links"
          styles="form__input"
          inputType="string"
          inputName="publicLinkDefault"
          inputValue={publicLinkDefault}
          example="Ex: https://www.twitter.com/janedoe"
          handleInputChange={handleDefaultInputChange}
        />

        <Button
          buttonType="button"
          styles="add-btn"
          handleButtonClick={handleAddLinkItem}
        >
          Add
        </Button>
      </div>
    );
  }
}

FormPublicLinks.propTypes = {
  publicLinks: PropTypes.array.isRequired,
  publicLinkDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired
};

export default FormPublicLinks;
