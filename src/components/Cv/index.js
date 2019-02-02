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
<<<<<<< HEAD
        <Education sampleEducation={sample.education}/>
        {/*  - Languages - MiscEducation - Questionnaire */}

=======
        {/* - Education - Languages - MiscEducation - Questionnaire */}
>>>>>>> 3025bbb534f15082f74bd05b56a41f1ce92b7f08
      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;
