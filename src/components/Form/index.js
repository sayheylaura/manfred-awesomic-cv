import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";

class Form extends Component {
  render() {
    const { sample, question, answer, handleAddItem, handleQuestionChange, handleRemoveItem, handleQuestionnaireInput } = this.props;
    const { questionnaire } = sample;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Form</h2>
        <p className="form__guidelines">
        Fill in the fields with your personal and contact details that you want to be displayed in your CV. Note that the fields marked with an asterisk (*) are compulsory. You can add or remove the fields.
        </p>

        <FormQuestionnaire
          questionnaire={questionnaire}
          handleAddItem={handleAddItem} handleQuestionChange={handleQuestionChange}
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
  handleQuestionChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleQuestionnaireInput: PropTypes.func.isRequired
};

export default Form;
