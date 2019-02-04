import React, { Component } from "react";
import PropTypes from "prop-types";

class ProfessionalGoals extends Component {
  render() {
    const { sampleProfessionalGoals } = this.props;
    return (
      <div className="professional-goals__wrapper">
        <h2 className="professional-goals__title">Professional goals</h2>
        <ul className="professional-goals__list">
          {sampleProfessionalGoals.map((item, index) => {
            return (
              <li key={index} className="professional-goals__item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

ProfessionalGoals.propTypes = {
  sampleProfessionalGoals: PropTypes.array.isRequired
};

export default ProfessionalGoals;
