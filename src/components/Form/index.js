import React, { Component } from 'react';
import FormIntro from '../FormIntro';
//import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {sample} = this.props;
    const {author} = sample;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>
        <section>
          <FormIntro intro={author}/>
        </section>

      </section>
    );
  }
}

export default Form;
