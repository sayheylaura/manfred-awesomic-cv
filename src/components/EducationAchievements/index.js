import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EducationAchievements extends Component {
  render() {
    const { sampleEducation } = this.props;
    console.log(sampleEducation);

    return (
      <ul className="achievements__list">
        {sampleEducation.map((item, index) => {
          return (
            <li key={index} className="achievements__list-item">
              {item.achievements}
            </li>
          )
        })}
      </ul>
    );
  }
}

EducationAchievements.propTypes = {
  achievements: PropTypes.array.isRequired
};

export default EducationAchievements;
