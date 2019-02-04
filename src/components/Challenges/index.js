import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Challenges extends Component {
  render() {
    const { challenges } = this.props;
    console.log(challenges);
    return (
      <ul className="challenges__list">
        {challenges.map((item, index )=> {
          return (
            <li  key={index} className="challenges__item">
            <p className="challenges__item-summary">{item.summary}</p>

            </li>
          );
        })}
      </ul>
    );
  }
}

Challenges.PropTypes ={
  challenges: PropTypes.array.isRequired
}

export default Challenges;
