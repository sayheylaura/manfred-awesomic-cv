import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EducationItem from "../EducationItem";

class Education extends Component {
  render() {
    const { sampleEducation } = this.props;
    return (
      <div className="education__wrapper">
        <h3>Formación</h3>
        <EducationItem sampleEducation={sampleEducation}/>
      </div>
    );

  }
}

Education.propTypes = {
  sampleEducation: PropTypes.array.isRequired
};

export default Education;
