import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Questionnaire.scss';

class Questionnaire extends Component {

  render() {
    const { sampleQuestionnaire } = this.props;
    return (
      <div className="questionnaire__wrapper">
        <h2 className="questionnaire__title">Questionnaire</h2>
        {sampleQuestionnaire.map((item, index) => {
          return (
            <div key={index} className="questionnaire__item">

              <p className="questionnaire__item-question">
                {item.question}
              </p>
              <p className="questionnaire__item-answer">
                {item.answer}
              </p>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus erat eu quam malesuada, ut molestie elit finibus. Cras odio eros, blandit et velit at, gravida finibus libero. Maecenas condimentum quis tellus at auctor. Donec et dolor non magna volutpat aliquet. Vivamus elementum neque quam, et vehicula mi sagittis a. Ut luctus massa eu elementum interdum. Aliquam in lectus at lacus congue lacinia. Nullam sit amet elit ut sapien placerat convallis vitae a ex. Etiam sapien risus, dapibus a elit sed, tempus varius urna. Pellentesque nulla odio, placerat et consequat et, tempor ut libero. Pellentesque odio enim, egestas eget pellentesque at, tincidunt quis neque.

Ut et est sed tellus lobortis dictum a a erat. Cras molestie, libero vel finibus laoreet, ex dolor fringilla purus, quis lobortis magna arcu ut justo. Duis quis elit congue, laoreet ligula at, euismod urna. Maecenas sed blandit arcu, ac eleifend ante. Suspendisse molestie sit amet metus in placerat. Ut sollicitudin, nulla non tempor finibus, arcu libero tincidunt nisi, vel mollis est nibh sit amet dui. Nam dapibus libero augue, vel imperdiet magna condimentum id. Suspendisse massa enim, porttitor in viverra sit amet, pulvinar at arcu. Duis elementum, erat sed semper pellentesque, elit nisi accumsan dolor, a bibendum metus metus sed justo. Ut non enim scelerisque, commodo arcu vel, cursus purus. Nam malesuada dui efficitur consectetur aliquet. Phasellus fermentum, turpis sed euismod blandit, eros leo faucibus magna, eget convallis felis metus eu purus. Quisque varius mauris vitae dui laoreet, sit amet eleifend velit posuere. Curabitur mi justo, egestas sed commodo quis, cursus vulputate leo. Mauris at magna luctus, gravida dui sit amet, sodales nibh.


                </p>
            </div>
          );
        })}
      </div>
    );
  }
}
Questionnaire.propTypes = {
  sampleQuestionnaire: PropTypes.array.isRequired
};
export default Questionnaire;
