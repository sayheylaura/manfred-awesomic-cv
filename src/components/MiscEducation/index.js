import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MiscEducation extends Component {
  render() {
    const { sampleMiscEducation } = this.props;
    return (
      <div className="miscEducation__wrapper wrapper">
        <h2 className="miscEducation__title title">Miscellany</h2>
        <ul className="miscEducation__list list">
          {sampleMiscEducation.map((item, index) => {
            return (
              <li key={index} className="miscEducation__item">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

MiscEducation.propTypes = {
  sampleMiscEducation: PropTypes.array
};

export default MiscEducation;
