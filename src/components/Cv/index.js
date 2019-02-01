import React, { Component } from "react";
import PropTypes from "prop-types";
import Author from "../Author";
import Experience from "../Experience";

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
        {/* - Education - Languages - MiscEducation - Questionnaire */}
      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
