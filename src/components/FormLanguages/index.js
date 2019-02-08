import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput';
import FormSelect from '../FormSelect';

const proficiencyLevels = [
  "elementary",
  "limited working",
  "professional working",
  "full professional",
  "native or bilingual"
]

class FormLanguages extends Component {
  render() {
    const { languages } = this.props;
    console.log(languages);
    return (
      <fieldset className="form__languages">
        <legend className="form__section-title">Languages</legend>

        {languages.map((item, index) => {
          const { language, proficiency } = item;
          console.log(language);
          console.log(proficiency);
          return (
            <fieldset key={index}>
              <legend>{`Item ${index + 1}`}</legend>
              <FormInput
                labelContent="Language"
                styles="form__input"
                inputType="text"
                inputName={`language${index}`}
                inputValue={language}
                example="English"
              /* handleInputChange={handleProfileInputs} */
              />

              <FormSelect
                labelContent="Proficiency"
                styles="form__select"
                selectName={`proficiency${index}`}
                selectValue={proficiency}
                selectOptions={proficiencyLevels}
              /* handleSelectChange={} */
              />
            </fieldset>
          )
        })}
      </fieldset>
    );
  }
}

FormLanguages.propTypes = {
  languages: PropTypes.array.isRequired
}

export default FormLanguages;
