import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";

class Main extends Component {
  handleFirstTabClick(event) {
    const parent = event.currentTarget.parentElement;
    const secondChild = parent.childNodes[1];
    const thirdChild = parent.childNodes[2];
    event.currentTarget.classList.add("active");
    secondChild.classList.remove("active");
    thirdChild.classList.remove("active");
  }

  handleSecondTabClick(event) {
    const parent = event.currentTarget.parentElement;
    const firstChild = parent.childNodes[0];
    const thirdChild = parent.childNodes[2];
    event.currentTarget.classList.add("active");
    firstChild.classList.remove("active");
    thirdChild.classList.remove("active");
  }

  handleThirdTabClick(event) {
    const parent = event.currentTarget.parentElement;
    const firstChild = parent.childNodes[0];
    const secondChild = parent.childNodes[1];
    event.currentTarget.classList.add("active");
    secondChild.classList.remove("active");
    firstChild.classList.remove("active");
  }

  render() {
    const {
      sample,
      handleIntroChange,
      handleProfessionalGoals,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange,
      goal,
      miscEdDefault,
      question,
      answer,
      handlePrintBtn,
      handleJsonText,
      handleAddItem,
      handleQuestionChange,
      handleRemoveItem,
      handleQuestionnaireInput,
      handleDefaultInputChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange
    } = this.props;

    return (
      <main className="main">
        <div className="preview__wrapper">
          <nav className="main__nav">
            <ul className="nav__list">
              <li
                className="nav__link active"
                onClick={this.handleFirstTabClick}
              >
                <Link to="/">Form</Link>
              </li>
              <li className="nav__link" onClick={this.handleSecondTabClick}>
                <Link to="/json">Json</Link>
              </li>
              <li className="nav__link" onClick={this.handleThirdTabClick}>
                <Link to="/preview">Cv</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Form
                  sample={sample}
                  handleAddItem={handleAddItem}
                  handleQuestionChange={handleQuestionChange}
                  question={question}
                  answer={answer}
                  handleRemoveItem={handleRemoveItem}
                  handleQuestionnaireInput={handleQuestionnaireInput}
                  miscEdDefault={miscEdDefault}
                  handleDefaultInputChange={handleDefaultInputChange}
                  handleAddMiscItem={handleAddMiscItem}
                  handleRemoveMiscItem={handleRemoveMiscItem}
                  handleMiscInputChange={handleMiscInputChange}
                  handleIntroChange={handleIntroChange}
                  handleProfessionalGoals={handleProfessionalGoals}
                  handleAddGoal={handleAddGoal}
                  handleRemoveGoal ={handleRemoveGoal}
                  handleGoalsInput={handleGoalsInput}
                  handleGoalChange={handleGoalChange}
                  goal={goal}

                />
              )}
            />
            <Route
              path="/json"
              render={() => (
                <Json sample={sample} handleJsonText={handleJsonText} />
              )}
            />
            <Route
              path="/preview"
              render={() => (
                <Preview sample={sample} handlePrintBtn={handlePrintBtn} />
              )}
            />
          </Switch>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  sample: PropTypes.object.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  handlePrintBtn: PropTypes.func.isRequired,
  handleJsonText: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleProfessionalGoals: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired ,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired,
  handleAddItem: PropTypes.func.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleQuestionnaireInput: PropTypes.func.isRequired
};

export default Main;
