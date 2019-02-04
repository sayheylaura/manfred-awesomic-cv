import React, { Component } from "react";
import PropTypes from "prop-types";
import Author from "../Author";
import Experience from "../Experience";
import Education from "../Education";
import Questionnaire from "../Questionnaire";
import MiscEducation from "../MiscEducation";
import LanguagesList from "../LanguagesList";

class Cv extends Component {
  render() {
    const { sample } = this.props;
    return (
      <div className="cv__wrapper">
        <Author sampleAuthor={sample.author} />
        <Experience sampleExperience={sample.experience} />
        <Education sampleEducation={sample.education} />
        <LanguagesList sampleLanguages={sample.languages} />
        <MiscEducation sampleMiscEducation={sample.miscEducation} />
        <Questionnaire sampleQuestionnaire={sample.questionnaire} />
      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
