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
      achievementDefault,
      handleDefaultInputChange,
      handleAddEducationItem,
      handleRemoveEducationItem,
      handleEducationChange,
      handleAddAchievementItem
    } = this.props;
    return (
      <fieldset className="form__education">
        <legend className="form__section-title">Education</legend>

        <p className="form__section-description">Degree or kind of schooling</p>

        {education.map((item, index) => {
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
            example="MIT"
            handleInputChange={handleDefaultInputChange}
          />

          <FormInput
            labelContent="Study"
            styles="form__input"
            inputType="text"
            inputName="studyDefault"
            inputValue={studyDefault}
            example="Computer Science"
            handleInputChange={handleDefaultInputChange}
          />

          <FormInput
            labelContent="From"
            styles="form__input"
            inputType="text"
            inputName="fromEdDefault"
            inputValue={fromEdDefault}
            example="2008"
            handleInputChange={handleDefaultInputChange}
          />

          <FormInput
            labelContent="Until"
            styles="form__input"
            inputType="text"
            inputName="untilEdDefault"
            inputValue={untilEdDefault}
            example="2012"
            handleInputChange={handleDefaultInputChange}
          />

          <div>
            <p>Achievements</p>
            <p>List of awards or achievements during your studies</p>

            <FormInput
              labelContent="Item"
              styles="form__input"
              inputType="text"
              inputName="achievement"
              inputValue={achievementDefault}
              example="Best end of degree thesis"
              handleInputChange={handleDefaultInputChange}
            />

            <Button
              buttonType="button"
              styles="add-btn"
              handleButtonClick={handleAddAchievementItem}
            >
              Add item
          </Button>
          </div>

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
  achievementDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddEducationItem: PropTypes.func.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired
};

export default FormEducation;
