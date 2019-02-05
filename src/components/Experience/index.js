import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Company from '../Company';
import "./Experience.scss";


class Experience extends Component {

  render() {
    const { sampleExperience } = this.props;
    return (
      <Fragment>
        <h2 className="experience__title">Experience</h2>
        <ul className="experience__list">
          {sampleExperience.map((item, index) => {
            return (
              <Company key={index} experience={item} />
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

Experience.propTypes = {
  sampleExperience: PropTypes.array.isRequired
};


export default Experience;
