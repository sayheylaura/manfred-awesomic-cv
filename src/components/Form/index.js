import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";
import FormMiscEducation from "../FormMiscEducation";
import FormIntro from '../FormIntro';
import FormProfessionalGoals from '../FormProfessionalGoals';

class Form extends Component {
  render() {
    const {
      question,
      answer,
      handleAddItem,
      handleRemoveItem,
      handleQuestionnaireInput,
      sample,
      miscEdDefault,
      handleDefaultInputChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange,
      handleIntroChange,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange,
      goalDefault
    } = this.props;

    const { miscEducation, questionnaire } = sample;
    const {intro, professionalGoals} = sample.author;
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
          handleAddItem={handleAddItem}
          handleDefaultInputChange={handleDefaultInputChange}
          question={question}
          answer={answer}
          handleRemoveItem={handleRemoveItem}
          handleQuestionnaireInput={handleQuestionnaireInput}
        />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleQuestionnaireInput: PropTypes.func.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default Form;
