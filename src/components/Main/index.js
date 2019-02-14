import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";

const tabs = [
  { name: 'form', text: 'Form', linkTo: '/' },
  { name: 'json', text: 'JSON editor', linkTo: '/json' },
  { name: 'cv', text: 'CV viewer', linkTo: '/preview' }
]

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'form',
    }
  }
  handleTabClick(newActiveTabName) {
    this.setState({ activeTab: newActiveTabName })
  }

  render() {
    const {
      sample,
      publicLinkDefault,
      goalDefault,
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
      handleAddImage,
      handleRemoveImage,
      handleProfileInputs,
      handleDefaultInputChange,
      handleAddLinkItem,
      handleRemoveLinkItem,
      handleLinkChange,
      handleIntroChange,
      handleAddGoal,
      handleRemoveGoal,
      handleGoalsInput,
      handleGoalChange,
      handleAddTransportableSkill,
      handleRemoveTransportableSkill,
      handleTransportableSkillChange,
      handleTransportableSkillsInput,
      handleAddSignificantExperience,
      handleRemoveSignificantExperience,
      handlesignificantExperienceChange,
      handleSignificantExperienceInput,
      handleAddEducationItem,
      handleRemoveEducationItem,
      handleEducationChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange,
      handleAddMiscItem,
      handleRemoveMiscItem,
      handleMiscInputChange,
      handleAddQuestion,
      handleRemoveQuestion,
      handleQuestionInputChange
    } = this.props;

    return (
      <main className="main">
        <div className="preview__wrapper">
          <nav className="main__nav">
            <ul className="nav__list">
              {tabs.map(tabItem =>
                <li
                  className={`nav__link ${tabItem.name === this.state.activeTab ? 'active' : ''}`}
                  onClick={(e) => this.handleTabClick(tabItem.name)}
                >
                  {tabItem.name === this.state.activeTab
                    ? tabItem.text
                    : <Link to={tabItem.linkTo}>{tabItem.text}</Link>}
                </li>
              )}
            </ul>
          </nav>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Form
                  sample={sample}
                  publicLinkDefault={publicLinkDefault}
                  goalDefault={goalDefault}
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
                  handleAddImage={handleAddImage}
                  handleRemoveImage={handleRemoveImage}
                  handleProfileInputs={handleProfileInputs}
                  handleDefaultInputChange={handleDefaultInputChange}
                  handleAddLinkItem={handleAddLinkItem}
                  handleRemoveLinkItem={handleRemoveLinkItem}
                  handleLinkChange={handleLinkChange}
                  handleIntroChange={handleIntroChange}
                  handleAddGoal={handleAddGoal}
                  handleRemoveGoal={handleRemoveGoal}
                  handleGoalsInput={handleGoalsInput}
                  handleGoalChange={handleGoalChange}
                  handleAddTransportableSkill={handleAddTransportableSkill}
                  handleRemoveTransportableSkill={
                    handleRemoveTransportableSkill
                  }
                  handleTransportableSkillChange={
                    handleTransportableSkillChange
                  }
                  handleTransportableSkillsInput={
                    handleTransportableSkillsInput
                  }
                  handleAddSignificantExperience={
                    handleAddSignificantExperience
                  }
                  handleRemoveSignificantExperience={
                    handleRemoveSignificantExperience
                  }
                  handlesignificantExperienceChange={
                    handlesignificantExperienceChange
                  }
                  handleSignificantExperienceInput={
                    handleSignificantExperienceInput
                  }
                  handleAddEducationItem={handleAddEducationItem}
                  handleRemoveEducationItem={handleRemoveEducationItem}
                  handleEducationChange={handleEducationChange}
                  handleAddLanguageItem={handleAddLanguageItem}
                  handleRemoveLanguageItem={handleRemoveLanguageItem}
                  handleLanguageChange={handleLanguageChange}
                  handleAddMiscItem={handleAddMiscItem}
                  handleRemoveMiscItem={handleRemoveMiscItem}
                  handleMiscInputChange={handleMiscInputChange}
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
  publicLinkDefault: PropTypes.string.isRequired,
  goalDefault: PropTypes.string.isRequired,
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
  handleAddImage: PropTypes.func.isRequired,
  handleRemoveImage: PropTypes.func.isRequired,
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
