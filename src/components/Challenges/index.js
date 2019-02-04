import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChallengesActions from '../ChallengesActions';

class Challenges extends Component {
  render() {
    const { challenges } = this.props;
    return (
      <ul className="challenges__list">
        {challenges.map((item, index )=> {
          return (
            <li key={index} className="challenges__item">
            <p className="challenges__item-summary">{item.summary}</p>
              <ChallengesActions challengesActions={item.actions} />
            </li>
          );
        })}
      </ul>
    );
  }
}

Challenges.propTypes ={
  challenges: PropTypes.array.isRequired
}

export default Challenges;
