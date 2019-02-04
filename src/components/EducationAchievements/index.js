import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EducationAchievements extends Component {
  render() {
    const { sampleAchievements } = this.props;
    return (
      <ul className="achievements__list">
        {sampleAchievements.map((item, index) => {
          return (
            <li key={index} className="achievements__list-item">
              {item}
            </li>
          )
        })}
      </ul>
    );
  }
}

EducationAchievements.propTypes = {
  sampleAchievements: PropTypes.array.isRequired
};

export default EducationAchievements;
