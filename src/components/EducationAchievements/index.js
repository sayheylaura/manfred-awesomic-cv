import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EducationAchievements extends Component {
  render() {
    const { achievements } = this.props;
    console.log(achievements);

    return (
      <ul className="achievements__list">
        {achievements.map((item, index) => {
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
  achievements: PropTypes.array.isRequired
};

export default EducationAchievements;
