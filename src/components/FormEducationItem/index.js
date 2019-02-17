import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";

class FormEducationItem extends Component {
  constructor(props) {
    super(props);

    this.handleRemoveBtn = this.handleRemoveBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleRemoveBtn() {
    const { handleRemoveEducationItem, ind } = this.props;
    handleRemoveEducationItem(ind);
  }

  handleInputChange(event) {
    const { value, name } = event.currentTarget;
    const { handleEducationChange, ind } = this.props;
    handleEducationChange(value, name, ind);
  }

  render() {
    const {
      ind,
      item,
      education
    } = this.props;

    const {
      institution,
      study,
      from,
      until
    } = item;

    return (
      <div className="form__container">
        <p className="form__container-title">{`Institution ${ind + 1} of ${education.length}`}</p>

        <FormInput
          labelContent="Institution"
          styles="form__input"
          inputType="text"
          inputName="institution"
          inputValue={institution}
          example="Ex: MIT"
          handleInputChange={this.handleInputChange}
        />

        <FormInput
          labelContent="Study"
          styles="form__input"
          inputType="text"
          inputName="study"
          inputValue={study}
          example="Ex: Computer Science"
          handleInputChange={this.handleInputChange}
        />
        <div className="form__date-container">
          <FormInput
            labelContent="From"
            styles="form__input"
            inputType="text"
            inputName="from"
            inputValue={from}
            example="Ex: 2008"
            handleInputChange={this.handleInputChange}
          />

          <FormInput
            labelContent="Until"
            styles="form__input"
            inputType="text"
            inputName="until"
            inputValue={until}
            example="Ex: 2012"
            handleInputChange={this.handleInputChange}
          />
        </div>
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

FormEducationItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  education: PropTypes.array.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired
};

export default FormEducationItem;
