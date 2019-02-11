import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class EducationAchievements extends Component {
  render() {
    const { sampleAchievements } = this.props;
    return (
      <Fragment>
      <h4 className="achievements__title">Achievements:</h4>
      <ul className="achievements__list list">
        {sampleAchievements.map((item, index) => {
          return (
            <li key={index} className="achievements__list-item">
              {item}
            </li>
          )
        })}
      </ul>
      </Fragment>
    );
  }
}

EducationAchievements.propTypes = {
  sampleAchievements: PropTypes.array.isRequired
};

export default EducationAchievements;
