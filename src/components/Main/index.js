import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";


class Main extends Component {
  render() {
    const { sample, handlePrintBtn, handleJsonText, handleIntroChange, handleProfessionalGoals, handleAddGoal, handleRemoveGoal, handleGoalsInput, handleGoalChange, goal } = this.props;
    return (
      <main className="main">
        <nav className="main__nav">
          <ul className="nav__list">
            <Link to="/"><li className="nav__link">Form</li></Link>
            <Link to="/json"><li className="nav__link">Json</li></Link>
            <Link to="/preview"><li className="nav__link">Cv</li></Link>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" render={() => <Form sample={sample} handleIntroChange={handleIntroChange}
          handleProfessionalGoals={handleProfessionalGoals}
          handleAddGoal={handleAddGoal}
          handleRemoveGoal ={handleRemoveGoal}
          handleGoalsInput={handleGoalsInput}
          handleGoalChange={handleGoalChange}
          goal={goal}
          />} />
          <Route path="/json" render={() => <Json sample={sample} handleJsonText={handleJsonText} />} />
          <Route path="/preview" render={() => <Preview sample={sample} handlePrintBtn={handlePrintBtn} />} />
        </Switch>
      </main>
    );
  }
}

Main.propTypes = {
  sample: PropTypes.object.isRequired,
  handlePrintBtn: PropTypes.func.isRequired,
  handleJsonText: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleProfessionalGoals: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired ,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired

};

export default Main;
