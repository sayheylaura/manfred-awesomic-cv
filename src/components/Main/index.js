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
      question,
      answer,
      language,
      proficiency,
      miscEdDefault,
      handlePrintBtn,
      handleJsonText,
      handleAddItem,
      handleQuestionChange,
      handleRemoveItem,
      handleQuestionnaireInput,
      handleDefaultInputChange,
      handleAddLanguageItem,
      handleRemoveLanguageItem,
      handleLanguageChange,
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
                  language={language}
                  proficiency={proficiency}
                  miscEdDefault={miscEdDefault}
                  question={question}
                  answer={answer}
                  handleDefaultInputChange={handleDefaultInputChange}
                  handleAddLanguageItem={handleAddLanguageItem}
                  handleRemoveLanguageItem={handleRemoveLanguageItem}
                  handleLanguageChange={handleLanguageChange}
                  handleAddItem={handleAddItem}
                  handleQuestionChange={handleQuestionChange}
                  handleRemoveItem={handleRemoveItem}
                  handleQuestionnaireInput={handleQuestionnaireInput}
                  handleAddMiscItem={handleAddMiscItem}
                  handleRemoveMiscItem={handleRemoveMiscItem}
                  handleMiscInputChange={handleMiscInputChange}
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
  handleAddItem: PropTypes.func.isRequired,
  handleQuestionChange: PropTypes.func.isRequired,
  handleRemoveItem: PropTypes.func.isRequired,
  handleQuestionnaireInput: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  proficiency: PropTypes.string.isRequired,
  miscEdDefault: PropTypes.string.isRequired,
  handleDefaultInputChange: PropTypes.func.isRequired,
  handleAddLanguageItem: PropTypes.func.isRequired,
  handleRemoveLanguageItem: PropTypes.func.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
  handleAddMiscItem: PropTypes.func.isRequired,
  handleRemoveMiscItem: PropTypes.func.isRequired,
  handleMiscInputChange: PropTypes.func.isRequired
};

export default Main;
