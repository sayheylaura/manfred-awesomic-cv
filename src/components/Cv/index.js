import React, { Component } from "react";
import PropTypes from "prop-types";
import Author from "../Author";
import Experience from "../Experience";
import Education from "../Education";

class Cv extends Component {
  render() {
    const { sample } = this.props;
    return (
      // Importado en:
      //     - Preview
      <div className="cv__wrapper">
        {/* Instancia:
          - Education
          - Languages
          - MiscEducation
          - Questionnaire */}
        <Author sampleAuthor={sample.author} />
        <Experience sample={sample} />
        <Education sampleEducation={sample.education}/>
        {/*  - Languages - MiscEducation - Questionnaire */}

      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
