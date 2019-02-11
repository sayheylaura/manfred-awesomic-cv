import React, { Component } from "react";
import PropTypes from "prop-types";
import FormMiscEducationItem from "../FormMiscEducationItem";
import FormInput from "../FormInput";
import Button from "../Button";

class FormMiscEducation extends Component {
  render() {
    const {
      miscEducation,
      miscEdDefault,
      handleDefaultInputChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange
    } = this.props;
    return (
      <fieldset className="form__misc-education">
        <legend className="form__section-title">Miscellany</legend>

        <p className="form__section-description">
          Miscellaneous education such as courses, certifications, awards,
          projects, etc.
        </p>

        {miscEducation.map((item, index) => {
          return (
            <FormMiscEducationItem
              key={index}
              ind={index}
              item={item}
              handleRemoveMiscItem={handleRemoveMiscItem}
              handleMiscInputChange={handleMiscInputChange}
            />
          );
        })}

        <div>
          <FormInput
            labelContent="Item"
            styles="form__input"
            inputType="text"
            inputName="miscEdDefault"
            inputValue={miscEdDefault}
            example="Ex: Scrum master certification"
            handleInputChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddMiscItem}
          >
            Add item
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormMiscEducation.propTypes = {
  miscEducation: PropTypes.array.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default FormMiscEducation;
