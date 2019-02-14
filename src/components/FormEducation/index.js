import React, { Component } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import Button from "../Button";
import FormEducationItem from "../FormEducationItem";

class FormEducation extends Component {
  render() {
    const {
      education,
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault,
      handleDefaultInputChange,
      handleAddEducationItem,
      handleRemoveEducationItem,
      handleEducationChange,
    } = this.props;
    return (
      <fieldset className="form__education">
        <legend className="form__section-title">Education</legend>

        <p className="form__section-description">Degree or kind of schooling</p>

        {education && !!education.length && education.map((item, index) => {
          return (
            <FormEducationItem
              key={index}
              ind={index}
              item={item}
              handleRemoveEducationItem={handleRemoveEducationItem}
              handleEducationChange={handleEducationChange}
            />
          );
        })}

        <div>
          <FormInput
            labelContent="Institution"
            styles="form__input"
            inputType="text"
            inputName="institutionDefault"
            inputValue={institutionDefault}
            example="Ex: MIT"
            handleInputChange={handleDefaultInputChange}
          />

          <FormInput
            labelContent="Study"
            styles="form__input"
            inputType="text"
            inputName="studyDefault"
            inputValue={studyDefault}
            example="Ex: Computer Science"
            handleInputChange={handleDefaultInputChange}
          />

          <FormInput
            labelContent="From"
            styles="form__input"
            inputType="text"
            inputName="fromEdDefault"
            inputValue={fromEdDefault}
            example="Ex: 2008"
            handleInputChange={handleDefaultInputChange}
          />

          <FormInput
            labelContent="Until"
            styles="form__input"
            inputType="text"
            inputName="untilEdDefault"
            inputValue={untilEdDefault}
            example="Ex: 2012"
            handleInputChange={handleDefaultInputChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddEducationItem}
          >
            Add item
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormEducation.propTypes = {
  education: PropTypes.array.isRequired,
  institutionDefault: PropTypes.string.isRequired,
  studyDefault: PropTypes.string.isRequired,
  fromEdDefault: PropTypes.string.isRequired,
  untilEdDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddEducationItem: PropTypes.func.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired
};

export default FormEducation;
