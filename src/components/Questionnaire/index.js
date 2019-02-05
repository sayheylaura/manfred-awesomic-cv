import React, { Component } from 'react';
import PropTypes from "prop-types";

class Questionnaire extends Component {

  render() {
    const { sampleQuestionnaire } = this.props;
    return (
      <div className="questionnaire__wrapper wrapper">
        <h2 className="questionnaire__title title">Questionnaire</h2>
        <ul className="questionnaire__list">
          {sampleQuestionnaire.map((item, index) => {
            const { question, answer } = item;
            return (
              <li key={index} className="questionnaire__item">
                {question && (
                  <p className="questionnaire__item-question">
                    {question}
                  </p>
                )}
                {answer && <p className="questionnaire__item-answer">
                  {answer}
                </p>}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
Questionnaire.propTypes = {
  sampleQuestionnaire: PropTypes.array.isRequired
};
export default Questionnaire;
