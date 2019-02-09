import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";


class Main extends Component {
  render() {
    const { sample, question, answer, handlePrintBtn, handleJsonText, handleAddItem, handleQuestionChange, handleRemoveItem, handleQuestionnaireInput } = this.props;
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
          <Route exact path="/" render={() => <Form sample={sample} handleAddItem={handleAddItem} handleQuestionChange={handleQuestionChange} question={question} answer={answer} handleRemoveItem={handleRemoveItem} handleQuestionnaireInput={handleQuestionnaireInput} />} />
          <Route path="/json" render={() => <Json sample={sample} handleJsonText={handleJsonText} />} />
          <Route path="/preview" render={() => <Preview sample={sample} handlePrintBtn={handlePrintBtn} />} />
        </Switch>
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
  handleQuestionnaireInput: PropTypes.func.isRequired
};

export default Main;
