import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EducationAchievements from "../EducationAchievements";

//pendiente de averiguar la solucion a que falte una clave

class EducationItem extends Component {
  render() {
    const { sampleEducation } = this.props;
    return (
      <ul className="education__list">
          {sampleEducation.map((item, index) => {
            return (
              <li key={index} className="education__list-item">
                <h4 className="education__item-institution">{item.institution}</h4>
                <h5 className="education__item-institution">{item.study}</h5>
                <p className="education__item-date">{item.from} - {item.until}</p>
                {item.achievements && (<EducationAchievements sampleAchievements={item.achievements}/>)}
              </li>
            )
          })}
        </ul>
    );
  }
}
EducationItem.propTypes = {
  sampleEducation: PropTypes.array.isRequired
};

export default EducationItem;
