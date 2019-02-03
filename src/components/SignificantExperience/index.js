import React, { Component } from 'react';

class SignificantExperience extends Component {
  render() {
    const {sampleSigExperience} = this.props;
    return (
      <div className="significant-exp__wrapper">
        <h3 className="significant-exp__title">
          Significant Experience
        </h3>
        {sampleSigExperience.map((item, index)=>{
          return (
            <li className="significant-exp__item" key={index}>
              {item}
            </li>
          );
        })}
      </div>

    );
  }
}

export default SignificantExperience;
