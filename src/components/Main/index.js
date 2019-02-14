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
      handlePrintBtn,
      handleJsonText,
      ...rest
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
                <Link to="/json">JSON viewer</Link>
              </li>
              <li className="nav__link" onClick={this.handleThirdTabClick}>
                <Link to="/preview">CV preview</Link>
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
                  {...rest}
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
  publicLinkDefault: PropTypes.string.isRequired,
  goalDefault: PropTypes.string.isRequired,
  significantRelationshipsDefault: PropTypes.array.isRequired,
  transportableSkillDefault: PropTypes.string.isRequired,
  significantExperienceDefault: PropTypes.string.isRequired,
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
  handleImage: PropTypes.func.isRequired,
  handleProfileInputs: PropTypes.func.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLinkItem: PropTypes.func.isRequired,
  handleRemoveLinkItem: PropTypes.func.isRequired,
  handleLinkChange: PropTypes.func.isRequired,
  handleIntroChange: PropTypes.func.isRequired,
  handleAddGoal: PropTypes.func.isRequired,
  handleRemoveGoal: PropTypes.func.isRequired,
  handleGoalsInput: PropTypes.func.isRequired,
  handleAddTransportableSkill: PropTypes.func.isRequired,
  handleRemoveTransportableSkill: PropTypes.func.isRequired,
  handleTransportableSkillChange: PropTypes.func.isRequired,
  handleTransportableSkillsInput: PropTypes.func.isRequired,
  handleAddSignificantExperience: PropTypes.func.isRequired,
  handleRemoveSignificantExperience: PropTypes.func.isRequired,
  handlesignificantExperienceChange: PropTypes.func.isRequired,
  handleSignificantExperienceInput: PropTypes.func.isRequired,
  handleAddSignificantRelationships: PropTypes.func.isRequired,
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
