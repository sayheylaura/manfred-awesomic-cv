import React, { Component } from "react";
import PropTypes from "prop-types";
import FormLanguages from "../FormLanguages";
import FormMiscEducation from "../FormMiscEducation";

class Form extends Component {
  render() {
    const {
      sample,
      miscEdDefault,
      handleDefaultInputChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange
    } = this.props;

    const { languages, miscEducation } = sample;

    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>

        <FormLanguages languages={languages} />

        <FormMiscEducation
          miscEducation={miscEducation}
          miscEdDefault={miscEdDefault}
          handleDefaultInputChange={handleDefaultInputChange}
          handleAddMiscItem={handleAddMiscItem}
          handleRemoveMiscItem={handleRemoveMiscItem}
          handleMiscInputChange={handleMiscInputChange}
        />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default Form;
