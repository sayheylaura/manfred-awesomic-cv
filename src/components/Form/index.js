import React, { Component } from "react";
import PropTypes from "prop-types";
import FormMiscEducation from "../FormMiscEducation";

class Form extends Component {
  render() {
    const { sample } = this.props;
    const { miscEducation } = sample;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>

        <FormMiscEducation miscEducation={miscEducation} />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Form;
