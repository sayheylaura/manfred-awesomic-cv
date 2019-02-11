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
      goalDefault,
      significantRelationshipsDefault,
      transportableSkillDefault,
      significantExperienceDefault,
      institutionDefault,
      studyDefault,
      fromEdDefault,
      untilEdDefault,
      languageDefault,
      proficiencyDefault,
      miscEdDefault,
      questionDefault,
      answerDefault,
      handlePrintBtn,
      handleJsonText,
      handleDefaultInputChange,
      handleIntroChange,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange,
      handleAddTransportableSkill,
      handleTransportableSkillChange,
      handleRemoveTransportableSkill,
      handleTransportableSkillsInput,
      handleAddSignificantExperience,
      handlesignificantExperienceChange,
      handleRemoveSignificantExperience,
      handleSignificantExperienceInput,
      handleProfileInputs,
      handleAddEducationItem,
      handleRemoveEducationItem,
      handleEducationChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange,
      handleImage,
      handleAddQuestion,
      handleRemoveQuestion,
      handleQuestionInputChange
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
                  goalDefault={goalDefault}
                  significantRelationshipsDefault={significantRelationshipsDefault}
                  transportableSkillDefault={transportableSkillDefault}
                  significantExperienceDefault={significantExperienceDefault}
                  institutionDefault={institutionDefault}
                  studyDefault={studyDefault}
                  fromEdDefault={fromEdDefault}
                  untilEdDefault={untilEdDefault}
                  languageDefault={languageDefault}
                  proficiencyDefault={proficiencyDefault}
                  miscEdDefault={miscEdDefault}
                  questionDefault={questionDefault}
                  answerDefault={answerDefault}
                  handleDefaultInputChange={handleDefaultInputChange}
                  handleIntroChange={handleIntroChange}
                  handleAddGoal={handleAddGoal}
                  handleRemoveGoal ={handleRemoveGoal}
                  handleGoalsInput={handleGoalsInput}
                  handleGoalChange={handleGoalChange}
                  handleAddTransportableSkill={handleAddTransportableSkill}
                  handleTransportableSkillChange={handleTransportableSkillChange}
                  handleRemoveTransportableSkill={handleRemoveTransportableSkill}
                  handleTransportableSkillsInput={handleTransportableSkillsInput}
                  handleAddSignificantExperience={handleAddSignificantExperience}
                  handlesignificantExperienceChange={handlesignificantExperienceChange}
                  handleRemoveSignificantExperience={handleRemoveSignificantExperience}
                  handleSignificantExperienceInput={handleSignificantExperienceInput}
                  handleProfileInputs={handleProfileInputs}
                  handleAddEducationItem={handleAddEducationItem}
                  handleRemoveEducationItem={handleRemoveEducationItem}
                  handleEducationChange={handleEducationChange}
                  handleAddLanguageItem={handleAddLanguageItem}
                  handleRemoveLanguageItem={handleRemoveLanguageItem}
                  handleLanguageChange={handleLanguageChange}
                  handleAddMiscItem={handleAddMiscItem}
                  handleRemoveMiscItem={handleRemoveMiscItem}
                  handleMiscInputChange={handleMiscInputChange}
                  handleImage={handleImage}
                  handleAddQuestion={handleAddQuestion}
                  handleRemoveQuestion={handleRemoveQuestion}
                  handleQuestionInputChange={handleQuestionInputChange}
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
  goalDefault: PropTypes.string.isRequired,
  significantRelationshipsDefault: PropTypes.array.isRequired,
  transportableSkillDefault: PropTypes.string.isRequired,
  significantExperienceDefault:PropTypes.string.isRequired,
  institutionDefault: PropTypes.string.isRequired,
  studyDefault: PropTypes.string.isRequired,
  fromEdDefault: PropTypes.string.isRequired,
  untilEdDefault: PropTypes.string.isRequired,
  languageDefault: PropTypes.string.isRequired,
  proficiencyDefault: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  questionDefault: PropTypes.string.isRequired,
  answerDefault: PropTypes.string.isRequired,
  handlePrintBtn: PropTypes.func.isRequired,
  handleJsonText: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleAddGoal:PropTypes.func.isRequired ,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleAddTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillChange: PropTypes.func.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handlesignificantExperienceChange: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleAddEducationItem: PropTypes.func.isRequired,
  handleRemoveEducationItem: PropTypes.func.isRequired,
  handleEducationChange: PropTypes.func.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired,
  handleAddQuestion: PropTypes.func.isRequired,
  handleRemoveQuestion: PropTypes.func.isRequired,
  handleQuestionInputChange: PropTypes.func.isRequired
};

export default Main;
