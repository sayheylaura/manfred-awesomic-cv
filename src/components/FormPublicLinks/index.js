import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import FormPublicLinksItem from "../FormPublicLinksItem";

class FormPublicLinks extends Component {
  render() {
    const {
      publicLinks,
      handleAddLinkItem,
      handleRemoveLinkItem,
      handleLinkChange
    } = this.props;
    return (
      <div>
        <p>Public links</p>

        <p>
          List the links to code repositories, social media, professional
          networks or any other worthy public profile
        </p>

        {publicLinks.map((item, index) => {
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

        <Button
          buttonType="button"
          styles="add-btn"
          handleButtonClick={handleAddLinkItem}
        >
          Add item
        </Button>
      </div>
    );
  }
}

FormPublicLinks.propTypes = {
  publicLinks: PropTypes.array.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired
};

export default FormPublicLinks;
