import React, { Component } from 'react';
import FormTextarea from '../FormTextarea';

class FormIntro extends Component {
  render() {
    return (
      <fieldset className="form__intro">
        <legend className="form__intro-title">Intro</legend>
        <p className="form__intro-description">
          Explain to your future company what kind of professional you are
        </p>
        <FormTextarea />
      </fieldset>
    );
  }
}

export default FormIntro;
