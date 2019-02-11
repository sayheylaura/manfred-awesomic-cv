import React, { Component } from 'react';
import FormIntro from '../FormIntro';
import PropTypes from 'prop-types';
import FormProfessionalGoals from '../FormProfessionalGoals';

class Form extends Component {
  render() {
    const { sample, handleIntroChange, handleProfessionalGoals, handleAddGoal, handleRemoveGoal, handleGoalsInput, handleGoalChange, goal } = this.props;
    const {intro, professionalGoals} = sample.author;

    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>
        <section>
          <FormIntro intro={intro}
          handleIntroChange={handleIntroChange}/>
          <FormProfessionalGoals professionalGoals={professionalGoals}
          handleProfessionalGoals={handleProfessionalGoals}
          handleAddGoal={handleAddGoal}
          handleRemoveGoal={handleRemoveGoal}
          handleGoalsInput={handleGoalsInput}
          handleGoalChange={handleGoalChange}
          goal={goal}
          />
        </section>

      </section>
    );
  }
}

Form.propTypes = {
  sample: PropTypes.object.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleProfessionalGoals: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired ,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired
};

export default Form;
