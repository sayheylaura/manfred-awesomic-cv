import React, { Component } from "react";
import PropTypes from "prop-types";
import EducationItem from "../EducationItem";

class Education extends Component {
  render() {
    const { sampleEducation } = this.props;
    return (
      <div className="education__wrapper wrapper">
        <h2 className="education__title title">Education</h2>

        <ul className="education__list">
          {sampleEducation.map((item, index) => {
            return <EducationItem key={index} sampleEducationItem={item} />;
          })}
        </ul>
      </div>
    );
  }
}

Education.propTypes = {
  sampleEducation: PropTypes.array.isRequired
};

export default Education;
