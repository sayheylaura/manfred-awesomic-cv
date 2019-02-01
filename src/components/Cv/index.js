import React, { Component } from "react";
import PropTypes from "prop-types";
import Author from "../Author";

class Cv extends Component {
  render() {
    const { sample } = this.props;
    return (
      // Importado en:
      //     - Preview
      <div className="cv__wrapper">
        {/* Instancia:
          - Author
          - Experience
          - Education
          - Languages
          - MiscEducation
          - Questionnaire */}
        <Author sampleAuthor={sample.author} />
      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
