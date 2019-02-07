import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";

import PropTypes from "prop-types";
import Preview from "../Preview";
import Form from "../Form";
import Json from "../Json";


class Main extends Component {
  render() {
    const { sample, handlePrintBtn, handleJsonText, handleProfileInputs, handlePublicLinks } = this.props;
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
          <Route exact path="/" render={() => <Form sample={sample} handleProfileInputs={handleProfileInputs} handlePublicLinks={handlePublicLinks} />} />
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
  handleProfileInputs: PropTypes.func.isRequired,
  handlePublicLinks: PropTypes.func.isRequired
};

export default Main;
