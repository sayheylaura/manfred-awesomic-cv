import React, { Component } from "react";
import PropTypes from "prop-types";
import FormQuestionnaire from "../FormQuestionnaire";

class Form extends Component {
  render() {
    const { sample } = this.props;
    const { questionnaire } = sample;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>

        <FormQuestionnaire questionnaire={questionnaire} />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Form;
