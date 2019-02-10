import React, { Component } from 'react';
import FormIntro from '../FormIntro';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { sample, handleIntroChange } = this.props;
    const {intro} = sample.author;

    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>
        <section>
          <FormIntro intro={intro} handleIntroChange={handleIntroChange}/>
        </section>

      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
};

export default Form;
