import React, { Component } from "react";
import FormLanguages from "../FormLanguages";
import PropTypes from "prop-types";

class Form extends Component {
  render() {
    const { languages } = this.props.sample;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>

        <FormLanguages languages={languages} />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Form;
