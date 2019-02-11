import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import Button from '../Button';
import FormQuestionnaireItem from '../FormQuestionnaireItem';

class FormQuestionnaire extends Component {

  render() {
    const { questionnaire, question, answer, handleAddItem, handleQuestionChange, handleRemoveItem, handleQuestionnaireInput } = this.props;
    return (
      <fieldset className="form__questionnaire">
        <legend className="form__section-title">Questionnaire</legend>

        <p className="form__section-description">List of questions to help understanding if your motivations match with those of your potential employer</p>

        {questionnaire.map((item, index) => {
          const { question, answer } = item;
          return (
            <FormQuestionnaireItem key={index} question={question} answer={answer} handleRemoveItem={handleRemoveItem}
            handleQuestionnaireInput={handleQuestionnaireInput} ind={index} />
          )
        })}

        <div className="form__container">
          <FormInput
            labelContent="Question"
            styles="form__input"
            inputType="text"
            inputName="question"
            inputValue={question}
            example="What JS frameworks do you use?"
            handleInputChange={handleQuestionChange}
          />

          <FormInput
            labelContent="Answer"
            styles="form__input"
            inputType="text"
            inputName="answer"
            inputValue={answer}
            example="React"
            handleInputChange={handleQuestionChange}
          />

          <Button
            buttonType="button"
            styles="add-btn"
            handleButtonClick={handleAddItem}
          >
            Añadir
          </Button>
        </div>
      </fieldset>
    );
  }
}

FormQuestionnaire.propTypes = {
  questionnaire: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleQuestionnaireInput: PropTypes.func.isRequired
}

export default FormQuestionnaire;
