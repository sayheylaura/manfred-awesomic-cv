import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';

class FormMiscEducation extends Component {
  render() {
    const { miscEducation } = this.props;
    console.log(miscEducation);
    return (
      <fieldset className="form__misc-education">
        <legend className="form__section-title">Miscellany</legend>

        <p className="form__section-description">Miscellaneous education such as courses, certifications, awards, projects, etc.</p>

        {miscEducation.map((item, index) => {
          return (
            <FormInput
              key={index}
              labelContent={`Item ${index + 1}`}
              styles="form__input"
              inputType="text"
              inputName={`miscEd${index}`}
              inputValue={item}
              example="Scrum master certification"
            /* handleInputChange={handleProfileInputs} */
            />
          )
        })}
      </fieldset>
    );
  }
}

FormMiscEducation.propTypes = {
  miscEducation: PropTypes.array.isRequired
}

export default FormMiscEducation;
