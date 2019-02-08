import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';

class FormQuestionnaire extends Component {
  render() {
    const { questionnaire } = this.props;
    return (
      <fieldset className="form__questionnaire">
        <legend className="form__section-title">Questionnaire</legend>

        <p className="form__section-description">List of questions to help understanding if your motivations match with those of your potential employer</p>

        {questionnaire.map((item, index) => {
          const { question, answer } = item;
          return (
            <fieldset key={index}>
              <legend>{`Item ${index + 1}`}</legend>

              <FormInput
                labelContent="Question"
                styles="form__input"
                inputType="text"
                inputName={`question${index}`}
                inputValue={question}
                example="What JS frameworks do you use?"
              /* handleInputChange={handleProfileInputs} */
              />

              <FormInput
                labelContent="Answer"
                styles="form__input"
                inputType="text"
                inputName={`answer${index}`}
                inputValue={answer}
                example="React"
              /* handleInputChange={handleProfileInputs} */
              />
            </fieldset>
          )
        })}
      </fieldset>
    );
  }
}

FormQuestionnaire.propTypes = {
  questionnaire: PropTypes.array.isRequired
}

export default FormQuestionnaire;
