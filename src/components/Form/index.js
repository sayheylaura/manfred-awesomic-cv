import React, { Component } from 'react';
import FormAuthor from '../FormAuthor';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { sample, handleProfileInputs } = this.props;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>

        <FormAuthor sample={sample} handleProfileInputs={handleProfileInputs} />
      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  handleProfileInputs: PropTypes.func.isRequired
}

export default Form;
