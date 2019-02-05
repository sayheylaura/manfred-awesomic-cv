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
    const {
      author,
      experience,
      education,
      languages,
      miscEducation,
      questionnaire
    } = sample;
    return (
      <div className="cv__wrapper">
        <Author sampleAuthor={author} />
        <Experience sampleExperience={experience} />
        <Education sampleEducation={education} />
        {languages && <LanguagesList sampleLanguages={languages} />}
        {miscEducation && <MiscEducation sampleMiscEducation={miscEducation} />}
        {questionnaire && <Questionnaire sampleQuestionnaire={questionnaire} />}
      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
