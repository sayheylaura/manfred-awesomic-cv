import React, { Component } from "react";
import PropTypes from "prop-types";
import FormMiscEducation from "../FormMiscEducation";
import FormIntro from '../FormIntro';
import FormProfessionalGoals from '../FormProfessionalGoals';

class Form extends Component {
  render() {
    const {
      sample,
      miscEdDefault,
      handleDefaultInputChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange,
      handleIntroChange,
      handleProfessionalGoals,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange,
      goal
    } = this.props;
    const { miscEducation } = sample;
    const {intro, professionalGoals} = sample.author;
    return (
      <section className="form__wrapper">
        <h2 className="form__title">Here will be the form</h2>
        <FormIntro intro={intro}
          handleIntroChange={handleIntroChange}
        />
        <FormProfessionalGoals
          professionalGoals={professionalGoals}
          handleProfessionalGoals={handleProfessionalGoals}
          handleAddGoal={handleAddGoal}
          handleRemoveGoal={handleRemoveGoal}
          handleGoalsInput={handleGoalsInput}
          handleGoalChange={handleGoalChange}
          goal={goal}
        />
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
  handleIntroChange: PropTypes.func.isRequired,
  handleProfessionalGoals: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired ,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default Form;
