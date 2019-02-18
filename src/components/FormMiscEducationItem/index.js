import React, { Component } from "react";
import PropTypes from "prop-types";
//import FormInput from "../FormInput";
import Button from "../Button";
import FormTextarea from "../FormTextarea";

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
    const { ind, item, miscEducation } = this.props;
    return (
      <div className="form__container">
        {/* <FormInput
          labelContent={`Item ${ind + 1} of ${miscEducation.length}`}
          styles="form__input"
          inputType="text"
          inputName="miscEd"
          inputValue={item}
          example="Ex: Scrum master certification"
          handleInputChange={this.handleInputChange}
        /> */}

        <FormTextarea
          labelContent={`Item ${ind + 1} of ${miscEducation.length}`}
          textAreaStyles="textarea"
          textAreaLabelStyles="label"
          textName="miscEd"
          textValue={item}
          example="Ex: Scrum master certification"
          handleTextChange={this.handleInputChange}
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

FormMiscEducationItem.propTypes = {
  ind: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired,
  miscEducation: PropTypes.array.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default FormMiscEducationItem;
