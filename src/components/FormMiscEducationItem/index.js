import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormMiscEducationItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveMiscItem, ind } = this.props;
    handleRemoveMiscItem(ind);
  }

  handleInputChange(event) {
    const { value } = event.currentTarget;
    const { handleMiscInputChange, ind } = this.props;
    handleMiscInputChange(value, ind);
  }

  render() {
    const { item } = this.props;
    return (
      <div>
        <FormInput
          labelContent="Item"
          styles="form__input"
          inputType="text"
          inputName="miscEd"
          inputValue={item}
          example="Ex: Scrum master certification"
          handleInputChange={this.handleInputChange}
        />
        <Button
          buttonType="button"
          styles="remove-btn"
          handleButtonClick={this.handleRemoveBtn}
        >
          Remove
        </Button>
      </div>
    );
  }
}

FormMiscEducationItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default FormMiscEducationItem;
