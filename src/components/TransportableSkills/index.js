import React, { Component } from 'react';
import PropTypes from "prop-types";

class TransportableSkills extends Component {
  render() {
    const {sampleTransSkills} = this.props;
    return (
      <div className="transSkills__wrapper wrapper">
      <h3 className="transSkills__title title">Soft skills</h3>
        <ul className="transSkills__list list">
        {sampleTransSkills.map((item, index)=>{
          return (
            <li key={index} className="transSkills__item">
              <p className="transSkills__text">
                {item}
              </p>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
}

TransportableSkills.propTypes = {
  sampleTransSkills: PropTypes.array.isRequired
};

export default TransportableSkills;
