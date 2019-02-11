import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";
import FormLanguages from "../FormLanguages";
import FormMiscEducation from "../FormMiscEducation";

class Form extends Component {
  render() {
    const {
      question,
      answer,
      handleAddItem,
      handleRemoveItem,
      handleQuestionnaireInput,
      sample,
      language,
      proficiency,
      miscEdDefault,
      handleDefaultInputChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange
    } = this.props;

    const { languages, miscEducation, questionnaire } = sample;

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
          language={language}
          proficiency={proficiency}
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
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleQuestionnaireInput: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  proficiency: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default Form;
