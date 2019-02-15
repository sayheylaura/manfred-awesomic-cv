import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormPublicLinksItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveLinkItem, ind } = this.props;
    handleRemoveLinkItem(ind);
  }

  handleChange(event) {
    const { value } = event.currentTarget;
    const { handleLinkChange, ind } = this.props;
    handleLinkChange(value, ind);
  }

  render() {
    const { ind, item, publicLinks } = this.props;
    return (
      <div>
        <FormInput
          labelContent={`Link ${ind + 1} of ${publicLinks.length}`}
          styles="form__input"
          inputType="string"
          inputName="publicLinks"
          inputValue={item}
          example="Ex: https://www.twitter.com/janedoe"
          handleInputChange={this.handleChange}
        />
        <div className="remove-btn__container">
          <Button
            buttonType="button"
            styles="remove-btn"
            handleButtonClick={this.handleRemoveBtn}
          >
            Remove
        </Button>
        </div>
      </div>
    );
  }
}

FormPublicLinksItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  publicLinks: PropTypes.array.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired
};

export default FormPublicLinksItem;
