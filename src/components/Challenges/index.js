import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Challenges extends Component {
  render() {
    const { challenges } = this.props;
    console.log(challenges);
    return (
      <div className="Challenges__item">
        {challenges.map(item => {
          return (
            <p className="Challenges__sumary">
            {item.sumary}
            </p>
          );
        })}
      </div>
    );
  }
}

Challenges.PropTypes ={
  challenges: PropTypes.array.isRequired
}

export default Challenges;
