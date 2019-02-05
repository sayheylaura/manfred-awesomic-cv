import React, { Component } from "react";
import PropTypes from "prop-types";
import EducationAchievements from "../EducationAchievements";

class EducationItem extends Component {
  render() {
    const { sampleEducationItem } = this.props;
    const {
      institution,
      study,
      from,
      until,
      achievements
    } = sampleEducationItem;
    return (
      <li className="education__list-item">
        <h3 className="education__item-institution">{institution}</h3>
        <h4 className="education__item-study">{study}</h4>
        <p className="education__item-date">
          {from} - {until}
        </p>
        {achievements && !!achievements.length && (
          <EducationAchievements sampleAchievements={achievements} />
        )}
      </li>
    );
  }
}
EducationItem.propTypes = {
  sampleEducationItem: PropTypes.object.isRequired
};

export default EducationItem;
