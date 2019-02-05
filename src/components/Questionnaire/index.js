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
            return (
              <li key={index} className="questionnaire__item">
                <p className="questionnaire__item-question">
                  {item.question}
                </p>
                <p className="questionnaire__item-answer">
                  {item.answer}
                </p>
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
