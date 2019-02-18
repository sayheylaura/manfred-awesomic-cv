import React, { Component } from "react";
import PropTypes from "prop-types";
import FormMiscEducationItem from "../FormMiscEducationItem";
//import FormInput from "../FormInput";
import Button from "../Button";
import FormTextarea from "../FormTextarea";

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
      <fieldset className="form__fieldset">
        <legend className="form__section-title">Miscellany</legend>

        <p className="form__section-description">
          Miscellaneous education such as courses, certifications, awards,
          projects, etc.
        </p>

        {miscEducation && !!miscEducation.length && miscEducation.map((item, index) => {
          return (
            <FormMiscEducationItem
              key={index}
              ind={index}
              item={item}
              miscEducation={miscEducation}
              handleRemoveMiscItem={handleRemoveMiscItem}
              handleMiscInputChange={handleMiscInputChange}
            />
          );
        })}

        <div className="form__container">
          {/* <FormInput
            labelContent="More items"
            styles="form__input"
            inputType="text"
            inputName="miscEdDefault"
            inputValue={miscEdDefault}
            example="Ex: Scrum master certification"
            handleInputChange={handleDefaultInputChange}
          /> */}

          <FormTextarea
            labelContent="More items"
            textAreaStyles="textarea"
            textAreaLabelStyles="label"
            textName="miscEdDefault"
            textValue={miscEdDefault}
            example="Ex: Scrum master certification"
            handleTextChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddMiscItem}
          >
            Add
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
