import React, { Component } from 'react';
import FormTextarea from '../FormTextarea';
import PropTypes from 'prop-types';

class FormIntro extends Component {
  render() {
    const { handleIntroChange, intro} = this.props;
    return (
      <fieldset className="form__intro">
        <legend className="form__section-title">Intro</legend>
        <p className="form__intro-description">
          Explain to your future company what kind of professional you are
        </p>
        <FormTextarea
        textName="intro"
        textValue={intro}
        labelContent="Intro"
        handleTextChange={handleIntroChange} />

      </fieldset>
    );
  }
}

FormIntro.propTypes = {
  intro: PropTypes.string.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
};

export default FormIntro;
