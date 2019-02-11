import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";
import FormLanguages from "../FormLanguages";
import FormEducation from "../FormEducation";
import FormMiscEducation from "../FormMiscEducation";

class Form extends Component {
  render() {
    const {
      sample,
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault,
      achievementDefault,
      languageDefault,
      proficiencyDefault,
      miscEdDefault,
      questionDefault,
      answerDefault,
      handleDefaultInputChange,
      handleAddEducationItem,
      handleRemoveEducationItem,
      handleEducationChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange,
      handleAddQuestion,
      handleRemoveQuestion,
      handleQuestionInputChange
    } = this.props;

    const { education, languages, miscEducation, questionnaire } = sample;

    return (
      <section className="form__wrapper">
        <h2 className="form__title">Form</h2>
        <p className="form__guidelines">
          Fill in the fields with your personal and contact details that you
          want to be displayed in your CV. Note that the fields marked with an
          asterisk (*) are compulsory. You can add or remove the fields.
        </p>

        <FormLanguages
          languages={languages}
          languageDefault={languageDefault}
          proficiencyDefault={proficiencyDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddLanguageItem={handleAddLanguageItem}
          handleRemoveLanguageItem={handleRemoveLanguageItem}
          handleLanguageChange={handleLanguageChange}
        />

        <FormEducation
          education={education}
          institutionDefault={institutionDefault}
          studyDefault={studyDefault}
          fromEdDefault={fromEdDefault}
          untilEdDefault={untilEdDefault}
          achievementDefault={achievementDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddEducationItem={handleAddEducationItem}
          handleRemoveEducationItem={handleRemoveEducationItem}
          handleEducationChange={handleEducationChange}
        />

        <FormMiscEducation
          miscEducation={miscEducation}
          miscEdDefault={miscEdDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddMiscItem={handleAddMiscItem}
          handleRemoveMiscItem={handleRemoveMiscItem}
          handleMiscInputChange={handleMiscInputChange}
        />

        <FormQuestionnaire
          questionnaire={questionnaire}
          questionDefault={questionDefault}
          answerDefault={answerDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddQuestion={handleAddQuestion}
          handleRemoveQuestion={handleRemoveQuestion}
          handleQuestionInputChange={handleQuestionInputChange}
        />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  institutionDefault: PropTypes.string.isRequired,
  studyDefault: PropTypes.string.isRequired,
  fromEdDefault: PropTypes.string.isRequired,
  untilEdDefault: PropTypes.string.isRequired,
  achievementDefault: PropTypes.string.isRequired,
  languageDefault: PropTypes.string.isRequired,
  proficiencyDefault: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  questionDefault: PropTypes.string.isRequired,
  answerDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddEducationItem: PropTypes.func.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  handleQuestionInputChange: PropTypes.func.isRequired
};

export default Form;
