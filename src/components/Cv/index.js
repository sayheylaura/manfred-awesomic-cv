import React, { Component } from "react";
import PropTypes from "prop-types";
import Experience from "../Experience";

class Cv extends Component {
  render() {
    const { sample } = this.props;
    return (
      // Importado en:
      //     - Preview
      <div className="cv__wrapper">
        {/* Instancia:
          - Author*/
          <Experience 
            sample={sample}
          />
         /* - Education
          - Languages
          - MiscEducation
          - Questionnaire */}
        <p>Cv component goes here</p>
      </div>
    );
  }
}

Cv.propTypes = {
  sample: PropTypes.object.isRequired
};

export default Cv;