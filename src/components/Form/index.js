import React, { Component } from "react";
import PropTypes from "prop-types";
import FormAuthor from "../FormAuthor";
import FormQuestionnaire from "../FormQuestionnaire";
import FormLanguages from "../FormLanguages";
import FormEducation from "../FormEducation";
import FormExperience from '../FormExperience';
import FormMiscEducation from "../FormMiscEducation";
import FormIntro from '../FormIntro';
import FormProfessionalGoals from '../FormProfessionalGoals';
import FormSignificantRelationShips from '../FormSignificantRelationShips';
import FormTransportableSkills from "../FormTransportableSkills";
import FormSignificantExperience from "../FormSignificantExperience";

class Form extends Component {
  render() {
    const {
      sample,
      publicLinkDefault,
      rolesDefault,
      goalDefault,
      transportableSkillDefault,
      significantExperienceDefault,
      significantRelationshipsDefault,
      companyDefault,
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault,
      languageDefault,
      proficiencyDefault,
      miscEdDefault,
      questionDefault,
      answerDefault,
      handleAddImage,
      handleRemoveImage,
      handleProfileInputs,
      handleDefaultInputChange,
      handleAddLinkItem,
      handleRemoveLinkItem,
      handleLinkChange,
      handleAddRoleItem,
      handleRemoveRoleItem,
      handleRoleChange,
      handleIntroChange,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleAddTransportableSkill,
      handleRemoveTransportableSkill,
      handleTransportableSkillChange,
      handleTransportableSkillsInput,
      handleAddSignificantExperience,
      handleRemoveSignificantExperience,
      handlesignificantExperienceChange,
      handleSignificantExperienceInput,
      handleDefaultInputChangeSignificantRelationships,
      handleAddSignificantRelationships,
      handleRemoveSignificantRelationships,
      handleSignificantRelationshipsInput,
      handleAddExperienceItem,
      handleRemoveExperienceItem,
      handleExperienceChange,
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

    const {
      author,
      experience,
      education,
      languages,
      miscEducation,
      questionnaire
    } = sample;

    const {
      profile,
      intro,
      professionalGoals,
      transportableSkills,
      significantExperience,
      significantRelationships
    } = author;

    return (
      <section className="form__wrapper">
        <h2 className="form__title">Form</h2>

        <p className="form__guidelines">
          Fill in the fields with the personal and contact details that you want
          to be displayed in your CV. Note that the fields marked with an
          asterisk (*) are compulsory. You can add or remove some of the fields.
        </p>

        <FormAuthor
          profile={profile}
          publicLinkDefault={publicLinkDefault}
          rolesDefault={rolesDefault}
          handleAddImage={handleAddImage}
          handleRemoveImage={handleRemoveImage}
          handleProfileInputs={handleProfileInputs}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddLinkItem={handleAddLinkItem}
          handleRemoveLinkItem={handleRemoveLinkItem}
          handleLinkChange={handleLinkChange}
          handleAddRoleItem={handleAddRoleItem}
          handleRemoveRoleItem={handleRemoveRoleItem}
          handleRoleChange={handleRoleChange}
        />

        <FormIntro
          intro={intro}
          handleIntroChange={handleIntroChange}
        />

        <FormProfessionalGoals
          professionalGoals={professionalGoals}
          goalDefault={goalDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddGoal={handleAddGoal}
          handleRemoveGoal={handleRemoveGoal}
          handleGoalsInput={handleGoalsInput}
        />

        <FormSignificantRelationShips
          significantRelationships={significantRelationships}
          significantRelationshipsDefault={significantRelationshipsDefault}
          handleDefaultInputChangeSignificantRelationships={handleDefaultInputChangeSignificantRelationships}
          handleAddSignificantRelationships={handleAddSignificantRelationships}
          handleRemoveSignificantRelationships={handleRemoveSignificantRelationships}
          handleSignificantRelationshipsInput={handleSignificantRelationshipsInput}
        />

        <FormTransportableSkills
          transportableSkills={transportableSkills}
          transportableSkillDefault={transportableSkillDefault}
          handleAddTransportableSkill={handleAddTransportableSkill}
          handleRemoveTransportableSkill={handleRemoveTransportableSkill}
          handleTransportableSkillChange={handleTransportableSkillChange}
          handleTransportableSkillsInput={handleTransportableSkillsInput}
        />

        <FormSignificantExperience
          significantExperience={significantExperience}
          significantExperienceDefault={significantExperienceDefault}
          handleAddSignificantExperience={handleAddSignificantExperience}
          handleRemoveSignificantExperience={handleRemoveSignificantExperience}
          handlesignificantExperienceChange={handlesignificantExperienceChange}
          handleSignificantExperienceInput={handleSignificantExperienceInput}
        />

        <FormExperience
          experience={experience}
          companyDefault={companyDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddExperienceItem={handleAddExperienceItem}
          handleRemoveExperienceItem={handleRemoveExperienceItem}
          handleExperienceChange={handleExperienceChange}
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
  publicLinkDefault: PropTypes.string.isRequired,
  rolesDefault: PropTypes.string.isRequired,
  goalDefault: PropTypes.string.isRequired,
  transportableSkillDefault: PropTypes.string.isRequired,
  significantExperienceDefault: PropTypes.string.isRequired,
  significantRelationshipsDefault: PropTypes.object.isRequired,
  companyDefault: PropTypes.string.isRequired,
  institutionDefault: PropTypes.string.isRequired,
  studyDefault: PropTypes.string.isRequired,
  fromEdDefault: PropTypes.string.isRequired,
  untilEdDefault: PropTypes.string.isRequired,
  languageDefault: PropTypes.string.isRequired,
  proficiencyDefault: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  questionDefault: PropTypes.string.isRequired,
  answerDefault: PropTypes.string.isRequired,
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired,
  handleAddRoleItem: PropTypes.func.isRequired,
  handleRemoveRoleItem: PropTypes.func.isRequired,
  handleRoleChange: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleAddGoal: PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleAddTransportableSkill: PropTypes.func.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillChange: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handlesignificantExperienceChange: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired,
  handleAddSignificantRelationships: PropTypes.func.isRequired,
  handleRemoveSignificantRelationships: PropTypes.func.isRequired,
  handleSignificantRelationshipsInput: PropTypes.func.isRequired,
  handleDefaultInputChangeSignificantRelationships: PropTypes.func.isRequired,
  handleAddExperienceItem: PropTypes.func.isRequired,
  handleRemoveExperienceItem: PropTypes.func.isRequired,
  handleExperienceChange: PropTypes.func.isRequired,
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
