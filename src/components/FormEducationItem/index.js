import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormAchievements from "../FormAchievements";

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
    const { institution, study, from, until, achievements } = this.props.item;
    return (
      <div>
        <FormInput
          labelContent="Institution"
          styles="form__input"
          inputType="text"
          inputName="institution"
          inputValue={institution}
          example="MIT"
          handleInputChange={this.handleInputChange}
        />

        <FormInput
          labelContent="Study"
          styles="form__input"
          inputType="text"
          inputName="study"
          inputValue={study}
          example="Computer Science"
          handleInputChange={this.handleInputChange}
        />

        <FormInput
          labelContent="From"
          styles="form__input"
          inputType="text"
          inputName="from"
          inputValue={from}
          example="2008"
          handleInputChange={this.handleInputChange}
        />

        <FormInput
          labelContent="Until"
          styles="form__input"
          inputType="text"
          inputName="until"
          inputValue={until}
          example="2012"
          handleInputChange={this.handleInputChange}
        />

        {achievements && achievements.length && (
          <FormAchievements achievements={achievements} />
        )}

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

FormEducationItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired
};

export default FormEducationItem;
