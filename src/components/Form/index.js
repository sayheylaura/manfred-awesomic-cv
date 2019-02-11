import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";
import FormLanguages from "../FormLanguages";
import FormEducation from "../FormEducation";
import FormMiscEducation from "../FormMiscEducation";
import FormIntro from '../FormIntro';
import FormProfessionalGoals from '../FormProfessionalGoals';
import FormTransportableSkills from "../FormTransportableSkills";
import FormSignificantExperience from "../FormSignificantExperience";




class Form extends Component {
  render() {
    const {
      sample,
      goalDefault,
      transportableSkillDefault,
      significantExperienceDefault,
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault,
      languageDefault,
      proficiencyDefault,
      miscEdDefault,
      questionDefault,
      answerDefault,
      handleDefaultInputChange,
      handleIntroChange,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange,
      handleAddTransportableSkill,
      handleTransportableSkillChange,
      handleRemoveTransportableSkill,
      handleTransportableSkillsInput,
      handleAddSignificantExperience,
      handlesignificantExperienceChange,
      handleRemoveSignificantExperience,
      handleSignificantExperienceInput,
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
      handleQuestionInputChange,
    } = this.props;

    const { education, languages, miscEducation, questionnaire } = sample;
    const {intro, professionalGoals, transportableSkills, significantExperience} = sample.author;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Form</h2>
        <p className="form__guidelines">
          Fill in the fields with your personal and contact details that you
          want to be displayed in your CV. Note that the fields marked with an
          asterisk (*) are compulsory. You can add or remove the fields.
        </p>

        <FormIntro intro={intro}
          handleIntroChange={handleIntroChange}
        />
        <FormProfessionalGoals
          professionalGoals={professionalGoals}
          handleAddGoal={handleAddGoal}
          handleRemoveGoal={handleRemoveGoal}
          handleGoalsInput={handleGoalsInput}
          handleGoalChange={handleGoalChange}
          goalDefault={goalDefault}
        />
        <FormTransportableSkills
        transportableSkillDefault={transportableSkillDefault}
        transportableSkills={transportableSkills}
        handleAddTransportableSkill={handleAddTransportableSkill}
        handleTransportableSkillChange={handleTransportableSkillChange}
        handleRemoveTransportableSkill={handleRemoveTransportableSkill}
        handleTransportableSkillsInput={handleTransportableSkillsInput}
        />

        <FormSignificantExperience
        significantExperienceDefault={significantExperienceDefault}
        significantExperience={significantExperience}
        handleAddSignificantExperience={handleAddSignificantExperience}
        handlesignificantExperienceChange={handlesignificantExperienceChange}
        handleRemoveSignificantExperience={
          handleRemoveSignificantExperience
        }
        handleSignificantExperienceInput={handleSignificantExperienceInput}

        />

        <FormEducation
          education={education}
          institutionDefault={institutionDefault}
          studyDefault={studyDefault}
          fromEdDefault={fromEdDefault}
          untilEdDefault={untilEdDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddEducationItem={handleAddEducationItem}
          handleRemoveEducationItem={handleRemoveEducationItem}
          handleEducationChange={handleEducationChange}
        />

        <FormLanguages
          languages={languages}
          languageDefault={languageDefault}
          proficiencyDefault={proficiencyDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddLanguageItem={handleAddLanguageItem}
          handleRemoveLanguageItem={handleRemoveLanguageItem}
          handleLanguageChange={handleLanguageChange}
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
  goalDefault: PropTypes.string.isRequired,
  transportableSkillDefault: PropTypes.string.isRequired,
  significantExperienceDefault: PropTypes.string.isRequired,
  institutionDefault: PropTypes.string.isRequired,
  studyDefault: PropTypes.string.isRequired,
  fromEdDefault: PropTypes.string.isRequired,
  untilEdDefault: PropTypes.string.isRequired,
  languageDefault: PropTypes.string.isRequired,
  proficiencyDefault: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  questionDefault: PropTypes.string.isRequired,
  answerDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleAddTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillChange: PropTypes.func.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handlesignificantExperienceChange: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired,
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
